'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface IBallonChat {
    type: "system" | "user";
    message: string;
    animation?: boolean;
}

function BallonChat({
    type,
    message,
    animation = false
}: IBallonChat) {
    const [messageWithDelay, setMessageWithDelay] = useState("");

    useEffect(() => { displayMessage() }, []);


    function displayMessage() {
        let messageElement = "";
        let messageIndex = 0;

        if (!animation) {
            setMessageWithDelay(message);
            return;
        }

        const typingEffect = setInterval(() => {
            if (messageIndex === message.length) {
                clearInterval(typingEffect);
                return;
            }
            messageElement += message.charAt(messageIndex);
            setMessageWithDelay(messageElement);
            messageIndex++;
        }, 50);
    }

    return (
        <>
            <div className="flex my-4">
                {
                    type === "system"
                        ?
                        <div className="flex w-full items-end justify-end">
                            <div className="text-justify bg-blue-500 text-white py-2 px-4 max-w-[50%] rounded-tl-xl rounded-br-xl rounded-bl-xl shadow">
                                <p>{messageWithDelay}</p>
                            </div>
                            <div className="flex h-full">
                                <Image
                                    src={require("../../assets/foto.png")}
                                    className="rounded-full size-12"
                                    alt="Paulo Roberto"
                                />
                            </div>
                        </div>

                        :
                        <div className="flex w-full justify-start">
                            <div className="flex h-full">
                                <Image
                                    src={require("../../assets/avatar.png")}
                                    className="rounded-full size-12"
                                    alt="Paulo Roberto"
                                />
                            </div>
                            <div className="text-justify bg-gray-200 py-2 px-4 rounded-tr-xl max-w-[50%] rounded-bl-xl rounded-br-xl shadow">
                                <p>{message}</p>
                            </div>
                        </div>
                }
            </div>

        </>
    );
}

export default BallonChat;