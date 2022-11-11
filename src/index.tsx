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

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectList />,
  },
  {
    path: '/edit-project/:id',
    element: <EditProject />,
  }
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
