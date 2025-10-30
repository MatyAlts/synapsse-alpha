interface CardProps{
    text: string,
    img: string
}
export default function Card({text, img}: CardProps){
    return(
        <div className="relative flex flex-col items-center justify-between gap-4 rounded-3xl border border-green-100 bg-white/80 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1">
            <p className="text-center text-[#5f6c70] font-medium text-lg">{text}</p>
            <img src={img} alt="" className="w-32 h-32 object-contain"/>
        </div>
    )
}
