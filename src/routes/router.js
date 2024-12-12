import config from '~/config';
import Random from '~/pages/Random';
import Home from '~/pages/Home';
import GodDecides from '~/pages/GodDecides';
import Foods from '~/pages/Foods';
import FoodTourPlan from '~/pages/FoodTourPlan';

const publicRoutes = [
  {path: config.routes.home, component: Home},
  {path: config.routes.random, component: Random},
  {path: config.routes.god_decides, component: GodDecides},
  {path: config.routes.foods, component: Foods},
  {path: config.routes.food_tour_plan, component: FoodTourPlan},
];
const privateRoutes = [];

export {privateRoutes, publicRoutes};
