import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/" element={<AboutPage />} />
          <Route path="/works/:id" element={<WorkDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
