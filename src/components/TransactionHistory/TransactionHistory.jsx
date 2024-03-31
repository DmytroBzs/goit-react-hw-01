import clsx from 'clsx';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tableRow}>
          <th className={css.tableItem}>Type</th>
          <th className={css.tableItem}>Amount</th>
          <th className={css.tableItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item, index) => {
          const greyCard = clsx(css.tableRow, { [css.even]: index % 2 === 0 });
          return (
            <tr key={item.id} className={greyCard}>
              <td className={css.tableItem}>{item.type}</td>
              <td className={css.tableItem}>{item.amount}</td>
              <td className={css.tableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
