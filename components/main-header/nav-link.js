
"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import customClasses from "./nav-link.module.css";
export default function NavLink({href,children}) {
    const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? customClasses.active : undefined }
    >
        {children}
    </Link>
  );
}