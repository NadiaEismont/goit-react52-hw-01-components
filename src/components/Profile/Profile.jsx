import PropTypes from 'prop-types';
import {ProfileDiv, Description, Avatar, Name, Tag, Location, Stats, Item, Label, Quantity} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
    <ProfileDiv>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
                />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item >
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item >
        <Item >
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item >
        <Item >
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item >
      </Stats>
    </ProfileDiv>
  );
}

Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};