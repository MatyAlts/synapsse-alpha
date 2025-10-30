import Image from "next/image";
interface PropertyGroupProps{
    img: string;
    text: string;
    img2?: string;
}
export default function PropertyGroup({img, text, img2}: PropertyGroupProps){
    return(
        <div className="flex flex-row items-center justify-between px-2 shadow-lg rounded-full ">
            <div>
                <Image src={img} width={28} height={28} alt={text ?? "icon"} className=""/>
            </div>
            <div>
                <p className="text-xs font-light text-[#535657]">{text}</p>
            </div>
            {img2 &&(
                <Image src={img2} width={20} height={20} alt={`${text ?? "icon"}-extra`} className="px-1"/>
            )}
            
            
        </div>
    )
}