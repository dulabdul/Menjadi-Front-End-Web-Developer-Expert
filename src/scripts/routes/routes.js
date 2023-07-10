import Home from '../views/pages/Home';
import Detail from '../views/pages/Detail';
import Favorite from '../views/pages/Favorite';
import NotFound from '../views/pages/404';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/404er': NotFound,
};

export default routes;
