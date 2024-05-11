import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCategoryBySlug } from "../../features/app/appSlice"
import { LastPosts } from "../../components"
import { capitalize } from "../../utils"

const Category = () => {
    const { categorySlug } = useParams()    
    const category = useSelector((state) => getCategoryBySlug(state, categorySlug))
    
    return (
        <>
            { 
            <div>
                <h1 className="ml-3 mt-2 text-2xl font-bold">{category && capitalize(category.name)}</h1>
                {category && <LastPosts categoryId={category._id} />}
            </div>
            }
        </>
    )
}

export default Category