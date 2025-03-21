interface Props {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}

export const Section = ({ title, subTitle, children }: Props) => {
  return (
    <section className="container mx-auto max-w-7xl px-10">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="mb-10 text-2xl font-semibold">{subTitle}</p>
      {children}
    </section>
  );
};
