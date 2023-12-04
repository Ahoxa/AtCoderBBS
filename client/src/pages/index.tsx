import { useState, useEffect } from "react";

function index() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    fetch("http://localhost:8080")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return <div>{message}</div>;
}

export default index;
