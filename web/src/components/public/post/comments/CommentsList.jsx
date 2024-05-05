import { useSelector } from "react-redux"
import Comment from "./Comment"

const CommentsList = () => {
    const { post } = useSelector((state) => state.posts)
    return (
        <>
            <div>
                {post.comments && post.comments.map((comment) => <Comment key={comment._id} comment={comment} />)}
            </div>
            
        </>
    )
}

export default CommentsList