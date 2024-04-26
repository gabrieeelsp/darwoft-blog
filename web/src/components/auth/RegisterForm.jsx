
import { Link } from "react-router-dom"



const RegisterForm = () => {
    
    return (
        <>
            <form >
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col border-purple-400 border-t-8">
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                        <input type="text" id="name" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Nombre" name="name"  />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ 'errors.name' }</div>
                    </div>
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="surname">Apellido</label>
                        <input type="text" id="surname" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Apellido" name="surname" />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ 'errors.surname' }</div>
                    </div>
                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input type="text" id="email" className="shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker" placeholder="Email" name="email"  />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ 'errors.email' }</div>
                    </div>

                    <div className="mb-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input type="password" className="shadow appearance-none text-sm border border-red rounded w-full py-2 px-3 text-grey-darker" id="password" placeholder="************" name="password"   />
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">{ 'errors.password' }</div>
                    </div>

                    <div className="flex flex-col mt-2 mb-1">
                        <button className="bg-purple-500 w-full text-sm hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" type="submit">
                            Crear cuenta
                        </button>
                        <div className="min-h-4 mt-1 ml-2 text-xs text-red-400">Response</div>
                    </div>
                </div>

            </form>
            <div className="text-center">
                <p className="text-grey-dark text-sm text-slate-500">¿Ya tienes una cuenta? <Link to='/auth/login' className="no-underline text-blue font-bold text-purple-400 hover:text-purple-500">Ingresar</Link>.</p>
            </div>
        </>
    )
}

export default RegisterForm
