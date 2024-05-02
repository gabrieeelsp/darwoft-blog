import { useRef } from "react";
import { MdAddAPhoto } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage } from "../../../../features/user/usersSlice";


const ImageProfile = () => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch();
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        dispatch(uploadImage({id: user._id, formData}))
    };

      
    return (
        <div className="w-20 h-20 rounded-full border-2 border-slate-400 shadow-lg bg-slate-200 relative overflow-hidden z-0">
            <img
                className="w-full h-full object-cover z-0" 
                src={`http://localhost:8001/images/${user.image}`} alt="" />
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileInputChange}
            />
            <button
                    onClick={handleButtonClick}
                    className="absolute bottom-0 right-0 text-slate-400 z-10"
                >
                    <MdAddAPhoto />
                </button>

        </div>
    )   
}

export default ImageProfile