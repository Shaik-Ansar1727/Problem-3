import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { ThemeContext } from "../Context/ThemeContext";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.card};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    padding: 20px;

`


const Brand = styled.h2`
  color: ${({ theme }) => theme.primary};
`

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const Badge = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
`

const Button = styled.button`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
`


function Navbar() {
    const { toggleTheme } = useContext(ThemeContext);
    const { state } = useContext(AppContext);

    return (
        <Nav>
            <Brand> State Mananger</Brand>
            <Right>
                <Badge>{state.isLoggedIn ? state.username : 'Guest'}</Badge>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
            </Right>

        </Nav>
    )
}

export default Navbar;