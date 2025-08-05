import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import BookPrintingPage from '../Pages/BookPrintingPage'
import EBookPublishingPage from '../Pages/EBookPublishingPage'
import AudiobookCreationPage from '../Pages/AudiobookCreationPage'
import BookEditingPage from '../Pages/BookEditingPage'
import BookDesignPage from '../Pages/BookDesignPage'
import SalesMarketingPage from '../Pages/SalesMarketingPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-printing" element={<BookPrintingPage />} />
      <Route path="/ebook-publishing" element={<EBookPublishingPage />} />
      <Route path="/audiobook-creation" element={<AudiobookCreationPage />} />
      <Route path="/book-editing" element={<BookEditingPage />} />
      <Route path="/book-design" element={<BookDesignPage />} />
      <Route path="/sales-marketing" element={<SalesMarketingPage />} />
    </Routes>
  )
}

export default App