import Home from '../pages/Home';
import About from '../pages/About';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

const routes = [
  { path: '/', element: Home },
  { path: '/about', element: About },
  { path: '/dashboard', element: Dashboard },
];

export { routes, NotFound };


