import Link from "next/link";
export default function Header() {
    return (
        <>
            <img src="icon.png" alt="logo" />
            <Link href="/"> Home</Link>
            <Link href="/meals"> Meals</Link>
            <Link href="/community"> community</Link>
            <Link href="/meals/share"> share a meal</Link>


        </>
    );
}