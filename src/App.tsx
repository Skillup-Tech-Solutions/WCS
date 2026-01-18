import { RouterProvider } from "react-router-dom";
import routes from "./Routes/Routes";
import CustomToast from "./Custom/CustomToast";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
        <RouterProvider router={routes} />
        <CustomToast />
    </>
  );
}

export default App;
