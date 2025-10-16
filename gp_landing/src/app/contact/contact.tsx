'use client';

import { FaEnvelope, FaPaperPlane, FaPhone, FaRegCommentDots, FaUser } from "react-icons/fa";
import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const consClassName = ({
        classNameSeparatorTop: "text-blue-300",
        classNameSeparatorBotton: "text-orange-300",
        classNameBg: "bg-gradient-to-t from-blue-50/70 to-emerald-900/70" //bg-gradient-to-t from-blue-50 to-emerald-900 bg-gradient-to-r from-blue-50 to-indigo-100
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulación de envío
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            // Limpiar mensaje después de 3 segundos
            setTimeout(() => setSubmitStatus(''), 3000);
        }, 2000);
    };
    return (
        <>
            <div id='contact' className={`${consClassName.classNameBg} w-full flex items-center justify-center py-12 px-4 min-h-45/100`}>
                <div className="container mx-auto px-6 md:px-10">
                    <h2 className="text-landing-subtitle">
                        Envíanos un Mensaje
                    </h2>
                    <div className="grid grid-cols-1 place-items-center" >

                        {/* Formulario */}
                        <form className='w-full max-w-xl space-y-6' onSubmit={handleSubmit}>
                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                                    <p className="color-text">
                                        ¡Mensaje enviado exitosamente! Te responderemos pronto.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Nombre */}
                                <div>
                                    <label htmlFor="name" className="block text-sm color-text-black mb-2">
                                        Nombre Completo *
                                    </label>
                                    <div className="relative">
                                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 color-text-black"
                                            placeholder="Tu nombre completo"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-sm color-text-black mb-2">
                                        Correo Electrónico *
                                    </label>
                                    <div className="relative">
                                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 color-text-black"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>

                                {/* Teléfono */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm color-text-black mb-2">
                                        Teléfono
                                    </label>
                                    <div className="relative">
                                        <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 color-text-black"
                                            placeholder="(+506) 0000-0000"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm color-text-black mb-2">
                                        Mensaje *
                                    </label>
                                    <div className="relative">
                                        <FaRegCommentDots className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none color-text-black"
                                            placeholder="Cuéntanos más detalles sobre tu consulta..."
                                        />
                                    </div>
                                </div>

                                {/* Botón de envío */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 color-text font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:scale-105 duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                // className="w-full bg-cyan-500 text-white font-medium py-3 px-6 rounded-md shadow-lg transition-transform hover:bg-cyan-600 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            <span className='color-text-black'>Enviando...</span>
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="w-5 h-5" />
                                            <span className='color-text'>Enviar Mensaje</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            <p className="mt-4 text-sm color-text-black text-center">
                                * Campos obligatorios
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;