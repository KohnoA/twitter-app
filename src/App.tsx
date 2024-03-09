import { Route, Routes } from 'react-router-dom';

import { Login, SignUp } from '@/pages';

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<SignUp />} />
  </Routes>
);

export default App;
