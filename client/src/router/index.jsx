import { createBrowserRouter } from 'react-router-dom';
import App from '../App'
import { Category, ChangePassword, ForgotPassword, Home, Login, PersonalData, Post, PostCreate, PostEdit, PostsList, ProfileLayout, Profile, Register, UsersList, VerifyAccount, CategoriesList, CategoryEdit, UserEdit, CategoryCreate } from '../views'


const createRouter = () => {

    return createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: 'seccion/:categorySlug',
                    element: <Category />
                },
                {
                    path: ':postSlug',
                    element: <Post />
                },
                {
                    path: 'auth/login',
                    element: <Login />
                },
                {
                    path: 'auth/register',
                    element: <Register />
                },
                {
                    path: 'auth/forgot-password',
                    element: <ForgotPassword />
                },
                {
                    path: 'auth/verify-account',
                    element: <VerifyAccount />
                },
                {
                    path: 'auth/change-password',
                    element: <ChangePassword />
                },
                {
                    path: 'perfil',
                    element: <ProfileLayout />,
                    children: [
                        {
                            index: true,
                            element: <Profile />
                        },
                        {
                            path: 'datos-personales',
                            element: <PersonalData />
                        },
                        {
                            path: 'publicaciones',
                            element: <PostsList />
                        },
                        {
                            path: 'publicaciones/nuevo',
                            element: <PostCreate />
                        },
                        {
                            path: 'publicaciones/:postId/editar',
                            element: <PostEdit />
                        },
                        {
                            path: 'users',
                            element: <UsersList />
                        },
                        {
                            path: 'users/:userId/edit',
                            element: <UserEdit />
                        },
                        {
                            path: 'categorias',
                            element: <CategoriesList />
                        },
                        {
                            path: 'categorias/:categoryId/editar',
                            element: <CategoryEdit />
                        },
                        {
                            path: 'categorias/nuevo',
                            element: <CategoryCreate />
                        },
                    ]
                },
            
            ]
        }
])
}

export default createRouter;