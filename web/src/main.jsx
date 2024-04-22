import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { HomeView, CategoryView, PostView, PersonalDataView, PostEditView, PublicLayout, AdminLayout, PostsListView } from './views'
import Profile from './views/public/profile/Profile.jsx'

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
                        element: <PostsListView />
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} >
            <App />
        </RouterProvider>
  </React.StrictMode>,
)
