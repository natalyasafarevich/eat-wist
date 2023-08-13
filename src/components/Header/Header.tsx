import React, { FC } from "react";
import { Link, Route } from "react-router-dom";
import "./Header.scss";
import LinkProps from "../../moduls/types-interfaces/types";


const links: Array<LinkProps> = [
	{
		url: "/category",
		name: "category",
	},
	{
		url: "/recipes",
		name: "recipes",
	},
	{
		url: "/demo",
		name: "demo",
	},
];

const Header: FC = () => {
	return (
		<header className="header">
			<div className="header__wrap">
				<Link to={"/"} className="header__logo"></Link>
				<nav className="nav">
					<ul className="header__list">
						{links.map((link) => {
							return (
								<li key={link.url}>
									<Link className="header__link" to={link.url}>
										{link.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="header__auth">
					<Link className="header__button header__button_login" to={"/login"}>
						login
					</Link>
					<Link className="header__button header__button_sign-up" to={"/auth"}>
						Sign Up
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
