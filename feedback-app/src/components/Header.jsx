import PropTypes from 'prop-types';

function Header({ title }) {
  const headerStyle = {
    backgroundColor: 'rgba(0,0,0,0.4)',
    color: '#ff6a95',
  };

  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{title}</h2>
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
