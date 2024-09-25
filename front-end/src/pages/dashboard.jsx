import { useState } from "react";

const Dashboard = () => {
  const [columns, setColumns] = useState({
    column1: ["item1", "item2"],
    column2: ["item3", "item4"],
    column3: ["item5", "item6"],
  });

  const onDrop = (e, toColumn) => {
    const item = e.dataTransfer.getData("item");
    const fromColumn = e.dataTransfer.getData("fromColumn");
    if (toColumn === fromColumn) return;

    setColumns((prev) => {
      const fromData = prev[fromColumn].filter((older) => older !== item);
      const toData = [...prev[toColumn], item];
      return {
        ...prev,
        [fromColumn]: fromData,
        [toColumn]: toData,
      };
    });
  };

  const onDragOver = (e) => e.preventDefault();

  const onDragStart = (e, item, fromColumn) => {
    e.dataTransfer.setData("item", item);
    e.dataTransfer.setData("fromColumn", fromColumn);
  };

  return (
    <div className="flex flex-col justify-start m-5 gap-5">
      <div>
        <button
          type="button"
          class="text-white bg-[#3173f5] hover:bg-blue-800  font-medium rounded-lg text-sm px-5 w-[200px] py-2.5 me-2 mb-2 "
        >
          add Task
        </button>
      </div>
      <div className="h-[70px] bg-slate-50 shadow-md rounded-sm flex justify-between">
        <div></div>
      </div>
      <div className="container">
        {Object.keys(columns).map((column) => (
          <div
            key={column}
            className="column"
            onDrop={(e) => onDrop(e, column)}
            onDragOver={onDragOver}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            {columns[column].map((item) => (
              <div
                draggable
                onDragStart={(e) => onDragStart(e, item, column)}
                key={item}
                className="item"
                style={{
                  padding: "5px",
                  margin: "5px",
                  border: "1px solid grey",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Dashboard;
