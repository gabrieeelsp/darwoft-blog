import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCategoryBySlug } from "../../features/app/appSlice"
import { Error, LastPosts } from "../../components"
import { capitalize } from "../../utils"

const Category = () => {
    const { categorySlug } = useParams()    
    const category = useSelector((state) => getCategoryBySlug(state, categorySlug))
    
    if (!category) return <Error />
    return (
        <>
            { 
            <div className="">
                <h1 className="ml-3 mt-2 text-2xl font-bold">{category && capitalize(category.name)}</h1>
                <h2 className="ml-3  text-sm font-bold">{category && capitalize(category.description)}</h2>
                {category && <LastPosts categoryId={category._id} />}
                
            </div>
            }
        </>
    )
}

export default Category