import React from "react";
import TaskCard from "./TaskCard";

const KanbanColumn = ({ title, data, loading, error }) => {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className="space-y-4">
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : !data || data.length === 0 ? (
        <div>No tasks available.</div>
      ) : (
        data.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            desc={task.desc}
            tag={task.tag}
            start={task.start}
            end={task.end}
          />
        ))
      )}
      </div>
    </div>
  );
};
export default KanbanColumn;
