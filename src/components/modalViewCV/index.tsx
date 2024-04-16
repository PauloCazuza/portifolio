'use client';

import { Dispatch, SetStateAction } from "react";
import Modal from "../modal";
import ViewCV from "../viewCV";

interface IModalViewCV {
    showModal: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

function ModalViewCV({
    showModal,
    setShowModal
}: IModalViewCV) {

    return (
        <Modal title="CV" show={showModal} onClose={() =>  setShowModal(false)}>
                <ViewCV />
        </Modal>
    );
}

export default ModalViewCV;