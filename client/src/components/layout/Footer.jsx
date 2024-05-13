import logo from '../../assets/LogoFooter.png'
import { Link } from 'react-router-dom'
import { capitalize } from '../../utils'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Footer = () => {
    const { categories } = useSelector((state) => state.app)
    return (
        <>
            <div className=" bg-sky-900 text-slate-400 pb-5 mt-5" >
                <div className='mx-auto max-w-5xl flex flex-col sm:flex-row sm:justify-between'>
                    <div className='flex flex-col items-center sm:items-start p-5'>
                        <div className='h-9'>
                            <img src={logo} alt="" className='w-full h-full object-contain' />
                        </div>
                        <span className=' mt-2 '>Blog de ciencia y tecnologías en español.</span>
                    </div>

                    { categories && 
                    <div className='flex flex-col items-center mt-3'>
                        <h3 className='text-white'>Secciones</h3>
                        <div className='flex gap-3 sm:flex-col sm:gap-0 '>
                            {Object.keys(categories).map((categoryId) => <span key={categoryId}><Link className='hover:text-white' to={`/seccion/${categories[categoryId].slug}`}>{capitalize(categories[categoryId].name)}</Link></span>)}
                        </div>
                        
                    </div>
                    }

                    <div className='flex flex-col items-center mt-3'>
                        <h3 className='text-white'>Redes Sociales</h3>
                            <div className='flex gap-3 '>
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