# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site (Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 3). Content is in Spanish/English via `next-intl`. Contact form submits to an internal API route which sends email through EmailJS.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000, redirects to /es)
npm run build    # production build (fails on TS errors and ESLint errors — both are enforced, see next.config.js)
npm run start    # run the production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

Windows helper scripts `clean.bat` / `clean-manual.bat` wipe `.next`, `node_modules`, and `package-lock.json`, then reinstall and restart dev — use only if the user asks to "clean" the project, since it is destructive to local install state.

## Architecture

**Locale-prefixed routing.** All pages live under `src/app/[locale]/`. Supported locales are `es` (default) and `en`, defined in `src/i18n.ts` (`locales`, `defaultLocale`, `Locale` type). `src/middleware.ts` wraps `next-intl`'s middleware to force a locale prefix (`localePrefix: "always"`) and then layers on security headers (CSP, X-Frame-Options, etc.) for every non-API, non-static request.

- Root `i18n.ts` (at repo root) just re-exports `src/i18n.ts` — this is what `next.config.js` points `next-intl/plugin` at (`createNextIntlPlugin("./src/i18n.ts")`).
- `src/i18n/request.ts` is a leftover duplicate of the same request-config logic using relative `../messages` imports; it is not wired into `next.config.js`. Prefer editing `src/i18n.ts` and treat `src/i18n/request.ts` as legacy/dead unless you confirm it's actually loaded.
- Translation strings live in `src/messages/es.json` and `src/messages/en.json`, organized by section key (`nav`, `hero`, `contact.form`, `contact.validation`, `common`, ...). Adding a locale = add it to `locales` in `src/i18n.ts` + add a matching `src/messages/<locale>.json`.
- Client components read translations with `useTranslations('section')` from `next-intl`; server components use `getTranslations('section')` from `next-intl/server`.
- `src/components/LanguageToggle.tsx` switches locale by navigating straight to `/${newLocale}` (not by rewriting the current path) — this was a deliberate fix for a `/en/en` duplication bug (see `LANGUAGE_TOGGLE_FIX.md`); don't reintroduce path-preserving logic without care.

**Page composition.** `src/app/[locale]/page.tsx` renders `Body`, which is a client component (`"use client"`) that stacks the section components in order: `AboutMe → Projects → Experience → Contact`. `src/app/[locale]/layout.tsx` is a server component that validates the locale (`notFound()` if unsupported), loads messages via `getMessages`, wraps children in `NextIntlClientProvider`, and renders the persistent `Navbar`.

**Contact form flow.** `Contact.tsx` (Formik + Yup) posts to `src/app/api/contact/route.ts`, a Next.js Route Handler (not a direct client-side EmailJS call). That route:
- only accepts `POST` with `Content-Type: application/json` (other methods/content-types are rejected);
- validates the body server-side with its own Yup schema (name/email/subject/message, same shape as the client-side one — keep them in sync if you change validation rules);
- applies simple in-memory per-IP rate limiting (3 requests/minute, keyed off `x-forwarded-for`/`x-real-ip`) — this resets on redeploy/restart and won't work correctly across multiple serverless instances, it's a basic deterrent only;
- sends the email via `@emailjs/nodejs`, using `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_USER_ID` (public key) and `EMAILJS_PRIVATE_KEY` from environment variables (see `env.example`; `EMAILJS_PRIVATE_KEY` has no example default and must be set locally in `.env.local`).

**Security headers** are defined in two places that must stay consistent if changed: `src/middleware.ts` (applied per-request, includes full CSP) and `vercel.json` (static headers applied at the CDN/hosting layer as a fallback/duplicate for `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`). The CSP's `connect-src`/`script-src` allowlist EmailJS domains (`https://api.emailjs.com`, `https://www.emailjs.com`) — extend this if adding another external script/API dependency.

**Styling.** Tailwind CSS v3 (intentionally, per `README.md`, for Vercel compatibility — don't upgrade to v4 without checking that constraint still applies). Content globs cover `src/pages`, `src/components`, `src/app`. Dark gradient theme with cyan (`#06b6d4`) accents; global styles in `src/app/globals.css`.

**Import alias**: `@/*` maps to `src/*` (see `tsconfig.json`).

## Notes on stray docs

`I18N_SETUP.md`, `SECURITY_SETUP.md`, `LANGUAGE_TOGGLE_FIX.md`, and `TROUBLESHOOTING.md` are historical implementation notes at the repo root, not living documentation — useful for understanding *why* the i18n/security/locale-toggle code looks the way it does, but not guaranteed to reflect the current code exactly.
