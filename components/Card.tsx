'use client'
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import { CardProps } from "@/app/types/types";
import { CiCalendarDate } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import Link from "next/link";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Card = ({ title, link, isNew = false, time, date, description, image }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="relative w-full h-full p-4">
                <div className={isNew == false ? "bg-gray/20 w-full h-full clip-path rounded-lg relative" : 'bg-white w-full h-full rounded-lg relative'}>
                    <div>
                        <div className="overflow-hidden">
                            <Image
                                src={image}
                                alt={title}
                                width={1000}
                                height={1000}
                                className="hover:scale-[1.1] transition-all duration-300 h-[300px] cursor-pointer"
                                onClick={() => setIsOpen(true)}
                            />
                        </div>
                    </div>
                    <h1 className="text-black text-2xl font-bold px-10 py-3">
                        {title}
                    </h1>

                    <p className="text-black/70 px-10 py-3">
                        {description}
                    </p>

                    {isNew == true ? (
                        <>
                            <hr className="w-full border-gold my-4" />

                            <div className="grid grid-cols-2 justify-items-center gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                    <CiCalendarDate className="text-gold text-3xl" />
                                    <p className="text-black/70">
                                        {date}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <CiTimer className="text-gold text-3xl" />
                                    <p className="text-black/70">
                                        {time}
                                    </p>
                                </div>
                            </div>
                        </>
                    ) : ''}

                </div>

                {isNew == false && (
                    <div className="flex items-center justify-center w-10 h-10 absolute bottom-0 left-0 border-2 border-gold rounded-full">
                        <Link href={link} target="_blank" rel="noopener noreferrer">
                            <FaArrowLeft className="text-navy text-2xl" />
                        </Link>
                    </div>
                )}

                <Modal open={isOpen} onClose={() => setIsOpen(false)} center classNames={{modal: 'overflow-hidden'}}>
                    <Image src={image} alt={title} width={390} height={390} className="hover:scale-[1.1] transition-all duration-300 overflow-hidden" />
                </Modal>
            </div>
        </>
    )
}

export default Card;