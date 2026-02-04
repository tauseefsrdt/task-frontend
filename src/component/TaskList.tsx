import React, { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "../app/store";
import { deleteTask, fetchTasks, updateTask } from "../features/tasks/taskThunk";

const TaskList: React.FC = () => {
  const { item } = useAppSelector((state: RootState) => state.task);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, []);
  console.log("item", item);
  return (
    <div className="mt-5">
      {item.length > 0 && (
        <table className="w-full">
          <thead className="">
            <tr className=" text-white  ">
              <th className="py-2 px-2 bg-emerald-600 rounded-tl-lg text-left ">Id</th>
              <th className="py-2 px-2 bg-emerald-600  text-left">Title</th>
              <th className="py-2 px-2 bg-emerald-600 text-left">Description</th>
              <th className="py-2 px-2 bg-emerald-600  text-left">Status</th>
              <th className="py-2 px-2 bg-emerald-600 rounded-tr-lg text-left w-[300px]">Action</th>
            </tr>
          </thead>
          <tbody>
            {item.map((task, i) => (
              <tr key={task._id} className="border border-gray-300">
                <td className="py-2 px-2">{i + 1}</td>
                <td className="py-2 px-2">
                  <b>{task.title}</b>
                </td>
                <td className="py-2 px-2"> {task.description}</td>
                <td className="py-2 px-2">{task.status}</td>
                <td className="py-2 px-2">
                  <button
                    className="bg-emerald-600 px-5 py-2 rounded-lg text-white text-nowrap text-center font-medium cursor-pointer"
                    onClick={() => dispatch(deleteTask(task._id))}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-emerald-600 px-5 py-2 ml-5 rounded-lg text-white text-nowrap text-center font-medium cursor-pointer"
                    onClick={() =>
                      dispatch(
                        updateTask({
                          ...task,
                          status: task.status === "completed" ? "pending" : "completed",
                        })
                      )
                    }
                  >
                    {task.status === "completed" ? "Mark Pending" : "Mark Completed"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
