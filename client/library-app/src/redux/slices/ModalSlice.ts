import {createSlice, createdSlice , payloadAction} from '@reduxjs/toolkit';


interface ModalSliceSate {
    displayLogin: boolean;
    displayLibraryCard: boolean;
    displayLoan: boolean;
}

const initialState: ModalSliceSate = {
    displayLogin: true,
    displayLibraryCard: false,
    displayLoan: false;
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setDisplayLogin(state, action: payloadAction<boolean>){
            state = {
                ...state ,
                displayLogin: action.payloada
            }
            return state;
        },

        setDisplayLoan(state, action: payloadAction<boolean>){
            state = {
                ...state,
                displayLoan: action.payload
            }
            return state;
        }
    }
});

export const {setDisplayLogin, setDisplayLibraryCard, setDisplayLoan} = ModalSlice.actions;

export defaulta ModalSlice.reducer;