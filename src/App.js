import React, { Suspense } from "react";
import Lottie from "react-lottie";
import "./App.css";
import loader from "./assets/loading.json";
import TopNavbar from "./Screens/Navigation/TopNavbar";

const RoutePage = React.lazy(() => import("./Routes/RoutePage"));

function App() {
  const login = localStorage.getItem("login");
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={login && "d-flex"}>
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            <Lottie options={defaultOptions} height={300} width={500} />
          </div>
        }
      >
        <RoutePage />
      </Suspense>
    </div>
  );
}

export default App;
