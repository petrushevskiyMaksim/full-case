import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(fetchProfileData.pending, (state, action) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })

    //         .addCase(
    //             fetchProfileData.fulfilled,
    //             (state, action: PayloadAction<Profile>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //                 state.form = action.payload;
    //             }
    //         )

    //         .addCase(fetchProfileData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         })

    //         .addCase(updateProfileData.pending, (state, action) => {
    //             state.validateErrors = undefined;
    //             state.isLoading = true;
    //         })

    //         .addCase(
    //             updateProfileData.fulfilled,
    //             (state, action: PayloadAction<Profile>) => {
    //                 state.isLoading = false;
    //                 state.data = action.payload;
    //                 state.form = action.payload;
    //                 state.readonly = true;
    //                 state.validateErrors = undefined;
    //             }
    //         )

    //         .addCase(updateProfileData.rejected, (state, action) => {
    //             state.isLoading = false;
    //             state.validateErrors = action.payload;
    //         });
    // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
