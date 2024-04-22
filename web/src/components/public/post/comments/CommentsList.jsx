import Comment from "./Comment"

const CommentsList = (props) => {
    const { comments } = props.post
    return (
        <>
            <div>
                {comments?.map((comment) => <Comment key={comment.id} comment={comment} />)}
            </div>
            
        </>
    )
}

export default CommentsList