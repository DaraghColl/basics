import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopicsList } from './pages/topics-list/topics-list';
import { TopicLearn } from './pages/topic-learn/topic-learn';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TopicsList />} />
          <Route path="/topic-learn" element={<TopicLearn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
