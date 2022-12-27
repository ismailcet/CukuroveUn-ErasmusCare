import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./Pages/StudentPage";
import TeacherPage from "./Pages/TeacherPage";
import TeacherStudentsPage from "./Pages/TeacherStudentsPage";
import TeacherLoginPage from "./Pages/TeacherLoginPages";
import ChangePasswordPage from "./Pages/ChangePasswordPages";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/password-change" element={<ChangePasswordPage />} />
          <Route path="/teacher/login" element={<TeacherLoginPage />} />
          <Route path="/student/:id" element={<StudentPage />} />
          <Route path="/teacher/:id" element={<TeacherPage />} />
          <Route path="/studentsdetail/:id" element={<TeacherStudentsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
