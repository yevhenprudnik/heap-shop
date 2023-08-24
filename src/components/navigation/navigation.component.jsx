import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/">
          <Logo className="logo-container" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/test-1">
            TEST 1
          </Link>
          <Link className="nav-link" to="/test-2">
            TEST 2
          </Link>
          <Link className="nav-link" to="/test-3">
            TEST 3
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
