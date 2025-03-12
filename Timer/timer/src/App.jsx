import { useEffect, useState  } from 'react'
import './App.css'

function App() {

  const [seconds,setSeconds] = useState(0)
  const [minutes,setMinutes] = useState(0)

  var timer

  useEffect(()=>{

    timer = setInterval(()=>{

      setSeconds(seconds+1)

      if(seconds === 59){
        setMinutes(minutes+1)
        setSeconds(0)
      }

    },1000) 

    return ()=> clearInterval(timer)
  })

  const restart = ()=>{
    setSeconds(0)
    setMinutes(0)
  }

  const stop = ()=>{

    clearInterval(timer)
    
  }

  return (
    <div className='bg-blue-400 w-screen h-screen flex flex-col items-center justify-center'>
      <div className='bg-white  p-7  flex flex-col items-center justify-center gap-5 rounded-lg'>
      <h1 className='text-3xl font-bold'>Timer</h1>
      <h1 className='text-2xl font-bold'>{minutes<10 ? '0'+minutes : minutes}:{seconds<10? '0'+seconds : seconds}</h1>

      <div className='flex gap-5'>
      <button onClick={restart} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>
        Restart
      </button>
      <button onClick={stop} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
        Stop
      </button>
    
      </div>
      
      </div>
      
    </div>
  )
}

export default App
