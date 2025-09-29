import { createReducer } from "@reduxjs/toolkit"
import { increment, decrement, reset } from "../action/counterAction"

const initialState = {
    count: 0
}

 const counterReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state:any) => {
            state.count += 1
        })
        .addCase(decrement, (state:any) => {
            state.count -= 1
        })
        .addCase(reset, (state:any, action:any) => {
            state.count = action.payload
        })
})

export default counterReducer