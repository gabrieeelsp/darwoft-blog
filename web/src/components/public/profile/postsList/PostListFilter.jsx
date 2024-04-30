import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { capitalize } from "../../../../utils";


const PostListFilter = () => {

    const { categories } = useSelector((state) => state.app)

    const [searchData, setSearchData] = useState({title: '', categorySlug: ''});

    const [currentQueryParameters, setSearchParams] = useSearchParams();

    const handlerClickSearch = () => {
        
        currentQueryParameters.delete('title')
        if ( searchData.title )
            currentQueryParameters.set('title', searchData.title)

        currentQueryParameters.delete('category')
        if ( searchData.categorySlug )
            currentQueryParameters.append('category', searchData.categorySlug)

        setSearchParams(currentQueryParameters)
    }   

    const handlerChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setSearchData({...searchData, [property]: value})
    }

    return (
        <> 
            <div className="flex justify-end gap-2">
                <select
                    value={searchData.categorySlug} 
                    name="categorySlug"
                    onChange={handlerChange}
                    className="focus:outline-none bg-white border border-slate-300 rounded-sm px-2 "
                >
                    <option value="" className="text-slate-300" >---</option>
                    { categories && categories.map((c) => <option value={c.slug} key={c._id} className="text-slate-800" >{capitalize(c.name)}</option>) }
                </select>
                <input 
                    className="focus:outline-none border border-slate-300 h-6 rounded-sm px-2"
                    type="text" 
                    placeholder="Título..."
                    name="title"
                    value={searchData.title} 
                    onChange={handlerChange}
                />
                <button 
                    className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 h-6 rounded-sm"
                    onClick={handlerClickSearch}
                ><FaSearch /></button>  
            </div>        
        </>
    )
}

export default PostListFilter