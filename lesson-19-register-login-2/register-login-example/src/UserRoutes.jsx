import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from "./modules/PublicRoute/PublicRoute";
import PrivateRoute from './modules/PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MyBooksPage = lazy(() => import("./pages/MyBooksPage/MyBooksPage"));
const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage/MyFavoriteBooksPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...loading</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="/my-books" element={<MyBooksPage />} />
                    <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
                </Route>
                
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>

    )
}

export default UserRoutes;