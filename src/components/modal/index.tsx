"use client";
import { ReactNode } from "react";

interface IModal {
    title: string;
    hasTitle?: boolean;
    children: ReactNode;
    show: boolean;
    onClose: () => void;
}

function Modal({
    title,
    hasTitle = true,
    children,
    show,
    onClose
}: IModal) {
    if (typeof document === "undefined")
        return null;
    
    document.addEventListener('click', function (event) {
        var backgroundDiv = document.getElementById('div-background-modal');
        // @ts-ignore
        if (backgroundDiv?.isEqualNode(event.target))
            onClose();
    });


    if (!show) return

    return (
        <div
            id="div-background-modal"
            className="fixed top-0 w-[100%] h-[100vh] bg-gray-700 bg-opacity-50 flex flex-col justify-center items-center z-[100]"
        >
            <div
                className="bg-white rounded-3xl lg:rounded-xl relative">
                {children}
            </div>
        </div>
    );
}

export default Modal;