import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center">
      <h1 className="mb-4 font-extrabold text-7xl">404</h1>
      <p className="mb-8 text-2xl">
        Oops! We can not seem to find the page you are looking for.
      </p>
      <Link href="/" className="rounded px-6 py-3">
        Go back home
      </Link>
    </section>
  );
}
