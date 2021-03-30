import React, { useState } from "react"
import './ProfilePic.css'

export default () => {

  const [picture, setPicture] = useState(null)
  const [imgData, setImgData] = useState(null)
  const onChangePicture = e => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files)
      setPicture(e.target.files[0])
      const reader = new FileReader()
      reader.addEventListener("load", () => {
        setImgData(reader.result)
      })
      reader.readAsDataURL(e.target.files[0])
    }
  }
  return (
          <form className="myForm">
              <div className="register_profile_image">
                <input id="profilePic" type="file" onChange={onChangePicture} />
              </div>
              <div className="previewProfilePic">
                <img className="playerProfilePic_home_tile" src={imgData} width={100} height={100} />
              </div>
          </form>
  );
};
