import PropTypes from 'prop-types';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.object])
    .isRequired,
  pageProps: PropTypes.any,
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
