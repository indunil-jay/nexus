"use client";
import { useState } from "react";
import { taskList } from "@/constants";
import UserGroup from "@/components/ui/user-group";

const CheckboxGroup = () => {
  const [tasks, setTasks] = useState(taskList);

  const handleCheckboxChange = (id: number) => {
    setTasks((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border py-1 rounded-lg flex items-center justify-between px-3"
        >
          <label className="flex gap-2">
            <input
              type="checkbox"
              name={`todo-${task.id}`}
              className="peer"
              checked={task.checked}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <p className="text-sm text-dark-900 font-medium peer-checked:line-through peer-checked:opacity-50">
              {task.name}
            </p>
          </label>
          <UserGroup users={task.users} />
        </div>
      ))}
    </>
  );
};

export default CheckboxGroup;
