import { useState } from 'react';
import Cars from './Components/Cars';
function App() {

  function createInitState(){
    const cars = [
      {
          brand: "honda",
          price: 1000
      },
      {
        brand: "honda",
        price: 1000
    }
    ]
    const total = cars.reduce((total,c)=> { return  total + c.price},0);
   
    return total;
  }
  const [counter, setCounter] = useState(createInitState);

  const handleIncrease = ()=>{
     setCounter(afterCounter => afterCounter + 1); 
     setCounter(afterCounter => afterCounter + 1); 
     setCounter(afterCounter => afterCounter + 1);

  }
  return (
    <div className="App">
        <h1>counter: {counter}</h1>
        <button onClick={()=>{handleIncrease()}}>counter++</button>
        <br/>
        <Cars />
    </div>
  );
}

export default App;
