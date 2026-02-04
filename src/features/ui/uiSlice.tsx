import { createSlice } from "@reduxjs/toolkit"
interface initialStateTypes {
    taskFormModal: boolean
}
const initialState: initialStateTypes = {
    taskFormModal: false
}
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        onChangheTaskFormModal(state, action) {
            state.taskFormModal = action.payload;
        },
    },
})

export const { onChangheTaskFormModal } = uiSlice.actions;
export default uiSlice.reducer