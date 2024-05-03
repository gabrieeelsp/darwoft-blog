import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCategoryBySlug } from "../../../features/app/appSlice"
import LastPosts from "../../../components/public/category/LastPosts"
import { capitalize } from "../../../utils"

const CategoryView = () => {
    const { categorySlug } = useParams()

    const category = useSelector((state) => getCategoryBySlug(state, categorySlug)) 



    return (
        <>
            <div>
                <h1 className="ml-3 text-2xl font-bold">{category && capitalize(category.name)}</h1>
                <LastPosts categoryId={category._id} />
            </div>
        </>
    )
}

export default CategoryView