interface Props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const Section = ({ title, subTitle, children }: Props) => {
  return (
    <section className="container mx-auto max-w-7xl px-10">
      <h1 className="mb-3 font-extrabold text-4xl tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="mb-6 text-xl">{subTitle}</p>
      {children}
    </section>
  );
};
