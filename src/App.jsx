import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0);

  const increase = () => {setCount(count + 1);}
  const reset = () => {setCount(0);}
  const decrease = () => {setCount(count - 1);}

  const getColor = () =>{
    if(count > 0)
      return 'green';
    else if(count < 0)
      return 'red';
    else
      return 'black';
    
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <h1>Counter</h1>
          <div id='text' style={{color: getColor()}}><h1>{count}</h1></div>
          <div className="buttons">
            <button onClick={increase} className="increase">Increase</button>
            <button onClick={reset} className="reset">Reset</button>
            <button onClick={decrease} className="decrease">Decrease</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
