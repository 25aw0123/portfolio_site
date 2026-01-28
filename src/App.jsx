import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkDetailPage from './pages/WorkDetailPage'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <HashRouter>
      <ScrollToTop />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/work/:id" element={<WorkDetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App
