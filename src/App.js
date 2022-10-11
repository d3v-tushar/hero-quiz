//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/' , element: <Main></Main>, children: [
      {path: '/' , loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Topics></Topics> },
      {path: '/topic/:topicId', loader: async({params}) => {
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
      }, element: <Quiz></Quiz>},
      {path: '/statistics' , loader: () => fetch('https://openapi.programming-hero.com/api/quiz'), element: <Statistics></Statistics>},
      {path: '/blog', element: <Blog></Blog>},
      {path: '*' , element: <NotFound></NotFound>}
    ]}
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
