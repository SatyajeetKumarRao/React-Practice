import { lazy } from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

const AutoCompleteSearchPage = lazy(
  () => import("../pages/AutoCompleteSearchPage"),
);
const MemoizationExamplePage = lazy(
  () => import("../pages/MemoizationExamplePage"),
);
const CustomHookExamplePage = lazy(
  () => import("../pages/CustomHookExamplePage"),
);
const ContextExamplePage = lazy(() => import("../pages/ContextExamplePage"));
const CoreReduxExamplePage = lazy(
  () => import("../pages/CoreReduxExamplePage"),
);
const ReactReduxExamplePage = lazy(
  () => import("../pages/ReactReduxExamplePage"),
);
const ReactReduxSagaExamplePage = lazy(
  () => import("../pages/ReactReduxSagaExamplePage"),
);

const ClickGamePage = lazy(() => import("../pages/ClickGamePage"));

const TabsPage = lazy(() => import("../pages/TabsPage"));

const InfiniteScrollPage = lazy(() => import("../pages/InfiniteScrollPage"));

const DebounceExamplePage = lazy(() => import("../pages/DebounceExamplePage"));
const ThrottleExamplePage = lazy(() => import("../pages/ThrottleExamplePage"));
const AccordionPage = lazy(() => import('../pages/AccordionPage'))
const PaginationPage = lazy(() => import('../pages/PaginationPage'))
const TodoPage = lazy(() => import('../pages/TodoPage'))
const VirtualListPage = lazy(() => import("../pages/VirtualListPage"));
const ChipsInputPage = lazy(() => import("../pages/ChipsInputPage"));


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="auto-complete-search"
          element={<AutoCompleteSearchPage />}
        />
        <Route path="tabs" element={<TabsPage />} />
        <Route path="infinite-scroll" element={<InfiniteScrollPage />} />
        <Route path="accordion" element={<AccordionPage />} />
        <Route path="pagination" element={<PaginationPage />} />
        <Route path="virtual-list" element={<VirtualListPage />} />
        <Route path="chips-input" element={<ChipsInputPage />} />
        <Route path="todo" element={<TodoPage />} />
        <Route path="debounce" element={<DebounceExamplePage />} />
        <Route path="throttle" element={<ThrottleExamplePage />} />
        <Route
          path="memoization-example"
          element={<MemoizationExamplePage />}
        />
        <Route path="custom-hook-example" element={<CustomHookExamplePage />} />
        <Route path="context-example" element={<ContextExamplePage />} />
        <Route path="core-redux-example" element={<CoreReduxExamplePage />} />
        <Route path="react-redux-example" element={<ReactReduxExamplePage />} />
        <Route
          path="react-redux-saga-example"
          element={<ReactReduxSagaExamplePage />}
        />
        <Route path="click-game" element={<ClickGamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
