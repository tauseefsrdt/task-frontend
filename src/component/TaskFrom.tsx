import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import { addTask } from "../features/tasks/taskThunk";
import { onChangheTaskFormModal } from "../features/ui/uiSlice";

const TaskFrom: React.FC = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({ title: "", description: "", status: "pending" });
  const { isCreateTasks } = useAppSelector((state: RootState) => state.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTask(form));
    setForm({ title: "", description: "", status: "pending" });
  };

  useEffect(() => {
    if (isCreateTasks) {
      dispatch(onChangheTaskFormModal(false));
    }
  }, [isCreateTasks]);

  console.log("isCreateTasks", isCreateTasks);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="text-2xl text-center font-semibold mt-10">Add Our Tasks</h3>
        <div className="space-y-10 mt-10">
          <input
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            type="text"
            value={form.title}
            placeholder="Title"
            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-0 "
          />
          <input
            type="text"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-0 "
          />
        </div>
        <div className="flex justify-end mt-10">
          <button type="submit" className="bg-emerald-600 px-5 py-2 rounded-lg text-white text-center font-medium cursor-pointer flex items-center gap-x-1">
            Add <FiPlus color="#fff" size={18} />
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskFrom;
