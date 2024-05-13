const TextInputFilter = (props) => {
    const { 
        handlerInputChange,
        name,
        placeholder = '',
        value,
    } = props;
    return (
        <>
            <input 
                className="focus:outline-none border border-slate-300 h-7 rounded-sm px-2"
                type="text" 
                placeholder={placeholder}
                name={name}
                value={value} 
                onChange={handlerInputChange}
            />
        </>
    )
}

export default TextInputFilter