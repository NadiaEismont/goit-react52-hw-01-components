import styled from '@emotion/styled';

export const Tatistics = styled.section`
  width: 350px;
  align-items: center;
  display: block;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgb(0 0 0 / 75%);
`;
export const StatList = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border-right: 1px solid #dddddd;

  &:last-child {
    border-right: none;
  }
`;
export const Title = styled.h2`
  align-items: center;
  border-right: 1px solid #dddddd;
`;
