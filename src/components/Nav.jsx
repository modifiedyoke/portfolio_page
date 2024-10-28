// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {

let currentPage = useLocation().pathname;

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        <h3 class="title">
          Brad Shurts
        </h3>
        <a role="button" class="navbar-burger burger" data-target="navbarMenu" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu" id="navbarMenu">
        <ul className="navbar-end">
          <Link key={1} to="/"
            className={currentPage === '/' ? 'navbar-item is-selected' : 'navbar-item'}>
            About Me
          </Link>
          <Link key={2} to="/portfolio"
            className={currentPage === '/portfolio' ? 'navbar-item is-selected' : 'navbar-item'}>
            Portfolio
          </Link>
          <Link key={3} to="/resume"
            className={currentPage === '/resume' ? 'navbar-item is-selected' : 'navbar-item'}>
            Resume
          </Link>
          <Link key={4} to="/contact"
            className={currentPage === '/contact' ? 'navbar-item is-selected' : 'navbar-item'}>
            Contact
          </Link>
        </ul>
      </div>

    </nav>
  );
}