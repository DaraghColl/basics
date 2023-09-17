import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopicLearn } from './pages/topic-learn/topic-learn';
import { TopicList } from './pages/topic-list/topic-list';
import { Header } from './components/header/header';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="container">
      <ToastContainer toastClassName="custom-toast" newestOnTop={true} autoClose={1000} hideProgressBar={true} />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path="/topic-learn/:id" element={<TopicLearn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
