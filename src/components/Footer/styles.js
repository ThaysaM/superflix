import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 3px solid var(--main-color);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 42px;
  padding-bottom: 25px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
