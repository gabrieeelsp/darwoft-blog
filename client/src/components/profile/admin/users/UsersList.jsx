import { useSelector } from "react-redux"
import { Datatable, UserListFilter } from "../../../"
import { Link } from "react-router-dom"
import { capitalize } from "../../../../utils"


const UsersList = () => {

    const { users, pagination } = useSelector((state) => state.users)
    
    const body = users.map((user) => (
        {
            name: capitalize(user.name).concat(' ' + capitalize(user.surname, true)), 
            roles: user.roles.map(role => capitalize(role.name)).join(', '),
            status: user.isEnable ? <span className="bg-green-400 text-white font-bold px-2 rounded py-0.5">Habilitado</span> : <span className="bg-gray-700 text-white font-bold px-2 py-0.5 rounded">Desabilitado</span>,
            actions: <Link to={`${user._id}/edit`}>Ver</Link>
                
        }
    ))

    const data = {
        header: [
            {property: 'name', value: 'Nombre', columClassName: 'pl-3', rowClassName: 'pl-3'}, 
            {property: 'roles', value: 'Permisos',columClassName: 'text-center ', rowClassName:''},
            {property: 'status', value: 'Estado',columClassName: 'text-center ', rowClassName:''},
            {property: 'actions', value: 'Acción',columClassName: 'text-center', rowClassName:'text-center'}
        ],
        body
    }

    

    return (
        <>
            <UserListFilter />
            <Datatable data={data} pagination={{current_page: pagination.current_page, total_pages: pagination.total_pages}} />
        </>
    )
}

export default UsersList