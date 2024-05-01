import { capitalize } from "../../../../utils";

const SelectInput = (props) => {
    const {
        handlerInputChange,
        name,
        value,
        options,
    } = props;

    const optionsSelect = options.length && typeof options[0] === 'string'
        ? options.map((option) => <option value={option} key={'opntion-'+option} className="text-slate-800" >{capitalize(option)}</option>)
        : options.map((c) => <option value={c.slug} key={c._id} className="text-slate-800" >{capitalize(c.name)}</option>)
    return (
        <>
            <select
                value={value} 
                name={name}
                onChange={handlerInputChange}
                className="focus:outline-none bg-white border border-slate-300 rounded-sm px-2"
            >
                <option value="" className="text-slate-300" >---</option>
                { optionsSelect }
            </select>
        </>
    )
}

export default SelectInput