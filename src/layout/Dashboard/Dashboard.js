import React, { useState } from "react";
import AddRemoveButton from "../../components/AddRemoveButton";
import Header from "../Header/Header.js";
function Dashboard() {
  const [count, setCount] = useState(0);
  const getCount = (count) => {
    setCount(count);
  };
  return (
    <div>
      <Header count={count}></Header>
      <AddRemoveButton getCount={getCount} />
    </div>
  );
}

export default Dashboard;
