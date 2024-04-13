"use client";

import { IMessages } from "@/interfaces/chat";
import Image from "next/image";
import { useState } from "react";

interface IFormChat {
    onSave: (event: IMessages) => void;
}


function FormChat({
    onSave
}: IFormChat) {
    const [message, setMessage] = useState("");

    const submit = () => {
        onSave({
            message,
            type: "user",
            animation: false
        })
        setMessage("");
    }

    return (
        <div className="flex items-center lg:px-[20%] mb-10 bg-opacity-40">
            <input
                className="flex-[11] h-[100%] px-11 m-4 rounded-full"
                placeholder="Faça sua pergunta aqui."
                onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                        submit();
                    }
                }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button
                className=" flex  mr-4 justify-center items-center h-1/2"
                onClick={submit}
            >
                <div className=" bg-blue-700 rounded-full size-16 p-4 flex items-center">
                    <Image
                        src={require("../../assets/send.png")}
                        className="object-contain "
                        alt="Send"
                    />
                </div>
            </button>
        </div>
    );
}

export default FormChat;