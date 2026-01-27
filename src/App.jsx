import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import WorkDetailPage from './pages/WorkDetailPage'
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {

  return (
    <BrowserRouter>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/works/:id" element={<WorkDetailPage />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App
