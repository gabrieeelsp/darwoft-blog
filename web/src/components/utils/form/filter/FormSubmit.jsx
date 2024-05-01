import { FaSearch } from "react-icons/fa";

const FormSubmit = (props) => {
    const {
        handlerSubmit,
    } = props;
    return (
        <>
            <button 
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 h-6 rounded-sm"
                onClick={handlerSubmit}
            ><FaSearch /></button> 
        </>
    )
}

export default FormSubmit