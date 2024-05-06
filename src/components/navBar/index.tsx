'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ModalContact from "../modalContact";

function NavBar() {
    const [showHamburger, setShowHamburguer] = useState(false);
    const [colorNavBar, setColorNavBar] = useState("bg-transparent");
    if (typeof window === "undefined")
        return null;    
    const [linkCurrent, setLinkCurrent] = useState(window.location.pathname);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', function () {
            var scrollPosition = window.scrollY;
            const height = window.innerHeight - 200;

            setColorNavBar(value => {
                if (scrollPosition > height) {
                    if (value === "bg-transparent")
                        return ("bg-gray-900")
                } else {
                    if (value === "bg-gray-900")
                        return ("bg-transparent")
                }
                return value
            })

        });

        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, []);

    const linkSelected = (link: string) => {
        const isLink = linkCurrent.includes(link);

        return isLink ? "text-blue-700  dark:text-blue-500" : "";
    }

    return (
        <>
            <div className={"fixed w-full z-50 " + colorNavBar}>
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/home"
                        onClick={() => {
                            setLinkCurrent("/home");
                            setShowHamburguer(false);
                        }}>
                        <div className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image
                                src={require("../../assets/Group.svg")}
                                alt="icon"
                                className="size-10 bg-cover"
                            />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-[#445964] ">Paulo Roberto</span>
                        </div>
                    </Link>
                    <div className="flex md:order-2">
                        <button
                            data-collapse-toggle="navbar-search"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-search"
                            aria-expanded="false"
                            onClick={() => { setShowHamburguer(!showHamburger) }}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full md:flex md:w-auto md:order-1" hidden={!showHamburger} id="navbar-search">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-[#E5E5E5] md:dark:bg-transparent dark:border-gray-700">
                            <li>
                                <Link
                                    href="/home"
                                    className={"block py-2 px-3 text-[#445964]  rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500" + linkSelected("home")}
                                    onClick={() => {
                                        setLinkCurrent("/home");
                                        setShowHamburguer(false);
                                    }}>
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sobre"
                                    className={"block py-2 px-3 text-[#445964]  rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500" + linkSelected("sobre")}
                                    onClick={() => {
                                        setLinkCurrent("/sobre");
                                        setShowHamburguer(false);
                                    }}>sobre</Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className={"block py-2 px-3 text-[#445964]  rounded md:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500" + linkSelected("contato")}
                                    onClick={() => {
                                        setShowModal(true)
                                        setShowHamburguer(false);
                                    }}>contato</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ModalContact showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default NavBar;