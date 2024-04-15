"use client";

import { IEmail } from "@/interfaces/email";
import sendEmail from "@/services/email";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { BeatLoader } from "react-spinners";
import Modal from "../modal";

interface IModalContact {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

function ModalContact({
    showModal,
    setShowModal
}: IModalContact) {
    const [formModal, setFormModal] = useState<IEmail>({
        body: "",
        subject: "",
        from: "",
        to: "paulorcazuza@gmail.com",
    });
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmailToPaulo = async () => {
        if (name === "" || formModal.body === "" || formModal.from === "")
            return alert("Por favor preencha os campos corretamente");

        try {
            setLoading(true);
            const data = await sendEmail({
                ...formModal,
                subject: "Mensagem do seu portiforio",
                body: `Mensagem de ${name} (${formModal.from}):\n` + formModal.body
            });

            if (data)
                alert("Email enviado com sucesso");
            else
                alert("Erro ao enviar email. Por favor tente novamente mais tarde.");
        } catch (error) {

        } finally {
            setLoading(false);
        }
    }

    return (
        <Modal
            title=""
            hasTitle={false}
            show={showModal}
            onClose={() => setShowModal(!showModal)}
        >
            <div className="flex flex-col lg:flex-row lg:p-10 lg:w-[70vw] lg:h-[55vh] justify-center items-center">
                <div className="flex flex-[2] items-center justify-center size-72">
                    <Image
                        src={require("../../assets/email.jpg")}
                        className="object-contain rounded-3xl"
                        alt="email"
                    />
                </div>
                <div className="flex flex-[3] flex-col p-5 w-full items-center">
                    <p className="w-[70%] font-bold">Contato:</p>
                    <input
                        className="mt-5 mb-2 p-2 rounded-3xl text-base bg-[#e6e6e6] w-[70%]"
                        placeholder="Nome"
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        className="mb-2 p-2 rounded-3xl text-base bg-[#e6e6e6] w-[70%]"
                        placeholder="Exemplo@mail.com"
                        type="email"
                        onChange={e => setFormModal({ ...formModal, from: e.target.value })}
                    />
                    <textarea
                        placeholder="Sua mensagem..."
                        className="p-2 rounded-3xl text-base h-[20vh] max-h-[20vh] bg-[#e6e6e6] w-[70%]"
                        onChange={e => setFormModal({ ...formModal, body: e.target.value })}
                    />
                    {
                        loading ?
                            <div className="mt-5">
                                <BeatLoader color="#6c95e0" />
                            </div>
                            :
                            <button
                                className="bg-[#6c95e0] w-[70%]  mt-5 p-2 rounded-xl text-white text-base font-bold"
                                onClick={sendEmailToPaulo}
                            >
                                Enviar
                            </button>

                    }
                </div>
            </div>
        </Modal>
    );
}

export default ModalContact;