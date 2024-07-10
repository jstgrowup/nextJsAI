"use client";
import React from "react";

const Error = (error: any) => {
  console.log("error:", error);
  return <div>{error.error.message}</div>;
};

export default Error;
