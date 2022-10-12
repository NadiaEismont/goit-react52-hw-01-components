import { FriendListItem } from 'components/friendListItem/FriendListItem';
import PropTypes from 'prop-types';
export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(({ avatar, name, isOnline, id }) =>
            (
                <FriendListItem avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                    id={id} />
            ))
            }
        </ul>
    );
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};