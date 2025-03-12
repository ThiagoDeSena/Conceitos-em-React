import { useEffect, useState } from "react"
import axios from "axios"


function UserList(){
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            setUsers(response.data)
            setLoading(false)
        })
        .catch(error =>{
            console.error(error)
            setLoading(false)
        })
    },[])

    if(loading){
        return <div>
            Carregando...
        </div>
    }

    return(
        <div>
            <h1>Lista de Usuários</h1>
            <ul>
                {users.map(users =>(
                    <li key={users.id}>{users.name}</li>
                )
                )}
            </ul>   
        </div>
    )
}

export default UserList