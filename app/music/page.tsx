import { Section } from "@/components/Section";
import { Song } from "@/components/Song";

export default function Music() {
  return (
    <Section
      title="Music That I Enjoy"
      subTitle="Handpicked songs that I think are worth sharing with the internet"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {songs.map((song) => (
          <Song
            key={song.title}
            title={song.title}
            videoId={song.videoId}
            link={`https://www.youtube.com/watch?v=${song.videoId}`}
          />
        ))}
      </div>
    </Section>
  );
}
type SongType = { title: string; videoId: string };
const songs: SongType[] = [
  {
    title: "Alexandra Savior - Can't Help Myself",
    videoId: "2faK7a4NdMg",
  },
  {
    title: "Puma Blue - Hounds",
    videoId: "IuVFMVX2eY0",
  },
  {
    title: "Magdalena Bay - Dreamcatching",
    videoId: "8QfQeYaS-7A",
  },
  {
    title: "Radiohead - Let Down",
    videoId: "ZVgHPSyEIqk",
  },
  {
    title: "Arcade Fire - Reflektor",
    videoId: "7E0fVfectDo",
  },
  {
    title: "CHVRCHES - Violent Delights",
    videoId: "Emi3HNK_tiI",
  },
  {
    title: "Radiohead - Knives Out",
    videoId: "2Lpw3yMCWro",
  },
  {
    title: "Tigran Hamasyan - Road Song",
    videoId: "XzYi73A7g7E",
  },
  {
    title: "toe - グッドバイ / Goodbye",
    videoId: "e1pZIfretEs",
  },
  {
    title: "Chick Corea - Spain",
    videoId: "sEhQTjgoTdU",
  },
  {
    title: "Angel Olsen - Lark",
    videoId: "6uaN60k0-zY",
  },
  {
    title: "Tom Jobim - Chega De Saudade",
    videoId: "tlp8iY4g--4",
  },
  {
    title: "Talking Heads - Once In A Lifetime",
    videoId: "fR0jgT9UX0Q",
  },
  {
    title: "Emma Ruth Rundle - The Distance",
    videoId: "w9LgIOx6WJ8",
  },
  {
    title: "M83 - My Tears Are Becoming A Sea",
    videoId: "uE8EhJ9gS28",
  },
];
