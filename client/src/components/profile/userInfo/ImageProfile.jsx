import { useSelector } from "react-redux";

const ImageProfile = () => {
    const { user } = useSelector((state) => state.auth)
      
    return (
        <div className="w-20 h-20 rounded-full border-2 border-slate-400 shadow-lg bg-slate-200 relative overflow-hidden z-0">
            <img
                className="w-full h-full object-cover z-0" 
                src={`http://localhost:8001/images/${user.image}`} alt="" />

        </div>
    )   
}

export default ImageProfile