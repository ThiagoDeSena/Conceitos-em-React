import './App.css'
import Forms from './componentes/forms/forms'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-500 to-purple-200 py-40' >
      <div className='mx-auto'>
        <div className='flex flex-col lg:flex-row bg-white w-10/12 lg:w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' style={{backgroundImage: "url('../imagem/Register-Background.png')"}}>
            <h1 className='text-white text-3xl mb-3'>Welcome</h1>
            <div>
              <p className='text-white'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque voluptatum ullam, rem maiores corporis explicabo hic eum? Id corporis quaerat maxime aspernatur veniam commodi rem. Vero molestias eos itaque eveniet <a href="#" className='text-purple-500 font-semibold'>Ler mais</a>
              </p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 py-16 px-12'>
            <h2 className='text-3xl mb-4'>Register</h2>
            <p className='mb-4'>
              Crie a sua conta. Gratuito e leva apenas um minuto
            </p>
            <Forms></Forms>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
