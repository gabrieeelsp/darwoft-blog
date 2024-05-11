const TextInputAuth = (props) => {
    const { 
        handlerInputChange,
        name,
        isPassword = false,
        error,
        placeholder = '',
        label,
    } = props;
    return (
        <>
            <div className='mb-1'>
                <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor={name}>{label}</label>
                <input type={isPassword ? 'password' : 'text'} id={name} className='shadow text-sm appearance-none border rounded w-full py-2 px-3 text-grey-darker' placeholder={placeholder} name={name} onChange={handlerInputChange} />
                <div className='min-h-4 mt-1 ml-2 text-xs text-red-400'>{ error }</div>
            </div>
        </>
    )
}

export default TextInputAuth