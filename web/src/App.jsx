import { Routes, Route } from 'react-router-dom';
import { AdminView, CategoryView, LoginView, RegisterView, PostView, PublicView } from './views';
import { useDispatch } from 'react-redux';
import { me } from './features/auth/authSlice';

function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('accessToken');
    if (token) {
        dispatch(me());
    }

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
