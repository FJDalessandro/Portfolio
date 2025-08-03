import Body from "@/components/Body";
import { getTranslations } from "next-intl/server";

interface HomePageProps {
    params: { locale: string };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
    const t = await getTranslations();

    return <Body />;
}
