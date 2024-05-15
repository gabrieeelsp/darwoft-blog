import { useSelector } from "react-redux";
import ImageNotFound from '../../../assets/Imagenotfound.png'


const ImageProfile = () => {
    const { user } = useSelector((state) => state.auth)
      
    return (
        <div className="w-20 h-20 rounded-full border-2 border-slate-400 shadow-lg bg-slate-200 relative overflow-hidden z-0">
            {/* <img
                className="w-full h-full object-cover z-0" 
                src={`${import.meta.env.VITE_URL_API}/images/${user.image}`} alt="" /> */}
            {user.image && <img className="w-full h-full object-cover" src={`${import.meta.env.VITE_URL_API}/images/${user.image}`} />}
            {!user.image && <img className="w-full h-full object-cover" src={ImageNotFound} />}

        </div>
    )   
}

export default ImageProfile