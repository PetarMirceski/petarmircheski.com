import Image from "next/image";
import Content from "./MainPage.mdx";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <div className="relative size-[350px] overflow-hidden rounded-full">
          <Image
            alt="Profile"
            src="/images/profile.jpeg"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "0% 4%", // moved a little to the right
              // First zoom (scale), then shift right with translateX
              transform: "scale(1.4) translateX(-6%)",
            }}
          />
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-10">
        <article className="prose max-w-none">
          <Content />
        </article>
      </section>
    </>
  );
}
