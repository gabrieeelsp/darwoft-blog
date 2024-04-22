const SideBar = () => {
    return (
        <>
            <div className="border border-slate-400 rounded-sm bg-slate-100 flex flex-col items-center pt-3">
                <div className="w-20 h-20 rounded-full border border-slate-400 bg-slate-200"></div>
                <span className="mt-2 text-slate-800">Gabriel Sebastian Picco</span>
                <span className="text-sm italic text-slate-500">Autor, Editor</span>
                <span className="text-sm italic text-slate-500 mt-20">Vistas: 524</span>
                <span className="text-sm italic text-slate-500">Comentarios: 684</span>
                <span className="text-sm italic text-slate-500">Seguidores: 24</span>
            </div>
        </>
    )
}

export default SideBar