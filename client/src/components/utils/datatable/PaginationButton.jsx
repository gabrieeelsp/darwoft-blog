const PaginationButton = (props) => {
    const { link, isDisable, handleClick, text } = props

    return (
        <>
            <button
                className={`px-2 border border-slate-300 rounded-sm ${isDisable ? 'text-slate-400' : 'text-sky-600'}`} 
                disabled={isDisable}  onClick={() => handleClick(link)}
                >{text}</button>
            </>
    )
}

export default PaginationButton