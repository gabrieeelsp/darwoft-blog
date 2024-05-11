import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/LogoHeader.png'
import { useSelector } from "react-redux"

const Header = () => {
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div className="flex flex-col items-center max-w-6xl mx-auto pt-5 pb-3 border-b border-slate-500 ">
            
                
                <div className="flex justify-between w-full ">
                    <div className="h-14">
                        <Link to='/' >
                            <img src={logo} className="w-full h-full object-contain" />
                        </Link>
                    </div>
                    <div className="flex justify-center items-end gap-8  font-bold mr-20" >
                        {categories && Object.keys(categories).map((categoryId) => <NavLink key={categoryId} to={`/seccion/${categories[categoryId].slug}`} >{categories[categoryId].name}</NavLink> )}
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header