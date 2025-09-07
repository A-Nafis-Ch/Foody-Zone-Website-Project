import styled from "styled-components";
import { DATA_URL } from "../../App";


const SearchResult = ({ data }) => {
    return (
        <BodySection>

            
                <div className="foodsection">

                

                    {data?.map((items) => {

                        return (
                            <div key={items.name} className="foodcart">
                                <div className="foodImage">
                                    <img src={DATA_URL + items.image} alt={items.name} />
                                </div>

                                <div className="cartItems">

                                    <div className="foodName">
                                        <h2>{items.name}</h2>
                                        <p>{items.text}</p>
                                    </div>

                                    <div className="foodPrice">
                                        <button>${items.price.toFixed(2)}</button>
                                    </div>

                                </div>


                            </div>);


                    })

                    

                    }

                   

                </div>
            

        </BodySection>
    )
}

export default SearchResult


const BodySection = styled.section`

 height: calc(100vh - 140px);
  background: url("/bg.png") no-repeat center center;
  background-size: cover;
  width: 100%;
  font-family: 'Poppins', sans-serif;

  .foodsection{
  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding-top: 30px; 
    gap: 20px;
    padding: 50px;
    }

  .foodcart{
  
  color:white;
  height:120px;
  width:280px;
  border: 1px solid gray;
  display:flex;
  background-color: rgba(75, 72, 72, 0.5);
  backdrop-filter: blur(2px); 
  border-radius: 20px;
  padding: 5px;
  


  
  
  }

  .foodcart .cartItems .foodName h2{
  
  font-size: 16px;
  margin-top: 8px;
  font-weight: 800;
  }

.foodcart .cartItems .foodName p{
  
  font-size: 12px;
  margin-top: 4px;
  
  }

  .foodcart img{
  height: 100px;
  widthL 100px;
  border-radius: 100%;
  }

  .cartItems{
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:end;
  padding-bottom: 5px;
  padding-right: 2px;
  
  }
 

  .foodPrice button{
  
  height: 20px;
    width: 50px;
    background-color: #FF4343;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }




`;
