export default function Button(props: any) {
    return(
        <div className="botao">
            <button className="bg-amber-500 rounded-full w-20">{props.children}</button>
        </div>
    )
}