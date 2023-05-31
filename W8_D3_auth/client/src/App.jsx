import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsList from "./pages/ProjectsList";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectEdit from "./pages/ProjectEdit";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import { ProjectProviderWrapper } from "./contexts/projects.context";
import LogoutPage from "./pages/LogoutPage";

function App() {

  return (
    <>
      <Navbar />
      <ProjectProviderWrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/projects/edit/:projectId" element={<ProjectEdit />} />
            {/* added */}
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ProjectProviderWrapper>
    </>
  )
}

export default App
