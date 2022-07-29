import React, { lazy, Suspense } from "react";

const LazyHomePage = lazy(() => import("./HomePage"));

const HomePage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyHomePage {...props} />
  </Suspense>
);

export default HomePage;
