import { useSelector } from "react-redux"
import { CategoriesListFilter, Datatable } from "../../.."
import { capitalize } from "../../../../utils"
import { Link } from "react-router-dom"


const CategoriesList = () => {

    const { categories, pagination } = useSelector((state) => state.categories)

    
    const body = categories.map((category) => (
        {
            name: capitalize(category.name).concat(' ' + capitalize(category.surname, true)), 
            actions: <Link to={`${category._id}/editar`} >Editar</Link>
        }
    ))

    const data = {
        header: [
            {property: 'name', value: 'Nombre', columClassName: 'pl-3', rowClassName: 'pl-3'}, 
            {property: 'actions', value: 'Acción',columClassName: 'text-center', rowClassName:'text-center'}
        ],
        body
    }

    

    return (
        <>
            
            <CategoriesListFilter />
            <Datatable data={data} pagination={{current_page: pagination.current_page, total_pages: pagination.total_pages}} />
        </>
    )
}

export default CategoriesList