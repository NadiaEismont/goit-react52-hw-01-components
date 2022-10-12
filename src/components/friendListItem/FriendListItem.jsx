import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li key={id} className='item'>
      <span className={isOnline ? 'green' : 'red'}></span>
  <span class="status"></span>
  <img class="avatar" src={avatar} alt="User avatar" width="48" />
        < p class="name" > {name} </p>
</li>
    )
}


FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};