import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Card = styled.div`
    
    background-color: ${({ theme }) => theme.card};
    padding:30px;
    border-radius: 12px;
    width: 300px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Count = styled.h2`

        font-size: 3rem;
        margin: 20px 0;
        color: ${({ theme }) => theme.primary};


`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`

    padding: 10px 16px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    transition: all 0.2s ease;

    &:hover {
        opacity: 0.85;
    }


`;

function CounterCard (){
    const {state, dispatch } =useContext(AppContext);
    return (
        <Card>
            <h3>Global counter</h3>
            <Count>
                {state.count}
            </Count>
        <ButtonGroup>
            <Button onClick={()=>  dispatch({type:'Decrement'})}> -</Button>
            <Button onClick={()=>  dispatch({type:'Increment'})}> +</Button>

        </ButtonGroup>
        </Card>
    )


 }

 export default CounterCard;