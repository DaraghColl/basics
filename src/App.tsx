import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopicLearn } from './pages/topic-learn/topic-learn';
import { TopicList } from './pages/topic-list/topic-list';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TopicList />} />
          <Route path="/topic-learn" element={<TopicLearn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
