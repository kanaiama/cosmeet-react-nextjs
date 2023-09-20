interface ButtonProps {
    width: number;
    height: number;
    nome: string;
    fontSize: number;
    color: string;
    fontWeight: string;
}
  
  export default function Button(props: ButtonProps) {
    const buttonStyle = {
      width: `${props.width}px`, 
      height: `${props.height}px`,
      fontSize: `${props.fontSize}px`,
      color: `${props.color}`,
      fontWeight: `${props.fontWeight}`,
    };
  
    return (
      <div className="">
        <button
          className="bg-amber-500 rounded-full flex items-center justify-center"
          style={buttonStyle}>
          {props.nome}
        </button>
      </div>
    );
  }
  