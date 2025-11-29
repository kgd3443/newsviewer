// src/App.tsx
import { Routes, Route } from "react-router-dom";
import NewsPage from "./components/NewsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
  );
}
