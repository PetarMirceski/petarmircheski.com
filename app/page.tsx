import Link from "next/link";

import { EmailReveal } from "@/components/emailReveal";
import { IconType } from "react-icons";
import { CiCircleCheck, CiTimer } from "react-icons/ci";

import Image from "next/image";

interface Props {
  text: string | JSX.Element;
  Icon: IconType;
}
const ListItem = ({ text, Icon }: Props) => {
  return (
    <li className="flex items-center">
      <Icon className="text-blue-500 flex-none" size="30px" />
      <p className="ml-2 flex-auto my-1">{text}</p>
    </li>
  );
};

const educationConfig = [
  {
    text: "[2020] - Undergraduate studies at Ss. Cyril and Methodius University of Skopje, Faculty of Electrical Engineering and Information Technology, Department of Systems and Control Engineering.",
    icon: CiCircleCheck,
  },
  {
    text: "[2021-2022] - Researcher student at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.",
    icon: CiCircleCheck,
  },
  {
    text: "[2022-2024] - Master studies at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.",
    icon: CiCircleCheck,
  },

  {
    text: "[2024-] - Doctoral studies at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.",
    icon: CiTimer,
  },
];

const experienceConfig = [
  {
    text: "[2019] Worked as a Machine Learning engineer at Aritmatrix, Skopje.",
    icon: CiCircleCheck,
  },
  {
    text: "[2020] Worked as a Front-End Senior Developer at Aritmatrix, Skopje.",
    icon: CiCircleCheck,
  },
  {
    text: "[2022~] Research Assistant at Department of Systems and Control Engineering, School of Engineering, Tokyo Institute of Technology, Japan.",
    icon: CiTimer,
  },
];

const conferencesConfig = [
  {
    text: "P. Mircheski, H Nakao, Spatially locked chimera states, Poster presentation at International Conference on Self-organization in Life and Matter, Meiji University, Tokyo, Japan (10.09.2024)",
    icon: CiCircleCheck,
  },
  {
    text: "P. Mircheski, J. Zhu, H Nakao, Phase-amplitude reduction of networks and synchronization, Poster Presentation at Dynamics Days Europe, Naples, Italy, Poster presentation (05-06.09.2023)",
    icon: CiCircleCheck,
  },
  {
    text: "P. Mircheski, H Nakao, Phase-amplitude reduction of limit cycling networks for optimal synchronization, Poster Presentation at International Union of theoretical and applied mechanics, Tsukuba, Japan (01.08.2023)",
    icon: CiCircleCheck,
  },
  {
    text: "P. Mircheski, H Nakao, Phase-amplitude reduction for optimal synchronization of limit cycling networks, Poster Presentation at International federation of automatic control, Yokohama, Japan (13.07.2023)",
    icon: CiCircleCheck,
  },
  {
    text: "P. Mircheski, J. Zhu, H Nakao, Phase-amplitude reduction of collectively oscillating networks, Oral presentation at Conference on complex systems, Palma de Mallorca, Spain (17.10.2022)",
    icon: CiCircleCheck,
  },
];

const workshopConfig = [
  {
    text: "CREST Computational Dynamics General Meeting, Matsuyama Ehime(愛媛県), Ehime University Media Hall Program, (19~20.12.2023)",
    icon: CiCircleCheck,
  },
  {
    text: "CREST Computational Dynamics General Meeting, Awajishima Hyogo(兵庫県), Awaji yumebutai (夢舞台), (25~26.5.2023)",
    icon: CiCircleCheck,
  },
  {
    text: "Hirosaki University Workshop on Nonlinear Science 2022, Hirosaki Aomori (青森県), Iwaki Hall, 50th Anniversary Memorial Hall, Bunkyocho Campus, Hirosaki University, (14~15.11.2022)",
    icon: CiCircleCheck,
  },
];

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center">
        <Image
          alt="Profile"
          className="w-64 h-64 rounded-full"
          src="/images/beach_crop.jpeg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          height="200"
          width="200"
        />
      </section>
      <section className="max-w-7xl mx-auto container px-10">
        <h3>About Me</h3>
        <p>
          I am a Macedonian graduate student at Tokyo Institute of Technology
          majoring in the Department of Systems and Control Engineering, School
          of Engineering, Tokyo Institute of Technology, Japan. My academic
          advisor is Prof. Dr. Nakao Hiroya. I have a knack for problem solving.
          You can find my CV{" "}
          <Link className="text-blue-400 hover:text-blue-300" href="/cv.pdf">
            here
          </Link>
          .
        </p>
      </section>

      <section className="max-w-7xl mx-auto container px-10">
        <h3>Interests</h3>
        <p>
          I have a deep-seated passion for delving into the topic of nonlinear
          dynamics and control engineering. I have been fortunate to immerse
          myself in a variety of captivating topics, including Reduction
          Methods, Synchronization, Nonlinear System Analysis, Chaos Theory and
          Networked Dynamics. These explorations have equipped me with a solid
          foundation in the realms of systems engineering while nurturing my
          fascination for intricate dynamics and their real-world applications.
        </p>
        <p>
          I love learning languages, I am fluent in Macedonian and English, and
          I have some efficiency in Serbo-Croatian. I am currently engrossed in
          mastering Japanese. My linguistic journey has not only enabled me to
          bridge cultural gaps but has also kindled my curiosity for
          understanding diverse societies.
        </p>
        <p>
          When I am not doing research or at the lab I tweek with my dot-files,
          program, tweek electronics or stroll through Akihabara to find dirt
          cheap electronics and garbage that I like tweaking with. I also
          sometimes write blog posts on this website.
        </p>
        <p>
          I generally don&apos;t use social media so the only way to track what
          I do is to either look up this website or message me at{" "}
          <EmailReveal />
        </p>
      </section>

      <section className="max-w-7xl mx-auto container px-10">
        <h3>Resume</h3>
        <section className="px-1">
          <h4>Education</h4>
          <ul>
            {educationConfig.map((item, index) => (
              <ListItem key={index} text={item.text} Icon={item.icon} />
            ))}
          </ul>
          <h4>Professional Experience</h4>
          <ul>
            {experienceConfig.map((item, index) => (
              <ListItem key={index} text={item.text} Icon={item.icon} />
            ))}
          </ul>
          <h4>Papers and Conference Proceedings</h4>
          <ul>
            <ListItem
              text={
                <>
                  P. Mircheski, J. Zhu, H Nakao,{" "}
                  <Link
                    className="text-blue-400 hover:text-blue-300"
                    href="https://pubs.aip.org/aip/cha/article-abstract/33/10/103111/2916005/Phase-amplitude-reduction-and-optimal-phase?redirectedFrom=fulltext"
                  >
                    &quot;Phase-amplitude reduction and optimal phase locking of
                    collectively oscillating networks&quot;
                  </Link>
                  , Chaos 33, 103111 [1-18] (2023)
                </>
              }
              Icon={CiCircleCheck}
            />
          </ul>
          <h4>Conferences Attended</h4>
          <ul>
            {conferencesConfig.map((item, index) => (
              <ListItem key={index} text={item.text} Icon={item.icon} />
            ))}
          </ul>
          <h4>Workshops Attended</h4>
          <ul>
            {workshopConfig.map((item, index) => (
              <ListItem key={index} text={item.text} Icon={item.icon} />
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
