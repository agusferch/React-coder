import { useEffect, useState, useeffect } from "react";

const CountComponent = () => {
    const [count, setCount] = useState (1);

    //Se va a ejecutar siempre que el componente se renderize (useEffect sin dependencia)
    useEffect(
        () => {
            console.log("se ejecuta el useEffect sin dependencias")
        });

    //Se va a ejecutar la primera vez que el componente se renderiza - no en su actualizacion(useEffect con array de dependencias vacias)
    useEffect (() => {
        console.log("Se ejecuta el useEffect con array de dependencias vacias")
    }, [])    

    //(useEffect con dependencia)
    useEffect(()=>{
        console.log("Se ejecuta el useEffect con dependencias")
    }, [count])

    
    const handleAddCount = () => {
        setCount(count + 1) 
    }

    const handleRemoveCount = () => {
        setCount(count - 1);
    }

return(
    <div>
        <button onClick={handleAddCount}>+</button>
        <div>{count}</div>
        <button onClick={handleRemoveCount}>-</button>
    </div>
);
};

export default CountComponent