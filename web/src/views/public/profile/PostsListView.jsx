import PostsList from "../../../components/public/profile/PostsList"
import PostListFilter from "../../../components/public/profile/postsList/PostListFilter"

const PostsListView = () => {
    return (
        <>
            <PostListFilter />
            <PostsList />
        </>
    )
}

export default PostsListView