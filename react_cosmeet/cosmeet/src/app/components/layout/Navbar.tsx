import Button from "../form/Button";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="w-full flex justify-center items-center h-14">
            <div className="w-10/12 flex justify-around items-center">
                <div className="flex items-center gap-2">
                    <Image src={"/images/logo (1).svg"} width={'40'} height={'400'} alt={""} />
                    <span className="text-blue-700 text-2xl font-bold">COS<span className="text-amber-500 text-2xl font-bold">MEET</span></span>
                </div>
                <div className="w-3/6">
                    <ul className="flex justify-around items-center">
                        <li className="text-m font-semibold text-neutral-800">Inicio</li>
                        <li className="text-m font-semibold text-neutral-800">Sobre nós</li>
                        <li className="text-m font-semibold text-neutral-800">Resultados</li>
                        <li className="text-m font-semibold text-neutral-800">Produto</li>
                    </ul>
                </div>
                
                <div className="element_login">
                    <Button height={40} width={90} nome="Login"></Button>
                </div>
            </div>
        </div>
    )
}