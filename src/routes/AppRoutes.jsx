import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { routes, NotFound } from './routes';

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}> 
        {routes.map(({ path, element: Element }) => (
          <Route key={path} path={path} element={<Element />} />
        ))}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;


