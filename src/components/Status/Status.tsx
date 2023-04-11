import React from "react";
import "./Status.scss";

interface IProps {
  active: boolean;
}
export const Status: React.FC<IProps> = ({ active }) => {
  const className = active
    ? "status status--active"
    : "status status--inactive";
  const text = active ? "Active" : "Inactive";

  return <div className={className}>{text}</div>;
};
