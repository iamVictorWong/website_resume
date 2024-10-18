import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import NavigationBar from './components/NavigationBar';
import { Container } from 'react-bootstrap';
import './styles.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Container className="section">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;