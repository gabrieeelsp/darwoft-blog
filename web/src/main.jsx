import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomeView, CategoryView, PostView, PersonalDataView, PostEditView, PublicLayout, AdminLayout, PostsListView } from './views'
import Profile from './views/public/profile/Profile.jsx'
import PostCreateView from './views/public/profile/PostCreateView.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <HomeView />,
            },
            {
                path: 'seccion/:categorySlug',
                element: <CategoryView />,
            },
            {
                path: ':postSlug',
                element: <PostView />,
            },
            {
                path: '/admin',
                element: <AdminLayout />
            },
            {
                path: '/perfil',
                element: <Profile />,
                children: [
                    {
                        index: true,
                        element: <PersonalDataView />
                    },
                    {
                        path: 'publicaciones',
                        children: [
                            {
                                index: true,
                                element: <PostsListView />,
                            },
                            {
                                path: 'nuevo-post',
                                element: <PostCreateView />
                            },
                            {
                                path: ':postId/edit',
                                element: <PostEditView />
                            },
                        ]
                    },
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(

        <RouterProvider router={router} >
            <App />
        </RouterProvider>

)
