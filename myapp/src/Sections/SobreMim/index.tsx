import Image from "next/image";
import Foto from "../../assets/img/foto.jpg";
import { FaGithub, FaLinkedin, FaPhoneSquareAlt   } from "react-icons/fa";

export default function SobreMim() {

    return(

        <div className="flex flex-col items-center justify-center gap-3 w-full bg-black-a p-2 py-10">

            <Image src={Foto} alt="Minha foto" draggable="false" loading="eager" className="w-52 rounded-full"/>

            <p className="text-2xl text-white-bg-a">Arthur de Araujo Neves</p>

            <p className="w-[600px] text-1xl text-center text-white-bg-a">Tenho 17 anos, e estou programando desde os 15. Atualmente estou cursando o 3 ano do curso de informática na E.E.E.P Aderson Borges de Carvalho e buscando um emprego para iniciar na área. No momento, estou na área de desenvolvimento web como Full-stack.</p>

           <div className="flex items-center gap-10">

                <FaGithub className="text-white-bg-a text-4xl"/>
                <FaLinkedin className="text-white-bg-a text-4xl"/>
                <FaPhoneSquareAlt className="text-white-bg-a text-4xl"/>

           </div>
        
        </div>
    );
};
