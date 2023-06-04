import styled from "styled-components";

export const NavStyled = styled.ul `
display:flex;
flex-direction: row;
justify-content: space-evenly;
list-style: none;

li{
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    padding: 0 15px;
    cursor: pointer;
    a{
        padding-bottom: 5px;
    }

    & :hover{
        color:#457b9d;
        border-bottom: 4px solid #457b9d;

    }
}

`;