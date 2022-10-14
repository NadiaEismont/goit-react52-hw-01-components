import PropTypes from 'prop-types';
import { TransactionHistoryTable, Thead, Tr } from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryTable>
            <Thead>
                <Tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </Tr>
            </Thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                <Tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                </Tr>

                    ))}
            </tbody>
        </TransactionHistoryTable>
    );
}

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};