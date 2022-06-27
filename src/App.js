import Card from "./MyComponents/Card";
import Navbar from "./MyComponents/Navbar";
import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import CardDetail from "./MyComponents/CardDetail";


function App() {

  const [data, setData] = useState([]);
  const [rocketData, setRocketData] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const url = `https://api.spacexdata.com/v5/launches/${category}`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);

    const rocketUrl = `https://api.spacexdata.com/v4/rockets`;
    const response2 = await fetch(rocketUrl);
    const data2 = await response2.json();
    setRocketData(data2);

  }

  useEffect(() => {
    getData();
  }, [category])


  return (
    <>
      <Router>
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<Card key='all' data={data} loading={loading} />} />
          <Route path="/upcoming" element={<Card key='upcoming' data={data} loading={loading} />} />
          <Route path="/past" element={<Card key='past' data={data} loading={loading} />} />
          <Route path='/launch/:launch_id' element={<CardDetail data={data} rocketData={rocketData} />} />
          <Route path="*" element={<><h3 className='text-center my-3'>Page Not Found</h3></>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;






