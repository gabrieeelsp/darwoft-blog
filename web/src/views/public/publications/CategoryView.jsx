import { useParams } from "react-router-dom"

const CategoryView = () => {
    const { categorySlug } = useParams()

    return (
        <>
            <div>
                { categorySlug }
            </div>
        </>
    )
}

export default CategoryView