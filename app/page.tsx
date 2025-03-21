import Image from "next/image";
import Content from "./MainPage.mdx";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <Image
          alt="Profile"
          className="size-64 rounded-full"
          src="/images/beach_crop.jpeg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          height="200"
          width="200"
        />
      </section>

      <section className="container mx-auto max-w-7xl px-10">
        <article className="prose max-w-none">
          <Content />
        </article>
      </section>
    </>
  );
}
