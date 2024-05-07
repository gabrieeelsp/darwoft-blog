import { Routes, Route } from 'react-router-dom';
import { AdminView, CategoryView, LoginView, RegisterView, PostView, PublicView, Profile, PersonalDataView, PostsListView, PostCreateView, PostEditView, HomeView, VerifyAccountView, ChangePasswordView } from './views';
import { useDispatch } from 'react-redux';
import { me } from './features/auth/authSlice';
import { getInitValues } from './features/app/appSlice';
import ForgotPasswordView from './views/auth/ForgotPasswordView';

function App() {
    const dispatch = useDispatch();

    dispatch(getInitValues())

    const token = localStorage.getItem('accessToken');
    if (token) {
        dispatch(me());
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<PublicView />}> 
                    <Route index element={<HomeView />} />
                    <Route path='seccion/:categorySlug' element={<CategoryView />} />
                    <Route path=':postSlug' element={<PostView />} />
                    <Route path='auth/login' element={<LoginView />} />
                    <Route path='auth/register' element={<RegisterView />} />
                    <Route path='auth/verify-account' element={<VerifyAccountView />} />
                    <Route path='auth/forgot-password' element={<ForgotPasswordView />} />
                    <Route path='auth/change-password' element={<ChangePasswordView />} />
                    <Route path='perfil' element={<Profile />} >
                        <Route index element={<PersonalDataView />} />
                        <Route path='publicaciones' element={<PostsListView />} />
                        <Route path='publicaciones/nuevo' element={<PostCreateView />} />
                        <Route path='publicaciones/:postId/editar' element={<PostEditView />} />
                        
                    </Route>
                </Route>

                <Route path='/admin' element={<AdminView />} />                    
            </Routes>   
            
        </>
    )
}

export default App
