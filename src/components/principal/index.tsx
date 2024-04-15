"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonPrincipal from "../buttonPrincipal";
import ModalContact from "../modalContact";
import ModalViewCV from "../modalViewCV";

function Principal() {
    const [showModalEmail, setShowModalEmail] = useState(false);
    const [showModalCV, setShowModalCV] = useState(false);

    return (
        <>
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
                        <ButtonPrincipal
                            text="Visualizar CV"
                            onClick={() => setShowModalCV(true)}
                        />
                        <ButtonPrincipal
                            text="Contate-me"
                            type="secondary"
                            onClick={() => setShowModalEmail(true)}
                        />
                    </div>
                </div>
                <Image
                    src={require("../../assets/background-principal.jpg")}
                    className="h-screen object-cover rounded-b-[10%]"
                    alt="Background Principal"
                />
            </div>
            <div>
                <ModalContact key="modal-contact" showModal={showModalEmail} setShowModal={setShowModalEmail} />
            </div>
            <div>
                <ModalViewCV key="modal-view" showModal={showModalCV} setShowModal={setShowModalCV} />
            </div>
        </>
    );
}

export default Principal;