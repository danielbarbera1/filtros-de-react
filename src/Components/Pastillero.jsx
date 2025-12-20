
const Pastillero = ({name,onClickHandler}) => {
  return (
    <button
    // Asignamos la función recibida al evento onClick
    onClick={onClickHandler} 
    className=" center bg-red-600 rounded-full shadow-md py-2 px-5 max-w-xs flex items-center align-middle">{/*aqui es el diseno de la card en forma de pastilla  */}
        <h3 className="text-lg font-bold text-white ">{name}</h3> {/*aqui llamamos todas las categorias de productos */}
    </button>
  );
};

export default Pastillero;