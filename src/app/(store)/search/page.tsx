import Link from 'next/link';

export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <h1>Search</h1>
      <Link href="/">Home</Link>
    </div>
  );
}
