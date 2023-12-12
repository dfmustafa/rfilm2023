import { useState } from "react";

export const UseModal = ()=>{
    const [isOpen, setIsOpen] = useState(true);

    return {
        isOpen,
        openModal: ()=> setIsOpen(true),
        closeModal: ()=> setIsOpen(false),
    };
};