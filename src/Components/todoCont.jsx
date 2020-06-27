import React, { Fragment } from "react";
import TodoItem from "./todoItem";

export default ({ toDoList, onDelete, onCompleted }) => {
  return (
    <Fragment>
      <div
        className="onHoverShadow"
        style={{
          width: "300px",
          maxHeight: "600px",
          borderRadius: "6px",
          transition: "all 1s",
          overflow: "auto",
          background:
            "linear-gradient(to right,rgba(134, 226, 213, 1),rgba(3, 201, 169, 1))",
        }}
      >
        {toDoList.map((item) => {
          return (
            <TodoItem
              onCompleted={onCompleted}
              onDelete={onDelete}
              key={item}
              desc={item}
            ></TodoItem>
          );
        })}
      </div>
      <style>
        {`
          .onHoverShadow:hover{
            box-shadow:0px 0px 20px rgba(0,0,0,0.5);
            transform:translateY(10px);
          }
          .onHoverShadow::-webkit-scrollbar{
              width:2px;
          }
          `}
      </style>
    </Fragment>
  );
};
