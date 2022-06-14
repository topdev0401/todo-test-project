import React, { lazy, Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

const Login = lazy(() => import('./pages/Login'));
const TodoList = lazy(() => import('./pages/TodoList'));

function App() {
  return (
    <BrowserRouter>
      <Suspense callback={"Loading"}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todo" element={<TodoList />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
