import React from "react";
import "./User.scss";

interface IProps {
  name: string;
  role: string;
  img: string;
  className?: string;
}

export const User: React.FC<IProps> = ({ name, role, img, className = "" }) => {
  return (
    <div className={"user" + " " + className}>
      <div className="user-img">
        <img src={img} alt="user img" />
      </div>
      <div className="user-content">
        <div className="user-name">{name}</div>
        <div className="user-role">{role}</div>
      </div>
    </div>
  );
};
