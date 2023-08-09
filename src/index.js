import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"; // Import ReactDOM directly
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./loader/loader"; // Import the Loader component from the correct path

const App = lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));

function Root() {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : prevProgress
      );
    }, 500);

    // Clear interval when progress reaches 100%
    if (loadingProgress === 100) {
      clearInterval(progressInterval);
    }

    return () => clearInterval(progressInterval);
  }, [loadingProgress]);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Suspense fallback={<Loader progress={loadingProgress} />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </React.StrictMode>
  );
}

root.render(<Root />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
