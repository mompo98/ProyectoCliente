import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";// Asumiendo que data.json contiene la información de las subcarpetas
import { getFolders } from "../data";

export const runtime = 'nodejs';// Importa la función para obtener los folders

// ...

export default async function Designs({
    searchParams: { customUsername },
}) {
    // Obtener los datos de los folders utilizando la función
    const { ecorp, ligaAlicante, sirmaza, particulares } = await getFolders();

    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
                <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					
                    {/* Mostrar cada subcarpeta como una card */}
                    {[ecorp, ligaAlicante, sirmaza, particulares].map((folder, index) => (
                        <Card key={index}>
                            <Link href={`/designs/${folder}`}>
                                <div>
								<img style={{ width: '300px', margin: '0 auto', display: 'block' }} src={`/img/${folder}/${folder}.png`} alt={folder} className="w-full h-auto" />                                    <h2 style={{ color: 'white', fontSize:45, textAlign:'center' }} className="text-xl font-semibold">{folder}</h2>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}