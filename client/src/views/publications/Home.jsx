import { useSelector } from "react-redux"
import { LastPosts, LastPostsCategory } from "../../components"

const Home = () => {
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div>
                <LastPosts />
                { categories && Object.keys(categories).map((categoryId) => <LastPostsCategory key={categoryId} category={categories[categoryId]} />)}
            </div>
        </>
    )
}

export default Home