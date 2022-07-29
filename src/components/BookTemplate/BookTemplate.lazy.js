import React, { lazy, Suspense } from "react";

const LazyBookTemplate = lazy(() => import("./BookTemplate"));

const BookTemplate = (props) => (
  <Suspense fallback={null}>
    <LazyBookTemplate {...props} />
  </Suspense>
);

export default BookTemplate;
