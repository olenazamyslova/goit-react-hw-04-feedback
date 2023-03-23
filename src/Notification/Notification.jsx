import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './Notification.module.css';

const Notification = ({ message }) => {
return (
<h2 key={shortid.generate()} className={style.notification}>
{message}
</h2>
);
};

Notification.defaultProps = {
message: ' ',
};

Notification.propTypes = {
message: PropTypes.string,
};

export default Notification;
