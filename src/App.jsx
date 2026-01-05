import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// const  Home = lazy(() => import("./pages/Home"));
import Home from './pages/Home.jsx';
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
import ProtectRoute from './components/auth/ProtectRoute.jsx';
// import LayoutLoader from './components/layout/Loaders.jsx';
const LayoutLoader = lazy(() => import("./components/layout/Loaders"));
const NotFound = lazy(() => import("./pages/NotFound"));


let user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>

          <Route element={<ProtectRoute user={user} />}>
            <Route path="/" element={<Home />} />
            <Route path="/chat/:chaId" element={<Chat />} />
            <Route path="/groups" element={<Groups />} />
          </Route>

          <Route path="/login" element={
            <ProtectRoute user={!user} redirect="/">
              <Login />
            </ProtectRoute>
          } />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App