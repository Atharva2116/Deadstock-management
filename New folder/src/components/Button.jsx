import PropTypes from 'prop-types';
import '../../public/css/button.css';

const Button = ({ name, icon, onClick }) => {
  return (
    <button className="btn btn-primary flex items-center" onClick={onClick}>
     
      {icon && <i className={`mr-2 ${icon}`}></i>}
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,       
  onClick: PropTypes.func,      
};

Button.defaultProps = {
  onClick: () => {},          
};

export default Button;
