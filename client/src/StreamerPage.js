import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CtaBtn from "./components/CtaBtn";
import "./StreamerPage.css";

const StreamerPage = () => {
  const params = useParams();
  const [streamer, setStreamer] = useState(null);

  useEffect(() => {
    const fetchStreamer = async () => {
      const response = await axios.get(
        `http://51.20.70.220:5000/api/streamer/${params.id}`
      );
      setStreamer(response.data);
      document.title = `Streamer ${response.data.name}`;
    };
    fetchStreamer();
  }, []);

  return (
    <>
      {streamer ? (
        <div className="grid-for-streamer-page">
          <div className="title-row-streamer-page">
            <CtaBtn text="Go back" link="/" />
          </div>
          <div className="title-row-streamer-page title">
            Streamer {streamer.name}
          </div>
          <div className="photo-container">
            <img
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/asmongold-profile_image-f7ddcbd0332f5d28-300x300.png"
              alt={streamer.name}
              width={500}
            />
          </div>
          <div className="content-grid-container">
            <div className="content-container border-dashed-right">
              <h2>Platforms:</h2>
              <ul>
                {Object.keys(streamer.platform).map((key) => {
                  if (streamer.platform[key] === true) {
                    return <li key={key}>{key}</li>;
                  }
                })}
              </ul>
            </div>
            <div className="content-container border-dashed-left">
                <h2>Description:</h2>
              <p>{streamer.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Streamer not found</div>
      )}
    </>
  );
};

export default StreamerPage;
