import { useDispatch, useSelector } from "react-redux";
import FormSubmit from "../../utils/form/profile/FormSubmit";
import { useState } from "react";
import { uploadImage } from "../../../features/posts/postsSlice";

const EditPostImageForm = () => {
    const dispatch = useDispatch();
    const { post, status, error } = useSelector((state) => state.posts)
    const [showResponseMessage, setShowResponseMessage] = useState(null);

    const handlerInputChange = (event) => {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        dispatch(uploadImage({id: post._id, formData}))
    }

    const handlerSubmit = () => {

    }

    return (
        <>
            <form onSubmit={handlerSubmit} >
                <div className="p-3">
                    
                    <div className="grid grid-cols-12 items-start">
                        <label className="col-start-2 col-span-2" htmlFor="name">Imagen</label>
                        {post.image &&
                            <div className="col-span-9 h-52 border border-slate-300 shadow-md">
                                <img className="w-full h-full object-cover" src={`http://localhost:8001/images/${post.image}`} alt="" />
                            </div>
                        }
                        {!post.image &&
                        <>
                        <input 
                        type="file"
                            name='image'
                            className="col-span-9 focus:outline-none border border-slate-300 px-2 py-1 shadow-md" 
                            onChange={handlerInputChange}
                            />
                        <div className="col-start-4 col-span-9  min-h-4 mt-1 ml-2 text-xs text-red-400">{ error }</div>
                        </>
                        }
                    </div>

                    <FormSubmit 
                        showResponseMessage={showResponseMessage}
                        error={error}
                        status={status}
                        succeededMessage='Su publicación se ha actualizado exitosamente'
                    />
                </div>
                
            </form>
        </>
    )
}

export default EditPostImageForm