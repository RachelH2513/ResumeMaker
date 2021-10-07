import { createSlice, createSelector, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'

const basicInfoAdapter = createEntityAdapter()

const initialState = basicInfoAdapter.getInitialState()

// thunk function
export const fetchBasicInfo = createAsyncThunk('basicinfo/fetchBasicInfo', async () => {
    axios
        .get('/api/basicinfo')
        .then(res => {
            return res.data
        })
})

const basicinfoSlice = createSlice({
    name:'basicinfo',
    initialState,
    reducers: {
        loadBasicInfo(state, action) {
            state.push(action.payload)
        },
        updBasicInfo(state, action) {
            state.clear()
            state.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder
            // .addCase(fetchBasicInfo.fulfilled, (state, action) => {
            //     state.push(action.payload)
            // })
            .addCase(fetchBasicInfo.fulfilled, basicInfoAdapter.setAll)
    }
})

export const { loadBasicInfo, updBasicInfo } = basicinfoSlice.actions

export default basicinfoSlice.reducer

export const {selectAll: selectBasicInfo} = basicInfoAdapter.getSelectors(state => state.basicInfo)

// 
// const initialState = {
//     firstname: '',
//     lastname: '',
//     phone: '',
//     address: '',
//     email: ''
// }

// export default function basicinfoSlice (state =  initialState, action) {
//     switch (action.type) {
//         case 'basicinfo/upd': {
//             return {
//                 ...state,
//                 firstname: action.payload.firstname,
//                 lastname: action.payload.lastname,
//                 phone: action.payload.phone,
//                 address: action.payload.address,
//                 email: action.payload.email
//             }
//         }

//         default:
//             return state
//     }
// }