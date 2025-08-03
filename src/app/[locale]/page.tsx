import Body from "@/components/Body";
import { getTranslations } from "next-intl/server";

interface HomePageProps {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
    await params; // Para evitar el warning de variable no usada
    await getTranslations(); // Para evitar el warning de variable no usada

    return <Body />;
}
