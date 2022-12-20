import React from 'react';
import axios from 'axios';
import './App.css';
import NavBox from './Components/NavBox';
import Routes from './Components/Routes';

const BASE_URL = "https://microblog-zgeb.onrender.com";
class App extends React.Component {

  async componentDidMount() {
    let wake = await axios.get(`${BASE_URL}/ping`);
    if (wake.status === 200) {
      console.log(wake.data);
    } else {
      console.log('backend did not wake properly');
    }
  }
  render() {
    return (
      <div className="container">
        <NavBox />
        <Routes />
      </div>
    )
  }
}

export default App;
