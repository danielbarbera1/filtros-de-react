import { useEffect, useState } from 'react'
import Pastillero from './Components/Pastillero'
import Card from './Components/Card';
import Navbar from './Components/Navbar';


function App() {
  const [categorias, setCategorias] = useState([]);/*estado de categorias */
  const [productos, setProductos] = useState([]); /*estado de productos */
  const [categoriaSeleccionada, setCategoriaseleccionada] = useState(null) /*estado de la seleccion de categorias  */
  const [productosFiltrados, setProductosfiltrados] = useState([])/*estado de los filtros de productos  */

  const CategoriaClick = (categoriaSlug) => {
    setCategoriaseleccionada(categoriaSlug)

  };
useEffect(() => {
    //Si no hay categoría seleccionada, mostramos todo
    if (!categoriaSeleccionada) {
      setProductosfiltrados(productos);
      return;
    }

    //Función auxiliar para normalizar (quitar guiones y pasar a minúsculas)
    const normalizar = (texto) => 
      texto ? texto.toString().toLowerCase().replace(/-/g, ' ').trim() : "";

    //Normalizamos la categoría seleccionada una sola vez
    const seleccionadaNormalizada = normalizar(categoriaSeleccionada);

    //Filtramos
    const filtrados = productos.filter(producto => {
      // Normalizamos la categoría del producto
      const categoriaProductoNormalizada = normalizar(producto.category);
      
      // Comparamos ambos valores ya "limpios"
      return categoriaProductoNormalizada === seleccionadaNormalizada;
    });

    setProductosfiltrados(filtrados);
  }, [categoriaSeleccionada, productos]);
  
  useEffect(() => {
    const fetchCat = async () => {
      try {
        const resCategorias = await fetch("https://dummyjson.com/products/categories"); // API de todas las categorias 
        const resProductos = await fetch("https://dummyjson.com/products") // API de todos los productos
        // Validar respuesta HTTP
        if (!resCategorias.ok) {
          throw new Error(`Error HTTP: ${resCategorias.status}`);
        }
        if (!resProductos.ok) {
          throw new Error(`Error HTTP: ${resProductos.status}`);
        }
        const dataCategoria = await resCategorias.json();
        setCategorias(dataCategoria); // Guardar datos en el estado de categorias 
        const dataProductos = await resProductos.json();
        setProductos(dataProductos.products);  // Guardar datos en el estado de productos
        setProductosfiltrados(dataProductos.products); // productosFiltrados con todos los productos 
      } catch (err) {
        console.log(err) // Guardar mensaje de error
      }
    };
    fetchCat();
  }, []);



  return (

    <div>
      <Navbar />

      <div className='flex flex-wrap justify-center '> {/*aqui el diseno para centrar las categorias */}
        {categorias.map((cat) => (
          <Pastillero
            key={cat.slug}
            name={cat.name}
            // Creamos una función anónima que llama a CategoriaClick con el nombre (cat)
            onClickHandler={() => CategoriaClick(cat.slug)}
          />
        ))}
      </div>


      <div className='grid grid-cols-4 gap-4'>{/*aqui el diseno de como van puesta los productos */}
        {productosFiltrados.map((pro) => (
          <Card key={pro.id} name={pro.title} imageUrl={pro.thumbnail} descripcion={pro.description} />
        ))}
      </div>


    </div>

  )
}

export default App
