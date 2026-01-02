import React from 'react'
import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ToggleButton = styled.button`
        padding: 10px 20px;
        background-color: ${( {theme} ) =>  theme.primary };
        color: ${({theme}) => theme.text};
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
        transition: all 0.3s ease;

        &:hover {
            transform: scale(1.05);
            opacity: 0.9;
        }
`;

const ThemeToggle = () => {
    const {toggleTheme, themeMode} = useContext(ThemeContext);
    return (
        <ToggleButton onClick={toggleTheme} >
            Switch to {themeMode === 'light'? 'Dark':'Light'} Mode
        </ToggleButton>
    )
}

export default ThemeToggle
