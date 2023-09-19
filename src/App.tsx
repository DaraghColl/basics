import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopicLearn } from './pages/topic-learn/topic-learn';
import { TopicList } from './pages/topic-list/topic-list';
import { Header } from './components/header/header';
import { ToastContainer } from 'react-toastify';
import { ScrollToTop } from './components/scroll-to-top/scroll-to-top';

function App() {
  return (
    <div className="mx-auto h-screen max-w-4xl px-8">
      <ToastContainer
        toastClassName="custom-toast bg-primary dark:bg-primary-dark text-primary dark:text-primary-light"
        newestOnTop={true}
        autoClose={1000}
        hideProgressBar={true}
      />
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<TopicList />} />
            <Route path="/topic-learn/:id" element={<TopicLearn />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
