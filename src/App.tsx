import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import { lazy, Suspense } from 'react';
import { Loader } from './features/loader/Loader';
import { Layout } from './components/layout/Layout';

const Home = lazy(() => import("./pages/home/Home"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const ProjectDetail = lazy(() => import("./pages/project-detail/ProjectDetail"));
const CvPage = lazy(() => import("./pages/cv/CvPage"));

function lazyRoute(element: React.ReactNode) {
  return (
    <Suspense fallback={<Loader />}>
      {element}
    </Suspense>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          {["home", "accueil"].map((path) => (
            <Route key={path} path={path} element={<Navigate to="/" replace />} />
          ))}
          <Route path="projects" element={lazyRoute(<Projects />)} />
          <Route path="projects/:slug" element={lazyRoute(<ProjectDetail />)} />
          <Route path="cv" element={lazyRoute(<CvPage />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;