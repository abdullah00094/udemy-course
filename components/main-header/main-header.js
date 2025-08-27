import Link from "next/link";

import logoImg from "@/assets/logo.svg";
import Image from "next/image";
import NavLink from "./nav-link";

import customClasses from "./main-header.module.css";

export default function MainHeader() {
    return (
        <header className={customClasses.header}>
            <Link className={customClasses.logo} href="/">
                <Image src={logoImg} alt="Food App Logo" />
            </Link>
            <nav className={customClasses.nav}>
                <ul>
                    <li>
                        <NavLink href="/meals">
                            Browse Meals
                        </NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Join Community

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}