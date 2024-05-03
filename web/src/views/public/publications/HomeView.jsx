import { useSelector } from "react-redux"
import LastPosts from "../../../components/public/home/LastPosts"
import LastPostsCategory from "../../../components/public/home/LastPostsCategory"

const HomeView = () => {
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <LastPosts />
            { categories && categories.map((category) => <LastPostsCategory key={category._id} category={category} />)}

        </>
    )
}

export default HomeView