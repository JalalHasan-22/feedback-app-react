import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header({ title }) {
  const headerStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95',
  };

  return (
    <header style={headerStyle}>
      <div className='container'>
        <Link
          to={{
            pathname: '/',
          }}
        >
          <h2>{title}</h2>
        </Link>
      </div>
    </header>
  );
}

// Default props values
Header.defaultProps = {
  title: 'Feedback App',
};

// Props types
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
