import React from "react";

const TaskCard = ({title, desc, tag, start, end}) => (
  <div className="card bg-base-100 shadow-md">
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p>{desc}</p>
      <div className="badge badge-outline">{tag}</div>
      <div className="text-sm text-gray-500 mt-2"> {start} - {end}</div>
    </div>
  </div>
);

export default TaskCard;
