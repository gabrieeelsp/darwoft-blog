

const CheckInputAuth = (props) => {
    const {
        handlerInputChange,
        name,
        label
    } = props;
    return (
        <>
            <div className="flex align-middle">
                <input type="checkbox" name={name} id={name} className="cursor-pointer" onChange={handlerInputChange} />
                <label htmlFor={name} className="ml-2 text-sm cursor-pointer">{label}</label>
            </div>
        </>
    )
}

export default CheckInputAuth