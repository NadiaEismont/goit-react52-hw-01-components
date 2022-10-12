import PropTypes from 'prop-types';
import { Tatistics, StatList, Item, Title } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Tatistics>
      {title && <Title>{title}</Title>}
      <StatList >
        {stats.map(({ label, percentage, id }) => (
          <Item key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Tatistics>
  );
};

Statistics.prototype = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};