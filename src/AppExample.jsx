import { useEffect, useState } from 'react'
import Pastillero from './Components/Pastillero'


function AppExample() {
  // const [count, setCount] = useState(100)
  // // const [valor-actual, valor-cambiado] = useState(valor-inicial)

  // const [input, setInput] = useState('')

  // const [bgColor, setBgColor] = useState('bg-white')
  
  // const[input2,setInput2] = useState ('')

  return (
    // <div className= {bgColor}>
    //   <div>
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //   </div>
    
    //   <div>                                     
    //     <button onClick={() => setBgColor(bgColor === 'bg-white' ? 'bg-red-600' : bgColor === 'bg-blue-600' ? 'bg-red-600' : bgColor === 'bg-green-600' ? 'gb-red-600' : 'bg-white')}>
    //       cambiar color rojo        {/* === :con dicional */}  {/* ? = valor si la condicional es verdadero*/}  {/* : = valor si la condicional es falsa*/}
    //     </button>
    //   </div>

    //   <div>
    //     <button onClick={() => setBgColor (bgColor === 'bg-white' ? 'bg-blue-600' : bgColor === 'bg-red-600' ? 'bg-blue-600' : bgColor ==='bg-green-600' ? 'bg-blue-600': 'bg-white')}>
    //       cambiar de color azul                        {/*si el condicional est en rojo val darle click va a cambiar a azul*/}
    //       </button>                              
    //   </div>
      
    //   <div>
    //     <button onClick={() => setBgColor (bgColor ==='bg-white' ? 'bg-green-600' : bgColor === 'bg-blue-600' ? 'bg-green-600' : bgColor === 'bg-green-600' ? 'bg-red-600' : 'bg-white' )}>
    //       cambiar de color verde                           {/*si el condicional esta en azul al darle click va a cambiar a verde */}
    //     </button>
    //   </div>
      
    //   <input onChange={(e) => setInput(e.target.value)} type="text" name="texto" id="campoDeTexto" placeholder='cambiar el txt' />
    //   <h1>Valor de texto: {input}</h1>
      
    //   <input onChange={(e) => setInput2(e.target.value)} type='text' name='texto' id='campoDeTexto2' placeholder='cambiar el txt 2' />
    //   <h1>valos del segundo texto:{input2 }</h1>
    //   <Pastillero/>
    // </div>

    
    <div className='center flex gap-3'>
      <Pastillero
        key={}
        name={}
      />
      
    </div>
    
)}

export default AppExample
