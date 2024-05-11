import { FaSearch } from "react-icons/fa";

const FormSubmitFilter = (props) => {
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

export default FormSubmitFilter