import { useState, useEffect } from 'react';
import axios from 'axios';
import StreamerList from './components/StreamerList';
import AddStreamerForm from './components/AddStreamerForm';
import './Home.css';

const Home = () => {
const [streamers, setStreamers] = useState([]);

  useEffect(() => {
    fetchStreamers();
    document.title = `Streamer Spotlight`;
  }, []);

  const addStreamer = (newStreamer) => {
    fetchStreamers();
  };

  const fetchStreamers = async () => {
    try {
      const response = await axios.get('http://51.20.70.220:5000/api/streamers');
      setStreamers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='main-grid-layout'>
      <h1 className='title-row'>Streamers</h1>
      <StreamerList streamers={streamers} />
      <h2 className='title-row'>Add New Streamer</h2>
      <AddStreamerForm onAddStreamer={addStreamer} />
    </div>
  );
};

export default Home;