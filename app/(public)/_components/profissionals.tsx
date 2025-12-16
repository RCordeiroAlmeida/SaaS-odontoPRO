import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import fotoImg from "../../../public/foto1.png"
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Professionals(){
    return(
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-center mb-12">Profissionais credenciados</h2>
            </div>

            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent>
                        <div>
                            <div className="relative h-48">
                                <Image
                                    src={fotoImg}
                                    alt="Foto do Profissional"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <div className="p-4 space-y-4">
                            <div className="flex">
                                <div>
                                    <h3>Rafael Cordeiro</h3>
                                    <p>R. x - Centro, Itaquaquecetuba/SP</p>
                                </div>
                            </div>

                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                            
                            <Link
                                href="/clinica/123"
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center py-2 rounded-md text-sm md:text-base font-medium"
                            >
                                Agendar horário
                                <ArrowRight className="ml-2"/>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </section>
    )
}