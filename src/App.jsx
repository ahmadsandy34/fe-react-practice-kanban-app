import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddTaskModal from "./components/AddTaskModal";
import KanbanColumn from "./components/KanbanColumn";
import useApi from "./hooks/useApi";
import { DragDropContext } from "react-beautiful-dnd";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, error, loading, postData } = useApi(
    "http://localhost:3000/tasks"
  );
  const [newData, setNewData] = useState({
    title: "",
    desc: "",
    start: "",
    end: "",
    tag: "Development",
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postData(newData);
      setNewData({
        title: "",
        desc: "",
        start: "",
        end: "",
        tag: "",
      });
    } catch (error) {
      console.error("Error posting data:", error);
    } finally {
      handleCloseModal();
    }
  };

  return (
    <div>
      <Navbar handleOpenModal={handleOpenModal} />
      <AddTaskModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        newData={newData}
      />
      <div className="p-4">
        <div className="flex space-x-4">
          <KanbanColumn
            title="Backlog"
            data={data}
            loading={loading}
            error={error}
          />
          <KanbanColumn title="On Progress" loading={loading} error={error} />
          <KanbanColumn title="Done" loading={loading} error={error} />
        </div>
      </div>
    </div>
  );
};

export default App;
