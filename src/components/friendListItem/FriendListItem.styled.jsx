import styled from '@emotion/styled';

export const ChangeColor = styled.span`
 background-color: ${props => {props.isOnline ? rgb(10, 99, 10) : rgb(161, 54, 54) }}
  border-radius: 50%;
  size: 10px;
  width: 10px;
  height: 10px;
  display: block;
`
//  .section {
//   width: 350px;
//   align-items: center;
//   display: block;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   border: 1px solid #e9eef3;
//   border-radius: 5px;
//   box-shadow: 3px 3px 6px 0px rgb(0 0 0 / 75%);
// }
export const Item = styled.li`
  padding: 10px;
  list-style: none;
  margin: 0;
`
export const Name= styled.p`
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
  padding: 10px 5px;
   list-style: none;
  margin: 0;
`