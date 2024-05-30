import {createSlice, PayloadAction} from '@reduxjs/toolkit';


interface ModalSliceSate {
    displayLogin: boolean;
    displayLibraryCard: boolean;
    displayLoan: boolean;
}

const initialState: ModalSliceSate = {
    displayLogin: false,
    displayLibraryCard: false,
    displayLoan: false
}

export const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setDisplayLogin(state, action: PayloadAction<boolean>){
            state = {
                ...state ,
                displayLogin: action.payload
            }
            return state;
        },

        setDisplayLibraryCard(state, action: PayloadAction<boolean>){
            state = {
                ...state ,
                displayLibraryCard: action.payload
            }
            return state;
        },

        setDisplayLoan(state, action: PayloadAction<boolean>){
            state = {
                ...state,
                displayLoan: action.payload
            }
            return state;
        }
    }
});

export const {setDisplayLogin, setDisplayLibraryCard, setDisplayLoan} = ModalSlice.actions;

export default ModalSlice.reducer;