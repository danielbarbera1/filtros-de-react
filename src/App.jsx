import { useState, useEffect } from "react";
import Pastillero from "./Components/Pastillero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

function app() {

  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
    const fetchPro = async () => {
      try {
        const resProductos = await fetch("https://dummyjson.com/products")
        //valida respuesta http
        if (!resProductos.ok) {
          throw new Error(`Error HTTP:${resProductos.status}`);
        }
        const dataProductos = await resProductos.json();
        setProductos(dataProductos.productos);
      } catch (error) {
        console.error(error);
      }
    }
    fetchPro()
  }, []);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const resCategoria = await fetch("https://dummyjson.com/products/categories");
        //valida respuesta http
        if (!resCategoria.ok) {
          throw new Error(`Error HTTP:${resCategoria.status}`);
        }
        const dataCategoria = await resCategoria.json();
        setCategorias(dataCategoria);//guarda datos en el estado
      } catch (error) {
        console.log(err);//guarda mensaje de error
      }
    };
    fetchCat();
  }, []);

  //funcion que maje ael clikc en las categorias y filtra los productos 
  const CategoriaClick = async (slugCategoria) => {
    console.log(`Slug de categoria clickeada:`, slugCategoria);

    const categoriaEncontrada = categorias.find(cat => cat.slug === slugCategoria);
    const nombresCategoria = categoriaEncontrada ? categoriaEncontrada.name : slugCategoria;

    setCategoriaSeleccionada(nombresCategoria);

    try {
      const response = await fetch(`https://dummyjson.com/products/category/${slugCategoria}`);
      if (!response.ok) {
        throw new Error(`Error HTTP:${response.status}`);
      }
      const data = await response.json();
      console.log(`Productos filtrados:`, data.products);
      setProductosFiltrados(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className='flex flex-wrap justify-center'>{/*aqui el diseno para centrar las categorias */}
        {categorias.map((cat) => (
          <Pastillero
            key={cat.slug}
            name={cat.name}
            slug={cat.slug}
            // El Pastillero pasa el slug al hacer click
            onClickHandler={CategoriaClick}
          />
        ))}


        {/* Mostrar categoría seleccionada */}
        {categoriaSeleccionada && (
          <div className='text-center my-4'>
            <h2 className='text-2xl font-bold text-gray-800'>
              Productos de: {categoriaSeleccionada}
            </h2>
          </div>
        )}

        {/* Mostrar productos filtrados */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>{/*aqui el diseno de como van puesta los productos */}
          {productosFiltrados.map((producto) => (
            <Card
              key={producto.id}
              name={producto.title}
              imageUrl={producto.thumbnail}
              descripcion={producto.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default app;
