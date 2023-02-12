import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './modules/Navbar/Navbar';

import HomePage from "./pages/HomePage/HomePage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage.jsx";
import PostSearchPage from "./pages/PostSearchPage/PostSearchPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="/posts-search" element={<PostSearchPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
