import Link from "next/link";

const products = [{ name: "bag"}, { name: "shoes"}, { name: "socks"} ];

export default function Home() {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.name}>
              <Link href={`/products/${product.name}`} >
                <a>{product.name}</a>
              </Link>
            </li>
          )
        })}
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <h1>Hello Next.js</h1>
    </div>
  );
}
