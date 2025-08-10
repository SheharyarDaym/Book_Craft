import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import BookPrintingPage from '../Pages/BookPrintingPage'
import EBookPublishingPage from '../Pages/EBookPublishingPage'

import BookEditingPage from '../Pages/BookEditingPage'
import BookDesignPage from '../Pages/BookDesignPage'


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-printing" element={<BookPrintingPage />} />
      <Route path="/ebook-publishing" element={<EBookPublishingPage />} />

      <Route path="/book-editing" element={<BookEditingPage />} />
      <Route path="/book-design" element={<BookDesignPage />} />

    </Routes>
  )
}

export default App
