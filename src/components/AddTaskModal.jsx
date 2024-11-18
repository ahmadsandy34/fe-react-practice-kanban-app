import React from "react";

const AddTaskModal = ({
  isModalOpen,
  handleCloseModal,
  handleSubmit,
  handleInputChange,
  newData,
}) => (
  <div className={isModalOpen ? "modal modal-open" : "modal modal-close"}>
    <div className="modal-box">
      <h3 className="font-bold text-lg">Add Task</h3>
      <form>
        <div className="form-control">
          <label htmlFor="title" className="label">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={newData.title}
            onChange={handleInputChange}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="desc" className="label">
            Description
          </label>
          <textarea
            name="desc"
            value={newData.desc}
            onChange={handleInputChange}
            className="textarea textarea-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="start" className="label">
            Start Date
          </label>
          <input
            name="start"
            value={newData.start}
            onChange={handleInputChange}
            type="date"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="end" className="label">
            End Date
          </label>
          <input
            name="end"
            value={newData.end}
            onChange={handleInputChange}
            type="date"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label htmlFor="tag" className="label">
            Tag
          </label>
          <select
            name="tag"
            value={newData.tag}
            onChange={handleInputChange}
            className="select select-bordered"
          >
            <option value="Development">Development</option>
            <option value="Testing">Testing</option>
            <option value="Design">Design</option>
          </select>
        </div>
        <div className="modal-action">
          <button onClick={handleSubmit} className="btn btn-primary">
            Save
          </button>
          <button className="btn" onClick={handleCloseModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default AddTaskModal;
