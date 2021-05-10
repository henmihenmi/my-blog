import Link from "next/link";

export function Header() {
  return (
    <header>
      <div>
        <Link href="/">ブログ名</Link>
      </div>
      <div>
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
