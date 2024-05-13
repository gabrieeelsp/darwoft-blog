import { configureStore } from '@reduxjs/toolkit';

import appSlice from '../features/app/appSlice';
import postsSlice from '../features/posts/postsSlice';
import authSlice from '../features/auth/authSlice';
import usersSlice from '../features/user/usersSlice';
import categoriesSlice from '../features/categories/categoriesSlice';
import commentsSlice from '../features/comments/commentsSlice';

export const store = configureStore({
    reducer: {
        app: appSlice,
        posts: postsSlice,
        auth: authSlice,
        users: usersSlice,
        categories: categoriesSlice,
        comments: commentsSlice,
    },
})