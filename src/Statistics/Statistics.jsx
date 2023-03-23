import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './Statistics.module.css';

const Statistics = ({ stat, total, positivePercentage }) => {
return (
<div className={style.statistics}>
<h2 className={style.statistics__title}>Statistics</h2>
<ul className={style.statistics__list}>
{Object.entries(stat).map(([key, value]) => {
return (
<li className={style.statistics__item} key={shortid.generate()}>
<span className={style.statistics__name}>{key}: </span>
<span>{value}</span>
</li>
);
})}
<li className={style.statistics__item}>
<span>Total: </span>
<span>{total}</span>
</li>
<li className={style.statistics__item}>
<span>Positive feedback: </span>
<span>{positivePercentage}%</span>
</li>
</ul>
</div>
);
};

Statistics.defaultProps = {
stat: { good: 0, neutral: 0, bad: 0 },
total: 0,
};

Statistics.propTypes = {
stat: PropTypes.object.isRequired,
total: PropTypes.number,
positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
