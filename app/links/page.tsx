import Link from "next/link";

export default function Page() {
  return (
    <main>
      <ul>
        <li>
          <Link href={buildUrl("")} target="_blank">
            Kite link
          </Link>
        </li>
        <li>
          <Link href={buildUrl("book/105")} target="_blank">
            Kite link
          </Link>
        </li>
      </ul>
    </main>
  );
}

function buildUrl(path: string) {
  return `https://kite-edu.lotusa.net/${path}?ref=1234`;
}
