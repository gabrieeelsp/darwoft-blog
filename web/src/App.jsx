import { Routes, Route } from 'react-router-dom';
import { AdminView, CategoryView, LoginView, PostView, PublicView } from './views';
import RegisterView from './views/public/auth/RegisterView';

function App() {

    return (
        <>
            <Routes>
                <Route path='/' element={<PublicView />}> 
                    <Route path='seccion/:categorySlug' element={<CategoryView />} />
                    <Route path=':postSlug' element={<PostView />} />
                    <Route path='auth/login' element={<LoginView />} />
                    <Route path='auth/register' element={<RegisterView />} />
                </Route>

                <Route path='/admin' element={<AdminView />} />                    
            </Routes>   
            
        </>
    )
}

export default App
