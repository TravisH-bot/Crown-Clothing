import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
  @media (max-width: 960px) {
    width: 300px;
  }

  h2 {
    margin: 10px 0;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    justify-content: space-evenly;
  }
`;
