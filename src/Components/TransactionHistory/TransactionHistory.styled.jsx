import styled from '@emotion/styled';
export const TransactionHistoryTable = styled.table`
  width: 100%;
`;

export const Thead = styled.thead`
  background-color: #2a99f3;
  color: #ffffff;
`;

export const Tr = styled.tr`
  text-align: center;
  height: 45px;
  :nth-of-type(2n) {
    background-color: #f1f1f1;
  }
`;
