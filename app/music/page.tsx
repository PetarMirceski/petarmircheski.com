import { Song } from "@/components/song";

export default function Music() {
  return (
    <section className="flex flex-col items-center">
      <section className="max-w-7xl mx-auto container px-10">
        <h1 className="font-bold">Music That I Enjoy</h1>
        <p className="font-semibold mb-10">
          Handpicked songs that I think are worth sharing with the internet
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <Song
            title="Alexandra Savior - Can't Help Myself"
            videoId="2faK7a4NdMg"
            link="https://www.youtube.com/watch?v=2faK7a4NdMg"
          />
          <Song
            title="Puma Blue - Hounds"
            videoId="IuVFMVX2eY0"
            link="https://www.youtube.com/watch?v=IuVFMVX2eY0"
          />
          <Song
            title="Magdalena Bay - Dreamcatching"
            videoId="8QfQeYaS-7A"
            link="https://www.youtube.com/watch?v=8QfQeYaS-7A"
          />
          <Song
            title="Radiohead - Let Down"
            videoId="ZVgHPSyEIqk"
            link="https://www.youtube.com/watch?v=ZVgHPSyEIqk"
          />
          <Song
            title="Arcade Fire - Reflektor"
            videoId="7E0fVfectDo"
            link="https://www.youtube.com/watch?v=7E0fVfectDo"
          />
          <Song
            title="CHVRCHES - Violent Delights"
            videoId="Emi3HNK_tiI"
            link="https://www.youtube.com/watch?v=Emi3HNK_tiI"
          />
          <Song
            title="Radiohead - Knives Out"
            videoId="2Lpw3yMCWro"
            link="https://www.youtube.com/watch?v=2Lpw3yMCWro"
          />
          <Song
            title="Tigran Hamasyan - Road Song"
            videoId="XzYi73A7g7E"
            link="https://www.youtube.com/watch?v=XzYi73A7g7E"
          />
          <Song
            title="toe - グッドバイ / Goodbye"
            videoId="e1pZIfretEs"
            link="https://www.youtube.com/watch?v=e1pZIfretEs"
          />
          <Song
            title="Chick Corea - Spain"
            videoId="sEhQTjgoTdU"
            link="https://www.youtube.com/watch?v=sEhQTjgoTdU"
          />

          <Song
            title="Angel Olsen - Lark"
            videoId="6uaN60k0-zY"
            link="https://www.youtube.com/watch?v=6uaN60k0-zY"
          />
          <Song
            title="Tom Jobim - Chega De Saudade"
            videoId="tlp8iY4g--4"
            link="https://www.youtube.com/watch?v=tlp8iY4g--4"
          />
          <Song
            title="Talking Heads - Once In A Lifetime"
            videoId="fR0jgT9UX0Q"
            link="https://www.youtube.com/watch?v=fR0jgT9UX0Q"
          />

          <Song
            title="Emma Ruth Rundle - The Distance"
            videoId="w9LgIOx6WJ8"
            link="https://www.youtube.com/watch?v=w9LgIOx6WJ8"
          />
          <Song
            title="M83 - My Tears Are Becoming A Sea"
            videoId="uE8EhJ9gS28"
            link="https://www.youtube.com/watch?v=uE8EhJ9gS28"
          />
        </div>
      </section>
    </section>
  );
}
