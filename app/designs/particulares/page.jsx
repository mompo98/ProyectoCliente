import { Navigation } from "../../components/nav";

export default function Particulares() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-grow bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
                <div className="container px-4 mx-auto">
                    <div className="mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                        {/* Tres imágenes */}
                        <div className="w-full justify-center items-center space-x-8">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div className="w-full">
                                <img src="/img/particulares/webcam/JUKI.png" alt="Cams" className="w-full h-auto object-contain" />
                            </div>
                            <br></br>
                            <div className="w-full">
                                <img src="/img/particulares/webcam/VIPER.png" alt="Cams" className="w-full h-auto object-contain" />
                            </div>
                            <br></br>
                            <div className="w-full">
                            <img src="/img/particulares/overlay/boom.png" alt="Cams" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}