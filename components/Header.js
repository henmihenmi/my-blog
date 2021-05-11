import Link from "next/link";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>
        <Link href="/">ブログ名</Link>
      </h2>
      <div className={classes.anchor}>
        <Link href="/">
          <a>Blogs</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </header>
  );
}
