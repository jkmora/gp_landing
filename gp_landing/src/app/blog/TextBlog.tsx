import React from 'react';

const consClassName = ({
    classNameSeparatorTop: "text-orange-300",
    classNameSeparatorBotton: "text-orange-300",
    classNameBg: "bg-gradient-to-r from-green-900 via-stone-800 to-green-700" //"bg-gradient-to-r from-white via-blue-50 to-white"
});

const TextBlog: React.FC = () => {
    return (
        <>
            <section className={`w-full py-12 min-h-20/100`}>
                <div className="container mx-auto">
                    <div className="max-w-sm w-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                        {/* Imagen */}
                        <img
                            src="https://picsum.photos/400/200"
                            alt="Noticia"
                            className="w-full h-48 object-cover"
                        />

                        {/* Contenido */}
                        <div className="p-4">
                            {/* Tipo y fecha */}
                            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                                <span className="uppercase font-bold text-red-600">Breaking</span>
                                <span>16 Jul 2025</span>
                            </div>

                            {/* Título */}
                            <h3 className="text-lg font-bold text-gray-900 leading-tight mb-2">
                                Verstappen gana bajo la lluvia en Silverstone
                            </h3>

                            {/* Descripción */}
                            <p className="text-sm text-gray-600">
                                En una carrera cargada de emoción y estrategia, el campeón logra una
                                victoria clave que pone presión sobre sus rivales.
                            </p>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}
export default TextBlog;