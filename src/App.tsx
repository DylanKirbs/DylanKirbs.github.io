import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, AboutPage, ProjectsPage, ContactPage } from './pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
