import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gradient-to-t from-indigo-100 to-blue-50/70 text-black py-8 w-full ">
        <div className="container mx-auto text-center">
          <h4 className="text-xl color-text-black mb-2">Ganadería Fam. Picado</h4>
          <p className="text-sm color-text-black mb-4">De la tierra al plato</p>

          {/* Redes sociales */}
          <div className="flex justify-center space-x-6 mt-4 text-xl color-text-black">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="color-text-black text-sm mt-6">
            &copy;{new Date().getFullYear()} Ganadería Fam. Picado. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </>
  )
}
export default Footer;