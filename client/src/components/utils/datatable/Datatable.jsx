import Pagination from "./Pagination";

const Datatable = (porps) => {
    const { data, pagination, showHeader = true } = porps;

    return (
        <>
            <div className="">
                <table className="w-full text-sm ">
                    {showHeader &&
                    <thead className="border-b-2 border-b-slate-200 text-left">
                        <tr>
                            {data.header.map((col) => <th key={col.property} className={`py-2 ${col.columClassName}`}>{col.value}</th>)}
                        </tr>
                    </thead>}
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
                {pagination && <Pagination current_page={pagination.current_page} total_pages={pagination.total_pages} />}
            </div>
        </>
    )
}

export default Datatable