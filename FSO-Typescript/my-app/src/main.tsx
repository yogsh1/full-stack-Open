// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";

interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
};

/* const Welcome = ({name}: {name: string})=> {
  return <h1>Hello, {name}</h1>;
}; */

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Welcome name="Sarah" />,
);
