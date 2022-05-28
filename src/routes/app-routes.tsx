import { Route, Routes } from 'react-router-dom';

import { WelcomePage, ErrorPage, SignInPage, SignUpPage } from '../pages';

import './index.scss';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<WelcomePage />} />
    <Route path="/sign-in" element={<SignInPage />} />
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
