'use client';

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg border-b border-white/10">
            <div className="max-w-98/100 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-36">

                    {/* Bloque izquierdo (logo + enlace "Bio") */}
                    <div className="flex items-center space-x-6">
                        <Link href="/" className="color-text text-2xl font-bold">
                            <Image
                                src="/nflogo.png"
                                alt="Ganaderia Picado"
                                width={125}
                                height={125}
                                className="absolute bottom-0 left-10 animate-flotar"
                            />
                        </Link>
                    </div>
                    {/* Bloque derecho (enlace "Contacto") */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="#contact" className="color-text-landing-title">
                            Contacto
                        </Link>
                        <div className="hidden md:flex space-x-4">
                            <Link href="#inicio" className="color-text-landing-title">
                                Bio
                            </Link>
                        </div>
                    </div>

                    {/* Botón móvil */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="color-text focus:outline-none"
                        >
                            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="md:hidden bg-black/90 color-text px-4 py-6 space-y-4">
                    <Link href="#inicio" onClick={() => setMenuOpen(false)} className="block">Bio</Link>
                    <Link href="#contact" onClick={() => setMenuOpen(false)} className="block">Contacto</Link>
                </div>
            )}
        </nav>

    );
}
