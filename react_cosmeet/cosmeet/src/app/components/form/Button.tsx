interface ButtonProps {
    width: number;
    height: number;
    nome: string;
    size: number;
    color: string;
  }
  
  export default function Button(props: ButtonProps) {
    const buttonStyle = {
      width: `${props.width}px`, 
      height: `${props.height}px`,
         };

    const nameStyle = {
        size: `${props.size}px`,
        color: `${props.color}`,
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
  