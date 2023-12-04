import { useState, useEffect } from "react";
import axios from "axios";

function index() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log("Error: ", err));
  }, []);

  return <div>{message}</div>;
}

export default index;
