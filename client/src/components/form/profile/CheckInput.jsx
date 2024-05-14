

const CheckInput = (props) => {
    const {
        handlerInputChange,
        name,
        label,
        value,
    } = props;
    return (
        <>
            <div className="grid grid-cols-12 items-center mb-4 ">

                <div className="col-span-8 sm:col-start-3 sm:col-span-2 flex gap-3">
                    <input
                        checked={value}
                        className="cursor-pointer" 
                        type="checkbox" name={name} id={name} onChange={handlerInputChange} />
                    <label 
                        htmlFor={name}
                        className="focus:outline-none" 
                        >{label}</label>
                </div>
                
            </div>
        </>
    )
}

export default CheckInput