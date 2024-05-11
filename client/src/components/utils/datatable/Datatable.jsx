import { Link } from "react-router-dom"
import Pagination from "./Pagination";

const dataSample = {
    header: [
        {property: 'title', value: 'Título', columClassName: 'pl-3', rowClassName: 'pl-3 py-2'}, 
        {property: 'category', value: 'Categoría',columClassName: '', rowClassName: 'text-center'}, 
        {property: 'actions', value: 'Acción',columClassName: '', rowClassName:'text-center'}
    ],
    body: [
        {title: 'Thunderbird sedd une a la causa y dará soporte oficial al paquete Snap', category: 'Linux', actions: <Link to={'2656/editar'} >Editar</Link>},
        {title: 'El Enigma del Tiempo: Perspectivas Actuales en la Teoría Cuántica de la Gravedad', category: 'Fisica', actions: <Link to={'2656/editar'} >Editar</Link>},
    ]
}

const Datatable = (porps) => {
    const { data = dataSample, pagination } = porps;

    return (
        <>
            <div className="">
                <table className="w-full text-sm my-4">
                    <thead className="border-b-2 border-b-slate-200 text-left">
                        <tr>
                            {data.header.map((col) => <th key={col.property} className={`py-2 ${col.columClassName}`}>{col.value}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        { data.body.map((row, key) => 
                            <tr key={key} className="border-b border-slate-200">
                                {data.header.map((col, index) => 
                                    <td className={`py-2 ${index === 0 ? 'pl-2': 'text-center'}`} key={key+'-'+index }>
                                        <span >{row[col.property]}</span>
                                    </td>
                                )}
                            </tr>)}
                    </tbody>
                </table>
                <Pagination current_page={pagination.current_page} total_pages={pagination.total_pages} />
            </div>
        </>
    )
}

export default Datatable