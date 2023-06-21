import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  background-color: #fff;
`;

export const WrapperMain = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 3px solid grey;
  padding: 10px 0;
  img {
    width: 250px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 8px;
  font-size: 34px;
  font-weight: 700;
  color: black;
`;

export const Overview = styled.h2`
  margin-bottom: 8px;
  font-size: 28px;
  font-weight: 700;
  color: black;
`;

export const Genres = styled.h3`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 700;
  color: black;
`;

export const Additional = styled.h4`
  font-weight: 600;
  color: black;
`;

export const DataText = styled.p`
  margin-bottom: 20px;
  color: black;
`;

export const ListOfAdditional = styled.ul`
  li {
    margin-left: 30px;
    margin-top: 8px;
    font-weight: 600;
  }
`;

export const WrapperAdditional = styled.div`
  padding: 10px 0;
  border-bottom: 3px solid grey;
  img {
    outline: 1px solid red;
  }
`;
