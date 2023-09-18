export default function Button(props: any) {
    return(
        <div className="botao">
            <button className="bg-amber-500 rounded-full w-24 h-8">{props.children}</button>
        </div>
    )
}