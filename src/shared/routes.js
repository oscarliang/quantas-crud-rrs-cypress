import containers from './containers'
import Full from './components/common/Full/Full'

const routes = [
  {
    path: "/",
    component: Full
  },
  {
		path: "/homepage",
		exact: true,
    component: containers.HomepageContainer
	},
	{
		path: "/search",
		exact: true,
    component: containers.SearchPageContainer
	}
];

export default routes;
