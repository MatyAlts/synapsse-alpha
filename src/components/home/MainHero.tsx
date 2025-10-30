import Image from "next/image"
import CardSection from "./CardsSection"
import Link from "next/link"
import InfoSection from "./InfoSection"
import PropertyGroup from "../generics/PropertyGroup"

export default function MainHero(){
    return(
        <section className="px-4 py-10">
            <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
                <div className="order-2 lg:order-1 flex flex-col gap-6">
                    <div className="grid gap-4 sm:grid-cols-3">
                        <PropertyGroup img="/hidratacion-icon.png" text="Hidratación Profunda" img2="/plus-sign.svg"/>
                        <PropertyGroup img="/regeneracion-icon.png" text="Regeneración y Equilibrio" img2="/plus-sign.svg"/>
                        <PropertyGroup img="/antiarrugas-icon.png" text="Efecto Antiarrugas" img2="/plus-sign.svg"/>
                    </div>
                    <CardSection />
                </div>

                <div className="order-1 lg:order-2 flex flex-col gap-6">
                    <div className="relative rounded-3xl bg-gradient-to-r from-gray-200 via-white to-gray-100 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-white/40" />
                        <div className="relative grid gap-6 md:grid-cols-2 items-center">
                            <InfoSection />
                            <div className="flex items-center justify-center p-6">
                                <Image src="/main-product.png" alt="Producto principal" className="w-48 sm:w-64 lg:w-72" width={400} height={400} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center lg:justify-start">
                        <Link href="/shop"
                            className="relative bg-[#839EA7] text-white font-light text-base sm:text-lg px-6 py-3 h-[3.2em] rounded-full flex items-center gap-3 overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
                        >
                            <span>Ir a la Tienda</span>
                            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-[#7b52b9] transition-all duration-300 group-hover:w-32 group-hover:px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                    ></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
