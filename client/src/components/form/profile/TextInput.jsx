const TextInput = (props) => {
    const { 
        handlerInputChange,
        name,
        isPassword = false,
        error,
        placeholder = '',
        label,
        value,
    } = props;
    return (
        <>
            <div className="grid grid-cols-12 items-center">
                <label className="col-start-2 col-span-8 sm:col-start-2 sm:col-span-2" htmlFor={name}>{label}</label>
                <input 
                    id={name}
                    type={isPassword ? 'password' : 'text'}
                    name={name}
                    className="col-start-2 col-span-10 sm:col-span-9 focus:outline-none border border-slate-300 px-2 py-1 shadow-md" 
                    value={value} 
                    onChange={handlerInputChange}
                    placeholder={placeholder}
                    />
                <div className="col-start-2 sm:col-start-4 col-span-9  min-h-4 mt-1 sm:ml-2 text-xs text-red-400">{ error }</div>
            </div>
        </>
    )
}

export default TextInput