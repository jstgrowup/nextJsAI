"use client";
const error = (error: any) => {
  // return <div>there was an error...</div>;
  return <div>{error.error.message}</div>;
};
export default error;
