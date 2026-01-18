import { createHashRouter } from "react-router-dom";
import { PublicOnlyRoute } from "./ProtectedRoutes";
import WebsiteLayout from "../website/WebsiteLayout";
import WebHome from "../website/home/WebHome";
import WebAbout from "../website/about/WebAbout";
import WebContact from "../website/contact/WebContact";
import WebSub from "../website/plan/WebSub";
import WebJob from "../website/job/WebJob";
import WebOutsourcing from "../website/Clients/WebOutsourcing";
import WebRecruitment from "../website/Clients/WebRecruitment";

const routes = createHashRouter([
  {
    path: "/",
    element: <PublicOnlyRoute element={<WebsiteLayout />} />,
    children: [
      {
        path: "/",
        element: <WebHome />,
      },
      {
        path: "/about",
        element: <WebAbout />,
      },
      {
        path: "/contact",
        element: <WebContact />,
      },
      {
        path: "/job",
        element: <WebJob />,
      },
      {
        path: "/plans",
        element: <WebSub />,
      },
      {
        path: "/outsourcing",
        element: <WebOutsourcing />,
      },
      {
        path: "/recruitment",
        element: <WebRecruitment />,
      },
    ],
  },
]);

export default routes;
