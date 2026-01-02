import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Wrapper = styled.div`
    margin-top: 40px;
    padding: 20px;
    background-color: ${({theme})=>theme.card};
    border-radius: 12px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Info = styled.p`
  font-size: 1.1rem;
`; 

function Dashboard(){
    const {state} = useContext(AppContext);

    return(
        <Wrapper>
            <Title>Dashboard</Title>
            <Info>Current count: {state.count}</Info>
            <Info>User:{state.username}</Info>
            <Info>Status: {state.isLoggedIn? 'Logged In' : 'Guest'}</Info>
        </Wrapper>
    )
}

export default Dashboard;