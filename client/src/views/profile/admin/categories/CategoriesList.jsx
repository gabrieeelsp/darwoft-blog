import { Link, useOutletContext, useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { FiPlus } from "react-icons/fi";
import { findAll } from "../../../../features/categories/actions";
import { CategoriesList as CategoriesListComponent } from "../../../../components";
import { RxHamburgerMenu } from "react-icons/rx";

const CategoriesList = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const dispatch = useDispatch()
    const { categories } = useSelector((state) => state.categories)
    const [currentQueryParameters] = useSearchParams();

    const name = currentQueryParameters.get('name')
    const limit = currentQueryParameters.get('limit')
    const page = currentQueryParameters.get('page')
   
    useEffect(() => {
        
        dispatch(findAll({
            name, 
            limit: limit ? limit : 6, 
            page: page ? page : 1}))
    }, [dispatch, name, limit, page])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <span>Gestión de Categorías</span>
                </div> 
                <Link 
                    to='nuevo'
                        className="flex gap-2 items-center bg-sky-500 hover:bg-sky-600 text-white  px-3 h-6 rounded-sm"
                        >
                            <FiPlus />
                            <span>Nuevo</span>
                        
                    </Link>  
            </div>
            <div className="p-6">
                {categories && <CategoriesListComponent />}
            </div>
            
            
            
        </>
    )
}

export default CategoriesList