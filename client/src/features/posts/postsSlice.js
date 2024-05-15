import { createSlice } from "@reduxjs/toolkit";

import { create, createComment, findAll, findAllComments, findOne, update, uploadImage  } from "./actions";

const initialState = {
    posts: null,
    pagination: null,    
    post: null,

    loading: 'idle', // 'idle' | 'pending' | 'succeeded' | 'failed'
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        updatePost: (state, action) => {
            if ( !state.posts ) return
            const postUdated = state.posts.find((post) => post._id === action.payload.id)
            postUdated.name = action.payload.name
            postUdated.isVisible = action.payload.isVisible
        },
        cleanSlice: (state) => {
            state.loading = 'idle'
            state.post = null
            state.posts = null
            state.pagination = null
            state.error = null
        },
        removeImage: (state) => {
            state.post.image = undefined;
        },

    },
    extraReducers(builder) {
        builder
            .addCase(findAll.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findAll.fulfilled, (state, action) => {
                if ( action.payload.updateState ) {
                    state.posts = action.payload.data.posts
                    state.pagination = action.payload.data.pagination
                    
                }
                state.loading = 'succeeded'
                state.error = null

            })
            .addCase(findAll.rejected, (state, action) => {
                state.posts = null
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(findOne.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findOne.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(findOne.rejected, (state, action) => {
                state.posts = null
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(update.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(update.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(update.rejected, (state, action) => {
                state.post = null
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(findAllComments.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(findAllComments.fulfilled, (state, action) => {
                console.log(action.payload)
                state.post.comments = state.post.comments.concat(action.payload.data.comments)
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(findAllComments.rejected, (state, action) => {
                state.post = null
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(createComment.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.post.comments.unshift(action.payload.data)
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(createComment.rejected, (state, action) => {
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(create.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(create.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(create.rejected, (state, action) => {
                state.post = null
                state.loading = 'failed'
                state.error = action.payload
            })

            .addCase(uploadImage.pending, (state) => {
                state.loading = 'pending'
            })
            .addCase(uploadImage.fulfilled, (state, action) => {
                state.post = action.payload.data
                state.loading = 'succeeded'
                state.error = null
            })
            .addCase(uploadImage.rejected, (state, action) => {
                state.post = null
                state.loading = 'failed'
                state.error = action.payload
            })
    }
})

export const { cleanSlice, removeImage, updatePost } = postsSlice.actions;

export default postsSlice.reducer;