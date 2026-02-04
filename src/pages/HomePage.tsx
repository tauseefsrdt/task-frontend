import React from "react";

import Header from "../component/Header";
import { FiPlus } from "react-icons/fi";
import Modal from "../component/Modal";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import { onChangheTaskFormModal } from "../features/ui/uiSlice";
import TaskList from "../component/TaskList";
const HomePage: React.FC = () => {
  const dispatch = useAppDispatch()


  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="my-5 flex justify-end">
          <button onClick={() => dispatch(onChangheTaskFormModal(true))} className="bg-emerald-600 px-5 py-2 rounded-lg text-white text-center font-medium cursor-pointer flex items-center gap-x-1">
            Add <FiPlus color="#fff" size={18} />
          </button>
        </div>
        <TaskList />
      </div>
      <Modal />
      

    </div>
  );
};

export default HomePage;
