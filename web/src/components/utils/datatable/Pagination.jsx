import { useSearchParams } from "react-router-dom"
import PaginationButton from "./PaginationButton";

const Pagination = (props) => {

    const { current_page, total_pages } = props

    const [currentQueryParameters, setSearchParams] = useSearchParams();

    const handleClick = (page) => {
        currentQueryParameters.set('page', page)
        setSearchParams(currentQueryParameters)
    }

    return (
        <>
            <div className="flex gap-2 justify-end mt-2">
                <PaginationButton 
                    isDisable={current_page === 1}  
                    handleClick={handleClick}
                    link={1}
                    text={'First'}
                    />

                <PaginationButton 
                    isDisable={current_page === 1} 
                    handleClick={handleClick}
                    link={current_page - 1}
                    text={'Prev'}
                    />

                {current_page === total_pages && total_pages > 2 && 
                <PaginationButton 
                    handleClick={handleClick}
                    link= {current_page - 2}
                    text={current_page - 2}
                    />}

                {current_page !== 1 && 
                <PaginationButton 
                    handleClick={handleClick}
                    link={current_page - 1}
                    text= {current_page - 1}
                    />}

                <PaginationButton 
                    isDisable={true}
                    link={current_page}
                    text={current_page}
                    />

                {current_page !== total_pages && 
                <PaginationButton 
                    handleClick={handleClick}
                    link={current_page + 1}
                    text={current_page + 1}
                    />}

                {current_page === 1 && total_pages > 2 && 
                <PaginationButton 
                    handleClick={handleClick}
                    link={current_page + 2}
                    text={current_page + 2}
                    />}

                <PaginationButton 
                    isDisable={total_pages === current_page} 
                    handleClick={handleClick}
                    link={current_page + 1}
                    text={'Next'}
                    />

                <PaginationButton 
                    isDisable={current_page === total_pages} 
                    handleClick={handleClick}
                    link={total_pages}
                    text={'Last'}
                    />
            </div>
            
            
            
        </>
    )
}

export default Pagination;
