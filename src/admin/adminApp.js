import React from "react"
import { HashRouter, Routes, Route, Link } from "react-router-dom"
const LazyAdmin = React.lazy( () => import("./admin"))
const LazyAdminBooking = React.lazy( () => import("./adminbooking"))
const LazyUpdateAdmin = React.lazy( () => import("./updateadmin"))
const LazyUpdateBooking = React.lazy( () => import("./updatebooking"))

const AdminApp = () => {
    return(
        <HashRouter>
            <Routes>
                
                <Route path="/" element={
                    <React.Suspense fallback={<>Loding...</>} >
                        <LazyAdmin />
                    </React.Suspense>
                } />

                <Route path="/adminbook" element={
                    <React.Suspense fallback={<>Loding...</>} >
                        <LazyAdminBooking />
                    </React.Suspense>
                } />

                <Route path="/updete/:id" element={
                    <React.Suspense fallback={<>Loding...</>} >
                        <LazyUpdateAdmin />
                    </React.Suspense>
                } />

                <Route path="/updatebooking/:bookingID" element={
                    <React.Suspense fallback={<>Loding...</>} >
                        <LazyUpdateBooking />
                    </React.Suspense>
                } />

            </Routes>
        </HashRouter>
    )
}

export default AdminApp