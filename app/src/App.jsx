import styled from "styled-components";


const App = () => {
  return <Container>
    <HeaderSection>


    <div className="toprow">

       <div className="logo">
        <img src="logo.svg" alt="" />
      </div>

      <div className="searchbar">
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

    <BodySection>
      <div className="foodsection">
        <div className="foodcart"></div>
      </div>
    </BodySection>
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

  .toprow .searchbar input{
  
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
    
  }
`;

const BodySection = styled.section`

 height: calc(100vh - 140px);
  background: url("/bg.png") no-repeat center center;
  background-size: cover;
  width: 100%;



`;

