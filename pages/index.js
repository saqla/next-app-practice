import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
      <Image
        src="https://images.unsplash.com/photo-1659010523604-e8ee8fc39adf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        width={500}
        height={300}
        alt="Image Link Test"
      />
    </div>
  );
}