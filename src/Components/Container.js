import React from "react";

export const Container = (props) => {
  return (
    <div className="container mx-auto grid md:grid-cols-3 grid-cols-2">
      {props.children}
    </div>
  );
};
