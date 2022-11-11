import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import { ProjectList } from './pages/ProjectList/ProjectList';
import { EditProject } from './pages/EditProject/EditProject';
import { CreateProject } from './pages/CreateProject/CreateProject';
import { CreateUser } from './pages/CreateUser/CreateUser';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectList />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/edit-project/:id',
    element: <EditProject />,
  },
  {
    path: '/create-project',
    element: <CreateProject />,
  },
  {
    path: '/create-user',
    element: <CreateUser />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
