"use client";

import { IMessages } from "@/interfaces/chat";
import { sendChatGPT } from "@/services/chat";
import { getGreeting } from "@/utils/frases";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BallonChat from "../ballonChat";
import FormChat from "../formChat";

function Chat() {
    const [messages, setMessages] = useState<IMessages[]>([{
        type: "system",
        message: getGreeting() + " Sou um chat desenvolvido para responder perguntas a respeito de Paulo Roberto, quaisquer duvidas sobre suas experiencias e carreira e estarei a disposição para responder. ",
    }]);
    const [loading, setLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (messages.length === 1)
            return
        const lastMessage = messages[messages.length - 1];

        if (lastMessage.type === "user") {
            const lastMessageClient = messages.findLast(mesg => mesg.type === "user");

            if (lastMessageClient)
                messageToChatGPT(lastMessageClient.message);
        }

        scrollChatToBottom();
    }, [messages])

    const insertMessage = (message: IMessages) => {
        setLoading(true);
        setMessages([...messages, message]);
    }

    const messageToChatGPT = async (message: string) => {
        setLoading(true);
        try {
            const messageByChatGPT = await sendChatGPT(message);
            setMessages([...messages, {
                message: messageByChatGPT,
                type: "system",
                animation: true,
            }]);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    const scrollChatToBottom = () => {
        chatRef.current!.scrollTop = chatRef.current!.scrollHeight;
    };

    return (
        <div className="flex flex-col flex-1 w-[100vw] h-[100vh]">
            <div
                ref={chatRef}
                className="flex rounded-lg flex-col mt-24 h-[80%] w-full px-[20%] overflow-auto "
            >
                {
                    messages.map((item, index) => {
                        return (
                            <BallonChat
                                key={"message" + index}
                                type={item.type}
                                message={item.message}
                                animation={item.animation}
                                scrollChatToBottom={scrollChatToBottom}
                            />
                        )
                    })
                }
                {
                    loading && (
                        <div className="flex justify-end">
                            <Image
                                src={require("../../assets/digitando.gif")}
                                alt="digitando..."
                                className="object-cover size-8"
                            />
                        </div>
                    )
                }

            </div>
            <div className="flex flex-col justify-start h-[20%] p-10">
                <FormChat onSave={insertMessage} />
            </div>
        </div>
    );
}

export default Chat;