import { FaSearch } from "react-icons/fa";

const FormSubmitFilter = (props) => {
    const {
        handlerSubmit,
    } = props;
    return (
        <>
            <button 
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 rounded-sm"
                onClick={handlerSubmit}
            ><FaSearch className="hidden sm:inline" /><span className="sm:hidden">Buscar</span></button> 
        </>
    )
}

export default FormSubmitFilter