import { useState } from 'react';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

const Comments = (props) => {
    const { post } = props
    const [html, setHtml] = useState('my <b>HTML</b>');
    function onChange(e) {
        setHtml(e.target.value);
      }
    return (
        <>
            <section>
                <h1
                    className="text-3xl mt-4"
                >Comentarios</h1>
                <div className='mt-3'>
                    <CommentForm /> 
                    <CommentsList post={post} />
                </div>
            </section> 
        </>
    )
}

export default Comments