import React, { Fragment } from "react";

export default ({ desc, onCompleted, onDelete }) => {
  return (
    <Fragment>
      <div
        className={`onHover ${desc.isCompleted ? "isComp" : ""}`}
        style={{
          minHeight: "100px",
          borderRadius: "2px",
          display: "flex",
          alignItems: "center",
          width: "280",
          margin: 10,
          cursor: "pointer",
        }}
      >
        <input
          type="checkbox"
          name={desc}
          onChange={(e) => {
            onCompleted(desc.text);
          }}
          style={{ width: 20, height: 20, borderRadius: 10, margin: 10 }}
        ></input>
        <div style={{ fontWeight: "bold", fontSize: "17px" }}>{desc.text}</div>
        <button
          className="myButton"
          style={{ zIndex: 3 }}
          onClick={() => {
            onDelete(desc);
          }}
        >
          del
        </button>
      </div>
      <style>
        {`
      .onHover{
        background:rgba(0,0,0,0.1);
        transition:0.6s background;
      }
      .onHover:hover{
        background:rgba(0,0,0,0.6);
        color:lightgrey;
      }
      .isComp:hover{
          background:red;
      }
      .myButton{
        background:linear-gradient(90deg,rgba(37, 116, 169, 1),rgba(52, 73, 94, 1));
        border-radius:10px;
        margin-right:10px;
        font-size:10px;
        outline:none;
        background-size:200%;
        color:white;
        background-position:0%;
        border:none;
        position:relative;
        padding:5px 10px;
        cursor:pointer;
        margin-left:auto;
        transition:1s background;
      }
      .myButton:hover{
        background-position:100%;
        
      }
      
      .myButton:before{
          content:"";
        display:block;
        position:absolute;
        left:0;
        top:0;  
        border-radius:10px;
        z-index:-1;
        width:30px;
        height:20px;
        background:black;
        opacity:0;
        transition:all 0.4s;
      }
      .myButton:hover:before{
          position:absolute;
          background:red;
          filter:blur(10px);
          opacity:1;
      }
      `}
      </style>
    </Fragment>
  );
};
