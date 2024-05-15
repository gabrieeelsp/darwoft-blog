import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../features/user/actions";
import { removeImage } from "../../features/user/usersSlice";
import { updateUser } from "../../features/auth/authSlice";
import { RiCloseLargeLine } from "react-icons/ri";


const EditUserImageForm = () => {
    const dispatch = useDispatch();
    const { user, error } = useSelector((state) => state.users)

    const handlerInputChange = (event) => {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);

        dispatch(uploadImage({id: user._id, formData})).unwrap()
            .then((payload) => dispatch(updateUser(payload)))
    }

    const handlerClickRemove = () => {
        dispatch(removeImage())
    }

    return (
        <>
            
            <div className="py-3 px-4 sm:pl-10">
                
                <div className="grid grid-cols-12 items-start">
                    <label className="col-span-2" htmlFor="name">Imagen</label>
                    {user.image && <>
                        <div className="col-span-10 h-52 w-52 border border-slate-300 shadow-md relative">
                            <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${user.image}`} alt="" />
                            <button onClick={handlerClickRemove} className="text-slate-500 hover:text-red-500 absolute top-2 right-2"><RiCloseLargeLine /></button>
                        </div>
                        
                        </>
                    }
                    {!user.image &&
                    <>
                    <input 
                    type="file"
                        name='image'
                        className="col-span-9 focus:outline-none border border-slate-300 px-2 py-1 shadow-md text-sm" 
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

export default EditUserImageForm