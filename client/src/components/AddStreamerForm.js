import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./AddStreamerForm.css";

function AddStreamerForm({ onAddStreamer }) {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [platform, setPlatform] = useState({'other': false, 'twitch': false, 'youtube': false, 'tiktok': false, 'kick': false, 'rumble': false});
  const [description, setDescription] = useState("");

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('checked items: ', platform);

    const newStreamer = {
      // id: uuidv4(),
      // photo, // for future use
      name,
      platform,
      description,
      upvotes: 0,
      downvotes: 0,
    };
    console.log(newStreamer);

    try {
      const response = await axios.post(
        "http://51.20.70.220:5000/api/streamers",
        newStreamer,
      );
      console.log("Streamer added:", response.data);
      // Perform any additional actions after successful POST request
      // For example, you could update the streamers list or show a success message.
    } catch (error) {
      console.error("Error adding streamer:", error);
      // Handle the error as needed
      // For example, you could show an error message to the user.
    }
    onAddStreamer(newStreamer);
    console.log(newStreamer);
    setPhoto("");
    setName("");
    setPlatform({'other': false, 'twitch': false, 'youtube': false, 'tiktok': false, 'kick': false, 'rumble': false});
    setDescription("");
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
    console.log(platform);
  };

  const togglePlatform = (platformName) => {
    const updatedPlatform = platform;
    updatedPlatform[platformName] = !updatedPlatform[platformName];
    setPlatform(updatedPlatform);
  };

  return (
    <div className="add-streamer-row">
      <form className="form" onSubmit={handleSubmit}>
        <div className="inputs-container">
          <label >
            <div>Name:</div>
            <input
              type="text"
              className="select-container-solid"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div className="select-container">
            <div
              
              onClick={handleDropdown}
            >
              Select Platforms:
              {showDropdown ? (<span> ^ </span>) : (<span> v </span>)}
            </div>
          <label>
            <div>
              {showDropdown && (
                <div className="options">
                  <label className="container">
                    Other
                    <input type="checkbox" name='other' onClick={(e) => togglePlatform(e.target.name)}/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Twitch
                    <input type="checkbox" name='twitch' onClick={(e) => togglePlatform(e.target.name)} />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    YouTube
                    <input type="checkbox" name='youtube' onClick={(e) => togglePlatform(e.target.name)} />
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    TikTok
                    <input type="checkbox" name='tiktok' onClick={(e) => togglePlatform(e.target.name)}/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Kick
                    <input type="checkbox" name='kick' onClick={(e) => togglePlatform(e.target.name)}/>
                    <span className="checkmark"></span>
                  </label>
                  <label className="container">
                    Rumble
                    <input type="checkbox" name='rumble' onClick={(e) => togglePlatform(e.target.name)}/>
                    <span className="checkmark"></span>
                  </label>
                </div>
              )}
            </div>
          </label>
          </div>
          <label>
            <div>Description:</div>
            <textarea
              rows="4"
              cols="40"
              value={description}
              className="select-container-solid"
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>

        <span className="form-title">Upload profile picture</span>
        <p className="form-paragraph">File should be an image</p>
        <label
          onChange={(e) => setPhoto(e.target.files[0])}
          htmlFor="file-input"
          className="drop-container"
        >
          <input type="file" accept="image/*" required="" id="file-input" />
        </label>
        <button className="submit-button" type="submit">Add Streamer</button>
      </form>
    </div>
  );
}

export default AddStreamerForm;
