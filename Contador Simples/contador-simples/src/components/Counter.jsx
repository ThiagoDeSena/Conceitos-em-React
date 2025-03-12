import { useState } from "react";



function Counter(){

    const[count,setCount] = useState(0)

    function increment(){
        setCount(count => count +1)
    }

    function decrement(){
        if(count!=0){
            setCount(count => count -1)
        }else{
            alert('Contador não pode ser menor que 0')
        }
        
    }

    return(
        <div className="flex flex-col gap-2 items-center justify-center bg-slate-400 w-96 h-60">
            <h1 className="text-2xl font-bold ">Contador: {count}</h1>
            <button onClick={increment}
            className="w-60 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Incrementar</button>
            <button onClick={decrement}
            className="w-60 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                Decrementar</button>
        </div>
    )
}

export default Counter