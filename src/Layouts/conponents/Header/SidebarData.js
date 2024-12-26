import { FaHome } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";
import { GiCardRandom } from "react-icons/gi";
import { GiSadCrab } from "react-icons/gi";

export const SidebarData = [
  {
    title: 'Trang Chủ',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'Random',
    path: '/random',
    icon: <GiPerspectiveDiceSixFacesRandom />,
    cName: 'nav-text'
  },{
    title: 'Vị Thần Quyết Định',
    path: '/god_decides',
    icon: <GiCardRandom />,
    cName: 'nav-text'
  },{
    title: 'Hôm Nay Ăn Gì',
    path: '/foods',
    icon: <MdFoodBank />,
    cName: 'nav-text'
  },{
    title: 'Food Tour Quanh Ta',
    path: '/food_tour_plan',
    icon: <BiSolidFoodMenu />,
    cName: 'nav-text'
  },
  {
    title: 'Cua cá',
    path: '/fish_crab',
    icon: <GiSadCrab />,
    cName: 'nav-text'
  },
]