import React from "react";

function ProfilePic(props) {
  return <div className="pp"><img id="pp-img" src={props.src} alt="profile picture"/></div>;
}

export default ProfilePic;
