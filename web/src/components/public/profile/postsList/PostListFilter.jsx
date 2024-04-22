import { FaSearch } from "react-icons/fa";


const PostListFilter = () => {
    return (
        <> 
            <div className="flex justify-end gap-2">
                <select 
                    className="focus:outline-none bg-white border border-slate-300 rounded-sm px-2 "
                >
                    <option value=""
                        className="text-slate-300"
                        >Categoría</option>
                    <option value="">Linux</option>
                    <option value="">Fisica</option>
                    <option value="">Programación</option>
                </select>
                <input 
                    className="focus:outline-none border border-slate-300 h-6 rounded-sm px-2"
                    type="text" 
                    placeholder="Título..." 
                />
                <button 
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 h-6 rounded-sm"
                ><FaSearch /></button>  
            </div>        
        </>
    )
}

export default PostListFilter