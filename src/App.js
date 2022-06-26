import Card from "./MyComponents/Card";
import Navbar from "./MyComponents/Navbar";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CardDetail from "./MyComponents/CardDetail";


function App() {


  const [data, setData] = useState([]);
  const [rocketData, setRocketData] = useState([]);
  const [category, setCategory] = useState('');

  const getData = async () => {
    const url = `https://api.spacexdata.com/v5/launches/${category}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);

    const rocketUrl = `https://api.spacexdata.com/v4/rockets`;
    const response2 = await fetch(rocketUrl);
    const data2 = await response2.json();
    setRocketData(data2);

    // Method 2
    // Promise.all([
    //   fetch(`https://api.spacexdata.com/v5/launches/${category}`).then(data => data.json()),
    //   fetch(`https://api.spacexdata.com/v4/rockets`).then(data => data.json()),
    // ]).then(allResponses => {
    //   const alldata = allResponses[0]
    //   const rocketData = allResponses[1]
    //   console.log(alldata)    
    //   setData(data);
    //   setRocketData(rocketData);     

    // })

  }

  useEffect(() => {
    getData();
  }, [category])


  return (
    <>
      <BrowserRouter>
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<Card key='all' data={data} />} />
          <Route path="/upcoming" element={<Card key='upcoming' data={data} />} />
          <Route path="/past" element={<Card key='past' data={data} />} />
          <Route path='/launch/:launch_id' element={<CardDetail data={data} rocketData={rocketData} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;






