"use client";

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTranslations } from "next-intl";

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [submitMessage, setSubmitMessage] = useState("");
    const t = useTranslations("contact");

    const validationSchema = Yup.object({
        name: Yup.string().min(2, t("validation.nameMin")).required(t("validation.nameRequired")),
        email: Yup.string().email(t("validation.emailInvalid")).required(t("validation.emailRequired")),
        subject: Yup.string().min(5, t("validation.subjectMin")).required(t("validation.subjectRequired")),
        message: Yup.string().min(10, t("validation.messageMin")).required(t("validation.messageRequired")),
    });

    const handleSubmit = async (
        values: { name: string; email: string; subject: string; message: string },
        { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void },
    ) => {
        try {
            setSubmitStatus("idle");

            // Enviar datos a la API route protegida
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    subject: values.subject,
                    message: values.message,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Éxito
                setSubmitStatus("success");
                setSubmitMessage(t("form.success"));
                resetForm();
            } else {
                // Error del servidor
                setSubmitStatus("error");
                setSubmitMessage(data.error || t("form.error"));
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            setSubmitStatus("error");
            setSubmitMessage(t("form.error"));
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-4">{t("title")}</h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                    {/* Información de contacto */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-white mb-6">{t("contactInfo")}</h3>
                            <p className="text-gray-300 mb-8">{t("contactDescription")}</p>
                        </div>

                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{t("email")}</h4>
                                    <p className="text-gray-300">franciscojdalessandro@gmail.com</p>
                                </div>
                            </div>

                            {/* Ubicación */}
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-lg flex items-center justify-center border border-gray-700">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{t("location")}</h4>
                                    <p className="text-gray-300">{t("locationValue")}</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes sociales */}
                        <div>
                            <h4 className="font-semibold text-white mb-4">{t("followMe")}</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="https://x.com/fjdalessandro?s=21&t=iLV85cJd3Izpuvn6s9qWaA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/francisco-dalessandro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-blue-900 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://github.com/FJDalessandro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
                        <h3 className="text-2xl font-semibold text-white mb-6">{t("sendMessage")}</h3>

                        {/* Mensaje de estado */}
                        {submitStatus === "success" && (
                            <div className="mb-6 p-4 bg-green-900/50 border border-green-600 rounded-lg">
                                <p className="text-green-300">{submitMessage}</p>
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="mb-6 p-4 bg-red-900/50 border border-red-600 rounded-lg">
                                <p className="text-red-300">{submitMessage}</p>
                            </div>
                        )}

                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                subject: "",
                                message: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }: { isSubmitting: boolean }) => (
                                <Form className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                            {t("form.name")}
                                        </label>
                                        <Field
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400"
                                            placeholder={t("form.namePlaceholder")}
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                            {t("form.email")}
                                        </label>
                                        <Field
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400"
                                            placeholder={t("form.emailPlaceholder")}
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                            {t("form.subject")}
                                        </label>
                                        <Field
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400"
                                            placeholder={t("form.subjectPlaceholder")}
                                        />
                                        <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                            {t("form.message")}
                                        </label>
                                        <Field
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            rows={5}
                                            className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors resize-none bg-gray-700/80 backdrop-blur-sm text-white placeholder-gray-400"
                                            placeholder={t("form.messagePlaceholder")}
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-6 py-3 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? t("form.sending") : t("form.send")}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
