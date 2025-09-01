import styled from "styled-components";

import { useState, useEffect } from 'react';
import SearchResult from "./components/SearchResult/SearchResult";

export const DATA_URL = "http://localhost:9000";





const App = () => {


  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);



  useEffect(() => {

    const fetchFoodData = async () => {

      setLoading(true);

      try {

        const response = await fetch(DATA_URL);

        const json = await response.json();

        setData(json);
        setLoading(false);

      } catch (error) {

        setError("Error fetching data");

      }
    };

    fetchFoodData();
  }, []);




  if (error) return <div>{error}</div>
  if (loading) return <div>Loading...</div>

  // console.log(data);




  return <Container>

    <HeaderSection>


      <div className="toprow">

        <div className="logo">
          <img src="logo.svg" alt="" />
        </div>

        <div className="filtersearch">
          <input type="text" placeholder="Search Food...." />
        </div>

      </div>


      <div className="navbuttons">
        <button>All</button>
        <button>Breakfast</button>
        <button>Lunch</button>
        <button>Dinner</button>
      </div>
    </HeaderSection>

    <SearchResult data= {data} />

   
  </Container>;
};

export default App;

const Container = styled.div`

max-width: 100%;
`

const HeaderSection = styled.section`
  height: 140px;
  max-width: 100%;
  background-color: #323334;
  display: flex;
  flex-direction: column; /* now rows instead of one line */
  justify-content: center;
  padding: 50px;
  

  .toprow {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toprow .filtersearch input{
  
  height: 30px;
  width: 200px;
  padding: 5px;
  background-color: transparent;
  border: 1px solid red;
  color: white;
  
  }

  .toprow .searchbar input::placeholder {
  color: white; 
  opacity: 0.7; 
}

  .navbuttons {
    margin-top: 30px;
    display: flex;
    gap: 10px;
    justify-content: center;
    
    
  }

  .navbuttons button {
    height: 30px;
    width: 80px;
    background-color: #FF4343;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    
  }
`;



