import { FaHome } from "react-icons/fa";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { DiDrupal } from "react-icons/di";
import { MdFoodBank } from "react-icons/md";
import { BiSolidFoodMenu } from "react-icons/bi";




export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaHome />,
    cName: 'nav-text'
  },
  {
    title: 'random',
    path: '/random',
    icon: <GiPerspectiveDiceSixFacesRandom />,
    cName: 'nav-text'
  },{
    title: 'god_decides',
    path: '/god_decides',
    icon: <DiDrupal />,
    cName: 'nav-text'
  },{
    title: 'foods',
    path: '/foods',
    icon: <MdFoodBank />,
    cName: 'nav-text'
  },{
    title: 'food_tour_plan',
    path: '/food_tour_plan',
    icon: <BiSolidFoodMenu />,
    cName: 'nav-text'
  },
]