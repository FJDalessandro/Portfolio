import Body from "@/components/Body";
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <div className="relative min-h-screen">
            {/* Fondo global para toda la página */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
                <div className="absolute inset-0 bg-[url('/desktop-bg.svg')] bg-cover bg-center bg-no-repeat opacity-30"></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10">
                <Navbar />
                <Body />
            </div>
        </div>
    );
}
