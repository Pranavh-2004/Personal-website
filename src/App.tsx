import { lazy, Suspense } from "react";

import { SiteLayout } from "@/components/SiteLayout";
import { RouterProvider, usePathname } from "@/lib/router";

const Home = lazy(() => import("@/pages/Index"));
const Research = lazy(() => import("@/pages/Research"));
const Projects = lazy(() => import("@/pages/Projects"));
const Experience = lazy(() => import("@/pages/Experience"));
const Archive = lazy(() => import("@/pages/Archive"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const PageLoader = () => (
  <div className="page-loader" role="status">
    <span aria-hidden="true">$</span> loading
  </div>
);

const routeComponents: Record<string, typeof Home> = {
  "/": Home,
  "/research": Research,
  "/projects": Projects,
  "/experience": Experience,
  "/archive": Archive,
};

const AppRoutes = () => {
  const pathname = usePathname();
  const Page = routeComponents[pathname] ?? NotFound;

  return (
    <Suspense fallback={<PageLoader />}>
      <SiteLayout>
        <Page />
      </SiteLayout>
    </Suspense>
  );
};

const App = () => (
  <RouterProvider>
    <AppRoutes />
  </RouterProvider>
);

export default App;
