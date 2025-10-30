import { FlipWords } from "../ui/FlipWords";

export default function InfoSection(){
    const words = ["radiante", "luminoso", "suave", "saludable", "natural"];
    return(
        <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-0">
            <p className="text-[#535657] text-sm sm:text-base">Crema facial de células madre vegetales de arroz</p>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#2f3031] leading-tight">
                Un despertar
                <span className="italic block">
                    <FlipWords words={words} />
                </span>
                para tu piel
            </h2>

            <p className="text-[#535657] text-sm sm:text-base">
                Con cada uso, la suavidad y el brillo natural de tu piel se intensifican, reflejando la alegría y serenidad que llevas dentro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
                <button className="bg-lime-300 text-[#2f3031] rounded-full shadow-lg py-3 px-6 text-lg font-light cursor-pointer hover:scale-105 transition-all duration-300">
                    Comprar
                </button>

                <div className="flex flex-col">
                    <p className="text-2xl text-[#2f3031]">$34</p>
                    <p className="text-xs text-[#535657]">por unidad</p>
                </div>
            </div>
        </div>
    )
}
