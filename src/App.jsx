import { useEffect, useState } from 'react'
import Pastillero from './Components/Pastillero'
import Card from './Components/Card';
import Navbar from './Components/Navbar';


function App() {
  const [categorias, setCategorias] = useState([]);/*estado de categorias */
  const [productos, setProductos] = useState([]); /*estado de productos */
  const [categoriaSeleccionada, setCategoriaseleccionada] = useState(null) /*estado de la seleccion de categorias  */
  const [productosFiltrados, setProductosfiltrados] = useState([])/*estado de los filtros de productos  */

  

  useEffect(() => {
    const fetchPro = async () => {
      try {
        const resProductos = await fetch("https://dummyjson.com/products")// API de todos los productos
        // Validar respuesta HTTP
        if (!resProductos.ok) {
          throw new Error(`Error HTTP: ${resProductos.status}`);
        }
        const dataProductos = await resProductos.json();
        setProductos(dataProductos.products);  // Guardar datos en el estado de productos
      } catch (err) {
        console.log(err) // Guardar mensaje de error
      }
    };
    fetchPro()
  }, []);

  useEffect(() => {
    const fetchCat = async () => {
      try {
        const resCategorias = await fetch("https://dummyjson.com/products/categories"); // API de todas las categorias 
        // Validar respuesta HTTP
        if (!resCategorias.ok) {
          throw new Error(`Error HTTP: ${resCategorias.status}`);
        }
        const dataCategoria = await resCategorias.json();
        setCategorias(dataCategoria); // Guardar datos en el estado de categorias 
      } catch (err) {
        console.log(err) // Guardar mensaje de error
      }
    };
    fetchCat();
  }, []);

  // Función que maneja el click en las categorías y filtra los productos
  const CategoriaClick = async (slugCategoria) => {
    console.log('Slug de categoría clickeada:', slugCategoria);
    
    // Buscar el nombre de la categoría para mostrarlo
    const categoriaEncontrada = categorias.find(cat => cat.slug === slugCategoria);
    const nombreCategoria = categoriaEncontrada ? categoriaEncontrada.name : slugCategoria;
    
    setCategoriaseleccionada(nombreCategoria);
    
    try {
      // Hacer fetch directo a los productos de la categoría
      const response = await fetch(`https://dummyjson.com/products/category/${slugCategoria}`);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('Productos filtrados:', data.products);
      setProductosfiltrados(data.products);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      setProductosfiltrados([]);
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
      </div>

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

  )
}

export default App

