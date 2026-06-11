import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import ShowAllInfo from "./pages/ShowAllInfo";
import ShowBriefInfo from "./pages/ShowBriefInfo";
import EditUser from "./pages/EditUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowBriefInfo />} />
        <Route path="/info/:id" element={<ShowAllInfo />} />
        <Route path="/add" element={<CreateUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}
