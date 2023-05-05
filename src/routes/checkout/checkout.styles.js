import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media (max-width: 742px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 95%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media (max-width: 500px) {
    font-size: 12px;
    font-weight: bold;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 25%;

  &:last-child {
    width: 18%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
  @media (max-width: 742px) {
    font-size: 30px;
  }
  @media (max-width: 500px) {
    font-size: 25px;
  }
`;
