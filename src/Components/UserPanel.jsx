import styled from "styled-components";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

const Panel = styled.div`
  margin-top: 30px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.card};
`;
const Button = styled.button`
  margin-top: 10px;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-weight: bold;

`;

function UsePanel() {
    const { state, dispatch } = useContext(AppContext);

    const LoginHandler = () => {
        dispatch({ type: 'LOGIN', payload: 'Ansar' })
    }
    const LogoutHnadler = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <Panel>
            {state.isLoggedIn ? (<>
                <h3>Welcome, {state.username}</h3>
                <Button onClick={LogoutHnadler}>Logout</Button>

            </>) : (
                <>
                    <h3>You are not logged in</h3>
                    <Button onClick={LoginHandler}>Login</Button>
                </>
            )}


        </Panel>
    )

}

export default UsePanel;