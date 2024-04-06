import Image from "next/image";
import ButtonPrincipal from "../buttonPrincipal";

function Principal() {
    return (
        <div
            className="rounded-s-xl"
        >
            <div

                className="bg-gray-950 w-full h-full absolute opacity-60 z-10 rounded-b-[10%]"
            />
            <div className="absolute top-[30%] w-full z-20 flex flex-col justify-center items-center">
                <Image
                    src={require("../../assets/foto.png")}
                    className="rounded-full size-72"
                    alt="Paulo Roberto"
                />
                <p className="text-white text-center py-5 text-3xl ">
                    Paulo Roberto Lopes
                </p>
                <p className="text-white text-center text-xl ">
                    Dev. Full Stack
                </p>
                <div className="py-5">
                    <ButtonPrincipal text="Download CV" />
                    <ButtonPrincipal text="Contate-me" type="secondary" />
                </div>
            </div>
            <Image
                src={require("../../assets/background-principal.jpg")}
                className="h-screen object-cover rounded-b-[10%]"
                alt="Background Principal"
            />
        </div>
    );
}

export default Principal;