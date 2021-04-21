import React from "react";

import "./HeaderOption.css";
import {Avatar} from "@material-ui/core";
import {useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";

function HeaderOption({Icon, title, avatar, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div>
      <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
        {avatar && (
          <Avatar src={user?.photoURL} className="headerOption__icon">
            {user?.email[0] || "Li"}
          </Avatar>
        )}
        <h3 className="headerOption__title">{title}</h3>
      </div>
    </div>
  );
}

export default HeaderOption;
