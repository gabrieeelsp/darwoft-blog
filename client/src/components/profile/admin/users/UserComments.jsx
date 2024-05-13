import { useSearchParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { findAll } from "../../../../features/comments/actions"
import CommentsList from "./CommentsList"

const UserComments = () => {
    const dispatch = useDispatch()
    const { comments } = useSelector((state) => state.comments)
    const { _id } = useSelector((state) => state.users.user)

    const [currentQueryParameters] = useSearchParams();

    const limit = currentQueryParameters.get('limit')
    const page = currentQueryParameters.get('page')
    
    useEffect(() => {

        dispatch(findAll({
            authorId: _id, 
            limit: limit ? limit : 5, 
            page: page ? page : 1,
        }))
    }, [dispatch, _id, limit, page])

    return (
        <>
            <div className="px-6">
                {comments && <CommentsList />}
            </div>   
        </>
    )
}

export default UserComments