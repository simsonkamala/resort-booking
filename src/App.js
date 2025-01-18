import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom"
import "./App.css";
const LazyNavigation = React.lazy( () => import("./navigationpage"))
const LazyMainHome = React.lazy( () => import("./defaultresort/mainhome/mainhome") )
const LazyAllRooms = React.lazy( () => import("./roomslist/allrooms"))
const LazyForm = React.lazy( () => import("./roomslist/forms"))
const LazyLogin = React.lazy( () => import("./applicationLogin") )


function App() {
  return (
    <HashRouter>
      <LazyNavigation />
          <Routes>

            <Route path="/" element={
              <React.Suspense fallback={<></>}>
                <LazyMainHome />
              </React.Suspense>
            } />
            
            <Route path="/resortlist" element={
              <React.Suspense fallback={<></>}>
                <LazyAllRooms />
              </React.Suspense>
            } />

            <Route path="/Forms" element={
              <React.Suspense fallback={<>Loading...</>} >
                <LazyForm />
              </React.Suspense>
            } />

            <Route path="/login" element={
              <React.Suspense fallback={<>Loding...</>} >
                <LazyLogin />
              </React.Suspense>
            } />

            

          </Routes>
    </HashRouter>
  );
}

export default App;
