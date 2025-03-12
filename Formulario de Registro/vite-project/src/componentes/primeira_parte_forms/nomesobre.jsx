import Input from "../Input"


function NomeSobre(){
    return(
        <div className='grid grid-cols-2 gap-5'>  
                <Input type="text" placeholder="Nome"></Input>
                <Input type={"text"} placeholder={"Sobrenome"}></Input>
        </div>
    )
}

export default NomeSobre