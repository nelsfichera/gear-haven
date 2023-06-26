import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import More from "./pages/More";
import Order from "./pages/Order";
import Layout from "./components/Layout";
import UserLayout from "./components/UserLayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Details from "./components/Details";
import MorePhotos from "./components/MorePhotos";
import Pricing from "./components/Pricing";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import Dashboard from "./pages/Dashboard";
import { AutoTop } from "./components/AutoTop";

function App() {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/user" />;
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Homepage />} />
            <Route element={<AutoTop />}>
              <Route path="/bike/:id" element={<Details />}>
                <Route index element={<More />} />
                <Route path="moreinfo" element={<MorePhotos />} />
                <Route path="price" element={<Pricing />} />
              </Route>
              <Route path="/order" element={<Order />} />
              <Route path="user" element={<UserLayout />}>
                <Route index element={<Login />} />
                <Route path="signup" element={<Signup />} />
              </Route>
              <Route
                path="dashboard"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;