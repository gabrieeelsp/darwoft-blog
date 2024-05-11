import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import createRouter from './router'

import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <RouterProvider router={createRouter()} />
    </Provider>
)
