import { useState } from "react";

export const UseModalPortal = ()=>{
    const [isOpen, setIsOpen] = useState(true);

    return {
        isOpen,
        openModal: ()=> setIsOpen(true),
        closeModal: ()=> setIsOpen(false),
    };
};