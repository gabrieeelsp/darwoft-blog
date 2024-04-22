const Subscribe = () => {
    return (
        <>
            <div 
                className="flex justify-center items-center bg-slate-100 py-10"
            >
                <div className="flex flex-col">
                    <span className="text-lg">Suscríbete a nuestra newsletter</span>
                    <span className="text-sm">Lo mejor de nuestro sitio semanalmente en tu correo</span>
                </div>
                <div className="ml-16">
                    <input 
                        className="focus:outline-none border boder-slate-300 px-2 py-1"
                        type="text" 
                        placeholder="Email"
                    />
                    <button className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-1 px-4 rounded ml-5">Darme de alta</button>
                </div>
            </div>
        </>
    )
}

export default Subscribe