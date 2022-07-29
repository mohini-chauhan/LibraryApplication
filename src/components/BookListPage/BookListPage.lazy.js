import React, { lazy, Suspense } from "react";

const LazyBookListPage = lazy(() => import("./BookListPage"));

const BookListPage = (props) => (
  <Suspense fallback={null}>
    <LazyBookListPage {...props} />
  </Suspense>
);

export default BookListPage;
