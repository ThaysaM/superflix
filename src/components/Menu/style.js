import styled from 'styled-components';
import Button from  './components/ButtonLink/index';

export const LogoImage = styled.img`
  max-width: 180px;

  @media (max-width: 800px) {
    max-width: 105px;
  }

`;

export const MenuWrapper = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--black);
  border-bottom: 3px solid var(--main-color);

  @media (max-width: 800px) {
    height: 40px;
    justify-content: center;
  }
`;

export const ButtonLink = styled(Button)`
border: 1px solid var(--main-color);
border-radius: 4px;
color: var(--white);
font-size: 16px;
font-weight: bold;
padding: 16px 24px;
text-decoration: none;
transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  @media (max-width: 800px) {
    background-color: var(--main-color);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white);
    left: 0;
    position: fixed;
    right: 0;
    outline: 0;
    text-align: center;
  }

`;
 