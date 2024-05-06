"use client";

import { IsSafari } from "@/utils/browser";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalContact from "../modalContact";
import ModalViewCV from "../modalViewCV";
const AnimationJson = require("../../assets/Animation-paulo.json");

function Principal() {
    const [showModalEmail, setShowModalEmail] = useState(false);
    const [showModalCV, setShowModalCV] = useState(false);
    const percentage = IsSafari() ? document.body.offsetWidth * 0.5 * 0.8 : "100%";
    console.log("Is Safari", IsSafari())

    return (
        <>
            <div
                className="rounded-s-xl flex w-[100%] h-[100vh] bg-[#E5E5E5]"
            >
                <div className="flex flex-col flex-1 justify-center pl-36  h-full w-full
                    animate-fade-right animate-once 
                ">
                    <div className="flex-1 flex justify-end flex-col">
                        <p className="text-[#445864] text-2xl">
                            Olá pessoas,
                        </p>
                        <p className="text-[#445864] text-7xl font-bold">
                            EU SOU
                        </p>
                        <p className="text-[#445864] text-7xl font-bold">
                            PAULO ROBERTO
                        </p>
                        <p className="text-[#445864] text-2xl">
                            Seja bem-vindo ao meu portifólio website
                        </p>
                    </div>
                    <div
                        className="flex flex-1 flex-col justify-around"
                    >
                        <div
                            className="flex justify-start flex-1 items-center"
                        >
                            <Link
                                href="/sobre"
                                className="bg-[#283137] flex max-h-14 items-center text-xl font-bold drop-shadow-xl  text-white rounded-2xl p-4"
                            >
                                Saiba mais sobre mim
                            </Link>
                        </div>
                        <div className="flex flex-1 items-end">
                            <Link
                                href="https://github.com/PauloCazuza"
                                className="mr-4"
                            >
                                <Image
                                    src={require("../../assets/Git.svg")}
                                    alt="icon"
                                    className="size-7 bg-cover my-10"
                                />
                            </Link>
                            <Link
                                href="https://br.linkedin.com/in/paulo-roberto-lopes-402b181a2"
                                className="mr-4"
                            >
                                <Image
                                    src={require("../../assets/Linkedin.svg")}
                                    alt="icon"
                                    className="size-7 bg-cover my-10"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col flex-1 justify-center items-center h-full w-full">
                    <Player
                        autoplay
                        direction={1}
                        keepLastFrame
                        speed={0.7}
                        src={require("./animation.json")}
                        style={{ height: percentage, width: percentage }}
                    />
                </div>

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