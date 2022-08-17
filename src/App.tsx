import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import AppLayout from "components/layout/AppLayout";
import AuthLayout from "components/layout/AuthLayout";
import Board from "pages/Board";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeCustomization from "themes";

function App() {
  return (
    <ThemeCustomization>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="boards" element={<Home />} />
            <Route path="boards/:boardId" element={<Board />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeCustomization>
  );
}

export default App;
