import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { HomePage, AboutPage, ProjectsPage, ContactPage, NotFoundPage, BlogPage } from './pages';
import { BlogPost } from './pages/BlogPost';
import EditorPage from './pages/EditorPage';

export const navigationItems = [
  { name: 'Home', path: '/', element: <HomePage /> },
  { name: 'About', path: '/about', element: <AboutPage /> },
  { name: 'Projects', path: '/projects', element: <ProjectsPage /> },
  { name: 'Blog', path: '/blog', element: <BlogPage /> },
  { name: 'Contact', path: '/contact', element: <ContactPage /> },
];


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Static routes */}
          {navigationItems.map((item) => (
            <Route key={item.path} path={item.path} element={item.element} />
          ))}
          {/* Dynamic route for individual blog posts */}
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Hidden editor route (not in nav menu) */}
          <Route path="/editor" element={<EditorPage />} />
          {/* Add a catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App
