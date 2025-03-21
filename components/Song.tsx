import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  videoId: string;
  link: string;
}
export const Song = ({ title, videoId, link }: Props) => {
  return (
    <Link href={link} className="hover:underline">
      <Image
        alt={title}
        className="mb-4 rounded-3xl"
        src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
        style={{
          aspectRatio: "300/300",
          objectFit: "cover",
        }}
        width="400"
        height="400"
      />
      <h5 className="font-bold text-xl text-center">{title}</h5>
    </Link>
  );
};
