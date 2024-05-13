import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../features/posts/actions";
import { removeImage } from "../../features/posts/postsSlice";
import { RiCloseLargeLine } from "react-icons/ri";

const EditPostImageForm = () => {
    const dispatch = useDispatch();
    const { post, error } = useSelector((state) => state.posts)


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
                            <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${post.image}`} alt="" />
                            <button onClick={handlerClickRemove} className="text-slate-500 hover:text-red-500 absolute top-2 right-2"><RiCloseLargeLine /></button>
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