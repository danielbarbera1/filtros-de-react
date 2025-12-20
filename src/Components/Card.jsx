
const Card = ({name,imageUrl,descripcion}) => {
  return (
    <div className="bg-white w-96 rounded-lg shadow-sm overflow-hidden border border-gray-200">{/*aqui el diseno de como va la imagen */}
      <figure>
        <img
          src={imageUrl} /*aqui llamamos las imagenes de la api*/
          alt="Shoes"
          className="w-full h-64 object-cover"
        />
      </figure>
      
      <div className="p-6"> {/*titulo del producto*/} 
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name} </h2> {/* aqui llamamos los nombres del producto */}
        
        <p className="text-gray-600 mb-4"> {/*aqui va la descripcion del producto*/} 
          {descripcion} {/*aqui llamamos de la api la descripcion de los productos*/}
        </p>
        
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"> {/*aqui un boton para ver mas a detalle los productos*/}
            ver mas opciones
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;