import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import { HomeView, CategoryView, PostView, PersonalDataVew, PostsListView, PostEditView, PublicLayout, AdminLayout } from './views'

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
