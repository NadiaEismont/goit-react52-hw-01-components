import styled from '@emotion/styled';


export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;

  border: 1px solid #e9eef3;
  border-radius: 5px;
  box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
`

export const Description  = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #000000;
`

export const Avatar  = styled.img`
  border: 3px solid #e9eef3;
  border-radius: 50%;
  width: 145px;
  margin-top: 30px;
  margin-bottom: 30px;
`

export const Name  = styled.p`
  font-weight: 700;
  margin-bottom: 10px;
`

export const Tag  = styled.p`
  margin-bottom: 10px;
  color: #828385;
`

export const Location = styled.p`
  margin-bottom: 30px;
  color: #828385;
`

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  border-top: 1px solid #dddddd;
  background-color: #e9eef3;
   padding: 0;
`

export const Item  = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 15px;

  border-right: 1px solid #dddddd;
  :last-child {
  border-right: none;
}
`



export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 5px;
`

export const Quantity  = styled.span`
  font-weight: 700;
`