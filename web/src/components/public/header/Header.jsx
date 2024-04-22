import { Link, NavLink } from "react-router-dom"
import logo from '../../../assets/LogoBlog.png'

const Header = () => {
    return (
        <>
            <div className="flex flex-col items-center max-w-5xl mx-auto mt-2">
            
                <div>
                    <span className="text-sm text-slate-600">Blog de ciencia y tecnologías en Español</span>
                </div>
                <div className="flex w-full justify-between items-center">
                    <div className="h-14">
                        <Link to='/' >
                            <img 
                                src={logo} 
                                className="w-full h-full object-contain"
                                />
                        </Link>
                    </div>
                    <div>
                        <Link to='#'>Acceder</Link>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-10 py-2" >
                    <NavLink to='/seccion/fisica' >Física</NavLink>   
                    <span>|</span>  
                    <NavLink to='/seccion/linux' >Linux</NavLink>  
                    <span>|</span> 
                    <NavLink to='/seccion/progamacion' >Programación</NavLink>  
                    <span>|</span> 
                    <NavLink to='/seccion/devops' >Devops</NavLink>  
                    <span>|</span> 
                    <NavLink to='/seccion/ia' >IA</NavLink>      
                </div>
            </div>
            <hr className="border-0 max-w-5xl mx-auto h-[1px] bg-slate-500" />
            <hr className="border-0 max-w-5xl mx-auto h-[1px] bg-slate-500 mt-[1px]" />
        </>
    )
}

export default Header