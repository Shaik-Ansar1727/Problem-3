import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*
{
    margin:0;
    padding:0;
    box-sizing:border-box;

 }
    body{
    background-color:${({ theme }) => theme.body};
    color:${({ theme }) => theme.text};
    font-family: system-ui, sans-serif;
    transition: all 0.3s ease;
    }
`;
