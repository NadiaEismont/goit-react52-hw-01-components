import PropTypes from 'prop-types';
import { ChangeColor, Item, Name } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <Item key={id}>
      <ChangeColor isOnline={isOnline}></ChangeColor>
      <span className="status"></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name> {name} </Name>
    </Item>
  );
};

FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
