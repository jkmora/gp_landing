import React from 'react';

const consClassName = ({
    classNameSeparatorTop: "text-orange-300",
    classNameSeparatorBotton: "text-orange-300",
    classNameBg: "bg-gradient-to-r from-green-900 via-stone-800 to-green-700" //"bg-gradient-to-r from-white via-blue-50 to-white"
});

const VideoBlog: React.FC = () => {
    return (
        <>
            <section className={`w-full py-12 min-h-20/100`}>
                <div className="container mx-auto">
                    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        {/* Miniatura del video */}
                        <div className="relative">
                            <img
                                src="https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                                alt="Video thumbnail"
                                className="w-full h-48 object-cover"
                            />
                            {/* Ícono play opcional */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black bg-opacity-50 rounded-full p-2">
                                    <svg
                                        className="w-8 h-8 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M6 4l12 6-12 6V4z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-4">
                            <h3 className="text-md font-semibold text-gray-900">
                                ¿Cómo mejorar la genética ganadera?
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Canal: AgroTV Costa Rica
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )

}
export default VideoBlog;