import React from "react";

const Hr = ({ color }) => {
  return (
    <hr>
      style=
      {{
        color: color,
        backgroundColor: color,
        height: 5
      }}
    </hr>
  );
};

export default Hr;
