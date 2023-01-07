import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "30px" }}>
      {props.alert && (
        <div class={`alert alert-${props.alert.type}`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.message}
        </div>
      )}
    </div>
  );
}

export default Alert;
