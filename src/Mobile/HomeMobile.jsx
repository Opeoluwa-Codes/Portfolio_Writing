import  {useState, useEffect} from 'react'
import {styled} from 'styled-components';
import Picture from '../Assets/JPG/Picture.jpeg'



const HomeMobile = () => {
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
          <RoleDisplay>Writer and Editor</RoleDisplay>
          <p>I create expert iGaming reviews covering sportsbooks, casinos, games, and providers, plus engaging content on travel, sports, gaming, and cryptocurrency—blending technical expertise with storytelling to inform and captivate diverse audiences.</p>
          <StyledAnchor href='#about'><button>MORE ABOUT ME</button></StyledAnchor>
        </Others>

    </HomeWrapper>
    
  );
};

export default HomeMobile;

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: black;

  box-sizing: border-box;

  padding: 0% 1.75% 1% 1.75%;

  position: relative;

  img{

    width: 180px;
    height: 180px;

    margin-bottom: 15px;

  }

  p{
    font-size: 16px;
    
    font-weight: 200;
    color: #cccccc;

    line-height: 32px;

    text-align: center;

    margin-bottom: 30px;

    width: 70%;
    
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

`

const Others = styled.div`

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 90%;

`

const BusinessName = styled.div` 

  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: space-between;

  font-size: 12px;
  font-family: Montserrat;

  letter-spacing: 3px;

  margin-bottom: 10%;

`

const NOne = styled.div`
    font-weight: 300;
    color: #cccccc;

`

const NTwo = styled.div`
  color: white;
  font-weight: 500;
`

const RoleDisplay = styled.div`
  width: fit-content;
  height: 25px;

  font-size: 22px;
  font-weight: 800;
  font-family: Montserrat;

  letter-spacing: 2px;

  color: white;
  
  display: flex;
  align-items: center;

  box-sizing: border-box;

  margin-bottom: 5px;
  
`

const StyledAnchor = styled.a`
  text-decoration: none;
`