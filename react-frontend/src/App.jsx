import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import './styles/style.css'; // Preserving styles

function App() {
  return <RouterProvider router={router} />;
}

export default App;
