"use client";
import React, { useState } from "react";

const ClientPage = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button className="btn btn-primary" onClick={() => setcount(count + 1)}>
        increase
      </button>
    </div>
  );
};

export default ClientPage;
