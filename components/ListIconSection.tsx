import Link from "next/link";
import { IconType } from "react-icons";
import { CiCircleCheck, CiTimer } from "react-icons/ci";

export const educationConfig = [
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

export const experienceConfig = [
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

export const conferencesConfig = [
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

export const workshopConfig = [
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

export const papersConfig = [
  {
    text: (
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
    ),
    icon: CiCircleCheck,
  },
];
interface Props {
  text: React.ReactNode;
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

interface ListProps {
  text: React.ReactNode;
  icon: IconType;
}
export const List = ({ list }: { list: ListProps[] }) => {
  return (
    <ul>
      {list.map((item, index) => (
        <ListItem key={index} text={item.text} Icon={item.icon} />
      ))}
    </ul>
  );
};
