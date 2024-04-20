import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center max-w-6xl mx-auto mt-2">
                <Link to='/' className="text-2xl font-bold">The new DARWOFT Blog</Link>
                <div className="w-full flex justify-center gap-10 py-2" >
                    <NavLink to='/seccion/fisica' >Física</NavLink>     
                    <NavLink to='/seccion/linux' >Linux</NavLink>  
                    <NavLink to='/seccion/progamacion' >Programación</NavLink>  
                    <NavLink to='/seccion/devops' >Devops</NavLink>  
                    <NavLink to='/seccion/ia' >IA</NavLink>      
                </div>
            </div>
            <hr className="border-0 h-[1px] bg-slate-500" />
        </>
    )
}

export default Header