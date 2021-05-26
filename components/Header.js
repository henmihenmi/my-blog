import Link from "next/link";
import classes from "./Header.module.css";

export function Header() {
  return (
    <header className={classes.header}>
      <h2 className={classes.title}>
        <Link href="/">Kentaro's Blog(仮)</Link>
      </h2>
      <div className={classes.anchor}>
        <Link href="/">
          <a>Blogs</a>
        </Link>
      </div>
    </header>
  );
}
