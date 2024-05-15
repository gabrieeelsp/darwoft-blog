import { useNavigate, useOutletContext } from "react-router-dom";
import { NewCategoryForm } from '../../../../components'
import { RxHamburgerMenu } from "react-icons/rx";

const CategoryCreate = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const navigate = useNavigate();
    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Gestión de Categorías</button> / <span>Nuevo</span>
                </div> 
            </div>
            <NewCategoryForm />
        </>
    )
}

export default CategoryCreate