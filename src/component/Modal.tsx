import React from "react";
import { IoMdClose } from "react-icons/io";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import { onChangheTaskFormModal } from "../features/ui/uiSlice";
import TaskFrom from "./TaskFrom";
const Modal: React.FC = () => {
    const { taskFormModal } = useAppSelector((state: RootState) => state.ui)
    const dispatch = useAppDispatch();
    return (
        <div className={` ${taskFormModal ? "block" : " hidden"} w-full fixed top-14 left-0 bg-[#00000079] h-[calc(100vh-56px)] flex justify-center items-start`}>
            <div className="bg-white w-full max-w-[600px] rounded-2xl mt-20 p-5 min-h-[300px] relative">
                <button onClick={() => dispatch(onChangheTaskFormModal(false))} className="bg-emerald-600 absolute top-2 right-2 p-2 rounded-lg text-white text-center font-medium cursor-pointer ">
                    <IoMdClose />
                </button>
                <TaskFrom />
            </div>
        </div>
    );
};

export default Modal;
