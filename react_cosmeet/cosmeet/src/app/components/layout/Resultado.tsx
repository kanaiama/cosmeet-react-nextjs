export default function Resultado() {
    return(
        <div className="w-full flex items-center justify-center">
            <div className="w-full flex gap-5 items-center justify-center">
                <div className="box-border h-40 w-80 p-4 border-2 border-gray-700 rounded-xl bg-neutral-100 flex flex-col items-center justify-center">
                    <p className="text-6xl font-bold text-neutral-800">200+</p>
                    <p>Marcas sendo comercializadas</p>
                </div>
                <div className="box-border h-40 w-80 p-4 border-2 border-gray-700 rounded-xl bg-neutral-100 flex flex-col items-center justify-center ">
                    <p className="text-6xl font-bold text-neutral-800">500+</p>
                    <p>Usuários ativos na COSMEET</p>
                </div>
                <div className="box-border h-40 w-80 p-4 border-2 border-gray-700 rounded-xl bg-neutral-100 flex flex-col items-center justify-center ">
                    <p className="text-6xl font-bold text-neutral-800">700+</p>
                    <p>Negociações feitas</p>
                </div>
            </div>
        </div>
    )
}