import Card from "./Card";

const cards = [
    { text: "Contorno de Ojos", img: "/producto2.png" },
    { text: "Bálsamo Labial", img: "/producto1.png" },
    { text: "Sérum de Ácido Hialurónico", img: "/producto4.png" },
];

export default function CardSection(){
    return(
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
                <Card key={card.text} text={card.text} img={card.img} />
            ))}
        </div>
    )
}
