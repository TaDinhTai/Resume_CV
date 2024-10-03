import LayoutDefault from "../components/LayoutDefault";
import DashBoard from "../pages/Dashboard";
import Resume from "../pages/Resume";

export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/',
        element: <DashBoard />
      },

    ]
  },
  {
    path: 'resumes/edit',
    element: <Resume />
  }
];