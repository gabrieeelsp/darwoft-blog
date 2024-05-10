import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';
import { findAllComments } from '../../../../features/posts/postsSlice';

const Comments = () => {
    const { user } = useSelector((state) => state.auth)
    const { _id } = useSelector((state) => state.posts.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllComments({postId: _id}))
    }, [dispatch, _id])

    return (
        <>
            <section>
                <h1
                    className="text-2xl mt-4"
                >Comentarios</h1>
                <div className='mt-3'>
                    {user && <CommentForm postId={_id} /> }
                    {!user && <>
                        <div className="border border-slate-200 shadow-lg rounded-sm p-4 text-center">
                            <span>Debes ingresar para poder comentar en esta publicación.</span>
                        </div>
                    </> }
                    <CommentsList />
                </div>
            </section> 
        </>
    )
}

export default Comments