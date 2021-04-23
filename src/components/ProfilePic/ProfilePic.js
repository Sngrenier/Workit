import React, { useState} from "react"
import './ProfilePic.css'






export default (props) => {

  const [picture, setPicture] = useState(null)
  const [imgData, setImgData] = useState(null)
  const [picName, setPicName] = useState('')

//save information in DB for pictures it need to be AmazonS3 because the files are too large
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
              

              <div className="image-upload">
              <label for="file-input">
              <img src="https://img.icons8.com/ios/20/000000/plus--v1.png"/>
              </label>
              <input 
              id="file-input" 
              type="file" 
              onChange={onChangePicture} 
              />
              </div>

              <div className="previewProfilePic">
                <img className="playerProfilePic_home_tile" src={imgData} width={100} height={100} />
              </div>
          </form>
  );
};

