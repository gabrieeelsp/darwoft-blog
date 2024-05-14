import { capitalize } from "../../../utils";

const SelectInput = (props) => {
    const {
        handlerInputChange,
        name,
        error,
        label,
        value,
        options,
        showEmptyOption = true,
    } = props;

    const optionsSelect = options.length && typeof options[0] === 'string'
        ? options.map((option) => <option value={option} key={'opntion-'+option} className="text-slate-800" >{capitalize(option)}</option>)
        : options.map((c) => <option value={c._id} key={c._id} className="text-slate-800" >{capitalize(c.name)}</option>)
        
    return (
        <>
            <div className="grid grid-cols-12 items-center">
                <label className="col-span-8 sm:col-span-2" htmlFor={name}>{label}</label>
                <select
                    id={name}
                    value={value} 
                    name={name}
                    onChange={handlerInputChange}
                    className={`col-span-12 sm:col-span-10 focus:outline-none bg-white border border-slate-300 rounded-sm px-2 py-1 shadow-md ${value ? '' : 'text-slate-300'} `}
                >
                    {showEmptyOption && <option value="" className="text-slate-300" >---</option>}
                    { optionsSelect }
                </select>
                <div className="col-start-2 sm:col-start-4 col-span-9  min-h-4 mt-1 sm:ml-2 text-xs text-red-400">{ error }</div>
            </div>
        </>
    )
}

export default SelectInput