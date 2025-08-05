import React from "react";
import UserSidebar from "./UserSidebar"; 
import TaskFilter from "../../components/tasks/TaskFilter";

const TaskFilterPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-white p-6 rounded-lg shadow-md w-full">
        <TaskFilter/>
        </div>
      </div>
    </div>
  );
};

export default TaskFilterPage;
