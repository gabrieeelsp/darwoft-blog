import { useSelector } from 'react-redux'
import logo from '../../../assets/LogoBlog-Bco-v2.png'
import { Link } from 'react-router-dom'
import { capitalize } from '../../../utils'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div className=" bg-sky-900 text-slate-400 pb-5" >
                <div className='mx-auto max-w-5xl flex justify-between'>
                    <div className='flex flex-col items-start p-5'>
                        <div className='h-9'>
                            <img src={logo} alt="" className='w-full h-full object-contain' />
                        </div>
                        <span className=' mt-2 '>Blog de ciencia y tecnologías en español.</span>
                    </div>

                    { categories && 
                    <div className='flex flex-col items-start p-5'>
                        <h3 className='text-white'>Secciones</h3>
                        <ul className=''>
                            {categories.map((category) => <li key={category._id}><Link className='hover:text-white' to={`/seccion/${category.slug}`}>{capitalize(category.name)}</Link></li>)}
                        </ul>
                    </div>
                    }

                    <div className='flex flex-col items-start p-5'>
                        <h3 className='text-white'>Redes Sociales</h3>
                        <div className='flex gap-2 mt-2'>
                            <Link to='#' className='hover:text-white'><FaGithub /></Link>
                            <Link to='#' className='hover:text-white'><FaInstagram /></Link>
                            <Link to='#' className='hover:text-white'><FaTwitter /></Link>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    )
}

export default Footer