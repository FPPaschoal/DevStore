import Link from 'next/link';

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Hello World</h1>
      <Link href="/search">Search</Link>
    </div>
  );
}
