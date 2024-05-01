const PaginationButton = (props) => {
    const { link, isDisable, handleClick, text } = props

    return (
        <>
            <button
                className={`p-1 border border-slate-300 rounded-md ${isDisable ? 'text-slate-400 bg-sky-100' : 'text-slate-600 bg-sky-300'}`} 
                disabled={isDisable}  onClick={() => handleClick(link)}
                >{text}</button>
            </>
    )
}

export default PaginationButton