import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

export default function MarketingNav() {
  return (
    <header className="marketing-nav">
      <div className="container marketing-nav__inner">
        <Link to="/" className="unstyled-link">
          <Logo />
        </Link>

        <nav className="marketing-nav__links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup" className="button button--primary">Get started</NavLink>
        </nav>
      </div>
    </header>
  );
}
