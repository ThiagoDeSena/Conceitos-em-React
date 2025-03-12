function Checkbox() {
    return (
      <div className="mt-5">
        <input type="checkbox" className="border border-gray-500 mr-1" />
        <span>
          Eu aceito os <a href="#" className="font-semibold text-purple-500">Termos de Uso</a> & as <a href="#" className="font-semibold text-purple-500">Politicas de Privacidade</a>
        </span>
      </div>
    );
  }
  
  export default Checkbox;