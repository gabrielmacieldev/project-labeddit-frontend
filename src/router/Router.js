import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Comments from "../Pages/Comments/Comments";
import Login from "../Pages/Login/Login";
import Post from "../Pages/Post/Post";
import Signup from "../Pages/Signup/Signup";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/posts" element={<Post />} />
                <Route path="/comments/:id" element={<Comments />} />
            </Routes>
        </BrowserRouter>
    )
}
export default Router