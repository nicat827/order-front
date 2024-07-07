import Home from "../pages/Home";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Contacts from "../pages/Contacts";
import AdminIndex from "../pages/Gallery/AdminIndex";
import UpdateGallery from "../pages/Gallery/UpdateGallery";
import AdminService from "../pages/Services/AdminService";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/056a714003858955",
    element: <AdminIndex />,
  },
  {
    path: "/056a714003858955/edit/:id",
    element: <UpdateGallery />,
  },
  {
    path: "/056a71400385895",
    element: <AdminService />,
  },
];

export default routes;
