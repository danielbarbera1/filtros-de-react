
const Pastillero = ({name, onClickHandler, slug}) => {
  return (
    <button
    // Pasamos el slug al handler cuando se hace click
    onClick={() => onClickHandler(slug)}
    className="center bg-red-600 rounded-full shadow-md py-1 px-3 max-w-xs flex items-center align-middle m-2.5 ">{/*aqui es el diseno de la card en forma de pastilla  */}
        <h3 className="text-xs font-bold text-white">{name}</h3> {/*aqui llamamos todas las categorias de productos */}
    </button>
  );
};

export default Pastillero;