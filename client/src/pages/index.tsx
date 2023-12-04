import { useState, useEffect } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";

function index() {
  const [message, setMessage] = useState("Loading");

  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div>
      <div>{message}</div>
      <Button variant="outline">Click Me</Button>
    </div>
  );
}

export default index;
