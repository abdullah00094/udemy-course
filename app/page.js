import Link from "next/link";
import customClasses from "./page.module.css";
import ImageSlideshow from "@/components/images/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={customClasses.header}>
        <div className={customClasses.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={customClasses.hero}>
            <h1>Hi, I'm John Doe</h1>
            <p>share is care ! </p>
          </div>
          <div className={customClasses.cta}>
            <Link href="/community">join the community</Link>
            <Link href="/meals">explore meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={customClasses.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className={customClasses.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
