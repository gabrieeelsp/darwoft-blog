const PersonalDataForm = () => {
    return (
        <>
            <div className="p-3">
                <div className="grid grid-cols-12">
                    <label className="col-span-3" htmlFor="">Nombres</label>
                    <input
                        className="col-span-9 focus:outline-none border border-slate-300 bg-slate-100"
                        type="text" 
                        placeholder="Nombre"
                        />
                </div>
                <div className="grid grid-cols-12 mt-2">
                    <label className="col-span-3" htmlFor="">Apellidos</label>
                    <input
                        className="col-span-9 focus:outline-none border border-slate-300 bg-slate-100"
                        type="text" 
                        placeholder="Nombre"
                        />
                </div>
                <div className="grid grid-cols-12 mt-2">
                    <div className="col-start-4 col-span-8">
                        <button 
                            className=" bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-4 rounded"
                            >Guardar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalDataForm