import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { useEffect } from "react";

import { CategoryEditForm } from "../../../../components";
import { findOne } from "../../../../features/categories/actions";
import { cleanSlice } from "../../../../features/categories/categoriesSlice";
import { RxHamburgerMenu } from "react-icons/rx";

const CategoryEdit = () => {
    const [ setShowCartSidebar ] = useOutletContext()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.categories)
    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(findOne(categoryId));

        return () => {
            dispatch(cleanSlice())
        }
    }, [dispatch, categoryId])

    return (
        <>
            <div className="flex justify-between gap-3 py-3 px-3 text-md bg-gray-50 border-b border-b-slate-200 font-bold text-slate-600">
                <div className="flex items-center gap-3">
                    <button className="md:hidden" onClick={() => setShowCartSidebar(true)}>
                        <RxHamburgerMenu className="text-xl" />
                    </button>
                    <button className="hover:text-sky-500" onClick={() =>navigate(-1)}>Categorias</button> / <span>Editar</span>
                </div> 
            </div>

            {category && <CategoryEditForm /> }
            
        </>
    )
}

export default CategoryEdit