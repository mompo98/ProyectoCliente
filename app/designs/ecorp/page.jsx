import { Navigation } from "../../components/nav";

export default function Ecorp() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navigation />
            <div className="flex-grow bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
                <div className="container px-4 mx-auto">
                    <div className="mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
                        {/* Tres imágenes */}
                        <div className="w-full justify-center items-center space-x-8">
                            <div className="w-full">
                                <img src="/img/ecorp/cams/cams.png" alt="Cams" className="w-full h-auto object-contain" />
                            </div>
                            <div className="w-full">
                                <img src="/img/ecorp/banners/banners.png" alt="Banners" className="w-full h-auto object-contain" />
                            </div>
                            <br></br>
                            <div className="w-full">
                                <img src="/img/ecorp/tags/tags.png" alt="Tags" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}