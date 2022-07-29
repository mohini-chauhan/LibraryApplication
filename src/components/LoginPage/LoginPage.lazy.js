import React, { lazy, Suspense } from "react";

const LazyLoginPage = lazy(() => import("./LoginPage"));

const LoginPage = (props) => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyLoginPage {...props} />
  </Suspense>
);

export default LoginPage;
