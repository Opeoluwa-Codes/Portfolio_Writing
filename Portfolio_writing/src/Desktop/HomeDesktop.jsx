import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {styled} from 'styled-components';
import Picture from '../Assets/JPG/Picture.jpeg'


const HomeDesktop = () => {
  const name = "OPEOLUWA"
  const action = "WRITES"
  const [displayedName, setDisplayedName] = useState("");
  const [displayedAction, setDisplayedAction] = useState("");
  const [currentIndexOne, setCurrentIndexOne] = useState(0);
  const [currentIndexTwo, setCurrentIndexTwo] = useState(0);

  useEffect(() =>{

    const interval = setInterval(() =>{

      if (currentIndexOne < name.length){
        setDisplayedName((prev) => prev + name[currentIndexOne]);
        setCurrentIndexOne((prev) => prev + 1)
      }else{
        clearInterval(interval);
      }
      
    }, 100); 

    return () => clearInterval(interval);
    
  }, [currentIndexOne, name]);

  useEffect(() =>{

    const interval = setInterval(() =>{

      if (currentIndexTwo < action.length){
        setDisplayedAction((prev) => prev + action[currentIndexTwo]);
        setCurrentIndexTwo((prev) => prev + 1)
      }else{
        clearInterval(interval);
      }
      
    }, 1000); 

    return () => clearInterval(interval);
    
  }, [currentIndexTwo, action]);

  return (
    <HomeWrapper>

      <LeftSide>
        <BusinessName>

          <NOne>
            {displayedName}
          </NOne>
          <NTwo>
            {displayedAction}
          </NTwo>

        </BusinessName>

        <Others>
          <img src={Picture} alt="Opeoluwa" />
          <RoleDisplay>Ghostwriter and Editor</RoleDisplay>
          <p>As a lead iGaming specialist, I craft authentic, AI-free casino and sportsbook reviews. I deliver trustworthy evaluations that help readers navigate gambling platforms with confidence, backed by genuine industry knowledge and firsthand experience.</p>
          <Links to='/about'><button>MORE ABOUT ME</button></Links>
        </Others>
      </LeftSide>
      
      <RightSide>

        <SecondBox>

            <img src={Picture} alt="Opeoluwa" />

        </SecondBox>
        
      </RightSide>

    </HomeWrapper>
    
  );
};

export default HomeDesktop;

const HomeWrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 100vh;

  background-color: black;

`
const LeftSide = styled.div`

  width: 70%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: start;

  box-sizing: border-box;
  padding: 5%;

  position: relative;

  img{

    width: 150px;
    height: 200px;

    margin-bottom: 15px;

    @media (min-width: 616px) {
    display: none;
    }

  }

  p{

    font-size: 16px;
    
    font-weight: 200;
    color: #cccccc;

    line-height: 32px;

    text-align: left;

    margin-bottom: 40px;

    width: 70%;

    @media (max-width: 615px) {
      text-align: center;

      margin-bottom: 30px;
    }
    
  }

  button{

    width: fit-content;

    border: 1px white solid;

    background-color: transparent;
    color: white;

    font-size: 14px;
    font-weight: 600;
    font-family: Arial;

    box-sizing: border-box;
    padding: 10px;

    transition: all 1s ease-in-out;

  }

  button:hover{
    
    border-color: none;
    background-color: #cccccc;
    color: black;

    cursor: pointer;
  
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  }

  @media (max-width: 808px) {
    width: 68%;
  }

  @media (max-width: 793px) {
    width: 65%;
  }


  @media (max-width: 746px) {
    width: 65%;
  }

  @media (max-width: 733px) {
    width: 70%;
  }

  @media (max-width: 695px) {
    width: 65%;
  }

  @media (max-width: 670px) {
    width: 68%;
  }

  @media (max-width: 610px) {
    width: 67%;
  }

  @media (max-width: 615px) {
    width: 100%;

    padding: 1.7%;
  }
`

const Others = styled.div`
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 615px) {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

`


const BusinessName = styled.div`
  
  position: fixed;
  top: 2%;

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  font-size: 14px;
  font-family: Montserrat;

  letter-spacing: 5px;

`

const NOne = styled.div`
    font-weight: 300;
    color: #cccccc;
`

const NTwo = styled.div`
  color: white;
  font-weight: 500;
`

const RightSide = styled.div`
  width: 30%;
  height: 100vh;
  background-color: black;

  position: relative;

  @media (max-width: 808px) {
    width: 32%;
  }

  @media (max-width: 793px) {
    width: 35%;
  }

  @media (max-width: 746px) {
    width: 35%;
  }

  @media (max-width: 733px) {
    width: 30%;
  }

  @media (max-width: 695px) {
    width: 35%;
  }

  @media (max-width: 670px) {
    width: 32%;
  }

  @media (max-width: 610px) {
    width: 33%;
  }

  @media (max-width: 615px) {
    width: 0%;
    border-left: none;
  }

`

const RoleDisplay = styled.div`
  width: fit-content;
  height: 25px;

  font-size: 50px;
  font-weight: 800;
  font-family: Montserrat;

  letter-spacing: 2px;

  color: white;
  
  display: flex;
  align-items: center;

  box-sizing: border-box;

  margin-bottom: 3%;

  @media (max-width: 893px) {
    font-size: 40px;
  }

  @media (max-width: 796px) {
    font-size: 35px;
  }

  @media (max-width: 785px) {
    font-size: 30px;
  }

  @media (max-width: 705px) {
    font-size: 25px;
  }

  @media (max-width: 615px) {
    margin-bottom: 5px;
  }

`


const SecondBox = styled.div`
  
  width: 180px;
  height: 230px;

  background-color: black;

  position: absolute;
  top: 50%;
  left: -10%;
  transform: translateY(-50%);

  img{

  width: inherit;
  height: inherit;

  transition: all 1.5s ease-in-out;

    &:hover{
      transform: scale(1.5);
    }

  }

  @media (max-width: 995px) {
    width: 200px;
    height: 250px;
  }

  @media (max-width: 894px) {
    width: 150px;
    height: 200px;
  }

  @media (max-width: 615px) {
    display: none;
  }

`
const Links = styled(Link)`
  text-decoration: none
`

