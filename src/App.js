import React from "react";
import TodoCont from "./Components/todoCont";
class App extends React.Component {
  state = { userInput: "", toDoList: [] };

  onDelete(desc) {
    this.setState((state) => {
      return {
        toDoList: state.toDoList.filter((element) => element !== desc),
      };
    });
  }
  onCompleted(desc) {
    this.setState((state) => {
      return {
        toDoList: state.toDoList.map((element) => {
          return element.text === desc
            ? {
                isCompleted: !element.isCompleted,
                text: element.text,
              }
            : element;
        }),
      };
    });
  }
  render() {
    const { userInput, toDoList } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <button
          style={{ width: 100, height: 40, outline: "none", border: "none" }}
          onClick={() => {
            this.setState((state) => {
              if (state.userInput) {
                return {
                  toDoList: state.toDoList
                    .filter((element) => element !== state.userInput)
                    .concat([{ text: state.userInput, isCompleted: false }]),
                  userInput: "",
                };
              }
              return state;
            });
            console.log(toDoList);
          }}
        >
          Add To Do
        </button>
        <input
          value={userInput}
          onChange={(e) => {
            const { value } = e.target;
            this.setState({ userInput: value });
          }}
          style={{
            width: 200,
            padding: 10,
            background: "rgba(0,0,0,0.1)",
            height: 40,
            margin: 10,
            outline: "none",
            border: "none",
          }}
        ></input>
        <TodoCont
          onDelete={(desc) => this.onDelete(desc)}
          toDoList={toDoList}
          onCompleted={(desc) => this.onCompleted(desc)}
        ></TodoCont>
      </div>
    );
  }
}

export default App;
