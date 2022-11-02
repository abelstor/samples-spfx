import * as React from 'react';
import { Link } from 'react-router-dom';

export interface NavBarInterface { }

const NavBar: React.FC<NavBarInterface> = () => {
	return (
		<nav className="navbar-expand-lg navbar-dark bg-dark">

			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav justify-content-between">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/about" className="nav-link">
							About
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/matriz" className="nav-link">
							Matriz
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
