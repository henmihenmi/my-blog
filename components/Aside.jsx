import Link from "next/link";
import classes from "./Aside.module.css";

const name = "Kentaro Henmi";

export function Aside() {
  return (
    <div className={classes.container}>
      <h1>{name}</h1>
      <img src="/images/profile.png" />
      <div>
        <h2>About</h2>
        <p>フロントエンド勉強中</p>
        <p>JavaScript/React/Next.js</p>
      </div>
      <div className={classes.link}>
        <h2>Link</h2>
        <ul className={classes.list}>
          <li>
            <Link href="https://twitter.com/kentaro_h_b">
              <a className={classes.anchor}>Twitter</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className={classes.anchor}>GitHub</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
