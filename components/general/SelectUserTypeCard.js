import React from "react";

const classes = {
  wrapper: {
    width: "fit-content",
    marginTop: "16px",
    marginBottom: "16px",
  },
  cardBodyCustom: {
    fontSize: "54px",
  },
};

const Selectusertypecard = ({ text, icon, isSelected, itemSelectedIndex, _hanldeSelectedUserType }) => {
  return (
    <div className="cursor-pointer" style={classes.wrapper} onClick={() => _hanldeSelectedUserType(itemSelectedIndex)}>
      <div className={`card border ${isSelected ? "border-primary" : "border-secondary"} bg-light m-1`}>
        <div className="card-body" style={classes.cardBodyCustom}>
          <i class={`${icon} ri-lg ${isSelected ? "text-primary" : "text-muted"}`}></i>
        </div>
      </div>
      <div className="text-center">
        <h4 className={`p-0 m-0 ${isSelected ? "text-primary" : "text-muted"}`}>{text}</h4>
      </div>
    </div>
  );
};

export default Selectusertypecard;
