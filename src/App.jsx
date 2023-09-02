import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Layout } from "./layout";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> //-- 404 */}
    </Routes>
  );
}

export default App;
