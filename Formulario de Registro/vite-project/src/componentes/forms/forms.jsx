import Button from "../button"
import Checkbox from "../checkbox"
import Input from "../Input"
import NomeSobre from "../primeira_parte_forms/nomesobre"

function Forms(){
    return(
        <form action="#">
              <NomeSobre></NomeSobre>
              <div className='mt-5'>
              <Input type={"text"} placeholder={"Email"} full={"w-full"}></Input>
              </div>
              <div className='mt-5'>
              <Input type={"password"} placeholder={"Senha"} full={"w-full"}></Input>
              </div>
              <div className='mt-5'>
              <Input type={"password"} placeholder={"Confirmação de Senha"} full={"w-full"}></Input>
              </div>
              <Checkbox></Checkbox>
              <Button></Button>
            </form>
    )
}

export default Forms