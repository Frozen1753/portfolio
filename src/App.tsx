import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/header/Header';
import { Footer } from './components/layout/footer/Footer';
import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { ProjectDetail } from './pages/project-detail/ProjectDetail';
import './styles/global.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;