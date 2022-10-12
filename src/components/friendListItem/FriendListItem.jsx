import PropTypes from 'prop-types';

export const FriendListItem = ({ x, name, isOnline, id }) => {
    return (
        <li key={id} className={style.item}>
      <span className={isOnline ? style.green : style.red}></span>
  <span class="status"></span>
  <img class="avatar" src={x} alt="User avatar" width="48" />
        < p class="name" > {name} </p>
</li>
    )
}


FriendListItem.prototype = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};