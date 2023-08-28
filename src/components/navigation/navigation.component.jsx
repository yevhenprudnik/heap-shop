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
          <Link className="nav-link" to="/auth">
            Authorize
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
