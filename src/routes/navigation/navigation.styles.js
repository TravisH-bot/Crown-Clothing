import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  font-size: 25px;
  @media (max-width: 960px) {
    font-size: 20px;
  }
  @media (max-width: 552px) {
    font-size: 15px;
  }
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;
`;
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 5px 5px;
  cursor: pointer;
`;
