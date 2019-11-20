import styled from "styled-components";


const StyledButton = styled.button`
text-transform: capitalize;
font-size: 1.4em;
background: transparent;
border: 0.05em solid var(--lightBlue);
color: var(--lightBlue);
border-radius: 0.5em;
padding: 0.2em 0.5em;
cursor: pointer;
margin: 0.2em 0.5em 0.2em 0;
transition: all 0.5s ease-in-out;

 &:hover{
  background: var(--lightBlue);
  color: var(--mainBlue)
 }

 &:focus{
  outline: none
 }
`;

export const NavWrapper = styled.nav`
 background: var(--mainBlue);
 .nav-link{
  color: var(--mainWhite);
  font-size: 1.3em;
  text-transform: capitalize
 }
`;

export default StyledButton;