import { useDispatch, useSelector } from "react-redux";
import { uploadImage, removeImage } from "../../../features/posts/postsSlice";

const EditPostImageForm = () => {
    const dispatch = useDispatch();
    const { post, status, error } = useSelector((state) => state.posts)


    const handlerInputChange = (event) => {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        dispatch(uploadImage({id: post._id, formData}))
    }

    const handlerClickRemove = () => {
        dispatch(removeImage())
    }

    return (
        <>
            
            <div className="p-3">
                
                <div className="grid grid-cols-12 items-start">
                    <label className="col-start-2 col-span-2" htmlFor="name">Imagen</label>
                    {post.image && <>
                        <div className="col-span-9 h-52 border border-slate-300 shadow-md relative">
                            <img className="w-full h-full object-cover" src={`http://localhost:8001/images/${post.image}`} alt="" />
                            <button onClick={handlerClickRemove} className="text-red-500 absolute top-0 right-2">Cambiar Imagen</button>
                        </div>
                        
                        </>
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
            </div>
           
        </>
    )
}

export default EditPostImageForm