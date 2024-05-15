import { Link } from 'react-router-dom'
import pageNotFount from '../../assets/404.png'

const Error = () => {
    return (
        <>
            <div className=' flex-1 flex flex-col gap-5 justify-center items-center w-full'>  
                <div className='h-[30%]'>
                    <img src={pageNotFount} alt="" className='w-full h-full object-contain' />
                </div>

                <h1 className='text-xl font-bold'>El contenido que buscas no está disponible</h1>
                <Link to='/' className='border border-slate-400 shadow-md bg-slate-100 px-4 py-1 rounded hover:bg-white ' >Ir al Inicio</Link>
            </div>
        </>
    )
}

export default Error