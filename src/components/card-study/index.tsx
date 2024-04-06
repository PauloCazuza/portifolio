import Image from "next/image";

interface ICardStudy {
    title?: string;
    subcription?: string;
    uri: string;
}

function CardStudy({
    title = "Testes unitários",
    subcription = "Projetos de testes unitários com aplicações front-end e back-end",
    uri = require("../../assets/test.png")
}: ICardStudy) {
    return (
        <div
            className="w-52 p-5 m-5 sm:w-full md:w-full rounded-2xl bg-gray-200 bg-opacity-40 flex flex-col flex-1 justify-center items-center"
        >
            <Image
                src={uri}
                alt={title}
                className="w-48 h-48 bg-cover"
            />
            <p className="w-[90%] h-[2px] bg-slate-300 my-2" />
            <p className="font-bold py-2 text-center text-xl">{title}</p>
            <p className="py-2 text-center text-base">{subcription}</p>
        </div>
    );
}

export default CardStudy;