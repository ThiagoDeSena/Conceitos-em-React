import { useState } from 'react'
import './App.css'

// const nomes = [
//   'Thiago',
//   'Vitor',
//   'Ana',
//   'Rosivalda',
//   'Francisco',
//   'Samira',
//   'Leandro',
//   'Breno',
//   'Amanda',
//   'Kenedy',
//   'Maria Borges',
//   'Emanuel',
//   'Maria José',
//   'Adamo Lucas'
// ]

const nomes = [
  "Brooke Grosz","Steven Drummond","Howard Byrd","Tammy Bolden","Leola Barron","Dennis Yazzie","Lizette Broe","Sherry Laird","Darren Snively","Karen Morris","Nicholas Santana","Martin Reed","Beverly Johnson","Jack Strickland","Alfredo Ramsay","Edward Norman","Eric Blanc","Charles Keri","Michele Taylor","Valeria Whittemore","Mickey Fejes","Sean Scott","Jeanette Prewitt","Opal Barnett","Frank Polycarpe","Sherry Johns","Thomas Lee","Virginia Trejo","Wallace Boone","Kevin Mulrooney","Valerie Valentine","Matthew Mackinder","Janet Herrington","Stephen Hall","Jennifer Senter","Pamala Compton","Kenneth Faulkner","Demetrius Palmer","Dewey Duffy","Christina Taylor","Sarah Gray","Eileen Weaver","Johnny Mays","Frederick Wright","Barbara Smith","Patrick Park","Steven Angulo","Devin Wang","Wendell Turner","Frieda Ruppert","Jose Hicks","Lauren Mccarthy","Lesley Lane","Christina Laday","Ona Nichols","Kathy Jarosz","Charles Newsome","April Lally","Tracy Waits","Edna Merriam","Susan Scott","Nicole Burwell","Jean Kane","Hector Sumbry","George Young","Mary Meeks","Patricia Meis","John Fletcher","Todd Roush","Tina Luck","Dorothy Boothe","Ronald Reichel","Juan Murphy","Steven Nipp","Jeffery Haydock","Lisa Cherry","James Thomas","Anita Hayes","Jay Weimer","Donald Similien","Flora Pelletier","Crystal Hoff","Bruce Wirth","Nancy Harvey","Celia Whitney","Martin Grant","Nella Quesada","Helen Carrier","Ana Snider","Jason Laughlin","Gaylord Hale","Marvin Pham","Timothy Shannon","Lisa Pellegrino","Anna Smith","Matthew West","Willie Nelson","Samantha Simmons","Juan Alcantara","Ann Southward"
]

function App() {
  const [busca,setBusca] = useState('')
  
  const lowerCaseBusca = busca.toLowerCase()

  return (
    <div className='w-screen h-screen overflow-scroll bg-gray-400 flex items-center p-4 flex-col gap-2'>
       <h3 className='mb-4 text-4xl font-mono leading-none tracking-tight text-gray-700 md:text-5xl lg:text-6xl dark:text-white'>Lista de Nomes</h3>

       <input 
        onChange={(ev)=> setBusca(ev.target.value)}
        value={busca}
        type="search" id="search" 
        className="font-mono block w-1/2 min-w-96 
        p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />

       <ul>
        {
          // nomes.map((nome)=>(
          //   <li className='text-2xl text-gray-600 font-mono' key={nome}>{nome}</li>
          // ))
          nomes.filter((nome)=>nome.toLowerCase().includes(lowerCaseBusca))
          .map((nome)=>(
            <li className='text-2xl text-gray-600 font-mono' key={nome}>{nome}</li>
          ))
        }
       </ul>
    </div>
  )
}

export default App
