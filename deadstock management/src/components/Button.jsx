
import PropTypes from 'prop-types';
import '../../public/css/button.css';

const Button = ({ name }) => {
  return (
    <button className="btn btn-primary">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
