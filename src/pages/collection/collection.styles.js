import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.div`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-column: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & > div {
    margrin-bottom: 30px;
  }
`;
