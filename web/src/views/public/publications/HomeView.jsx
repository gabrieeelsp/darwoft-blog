import { useSelector } from "react-redux"
import LastPosts from "../../../components/public/home/LastPosts"
import LastPostsCategory from "../../../components/public/home/LastPostsCategory"

const HomeView = () => {
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div className="w-full">
                <LastPosts />
                { categories && categories.map((category) => <LastPostsCategory key={category._id} category={category} />)}

            </div>

        </>
    )
}

export default HomeView