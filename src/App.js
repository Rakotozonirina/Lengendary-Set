import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from "./components/navbar";
import Form from "./components/form";

export default function App() {
    return(
        <>
            <Navbar/>
            <Form/>
        </>
    )
}