import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  NotFound,
  Login,
  Profile,
} from "./pages";
import { Navbar } from "./components";
import "./App.css";

const applicantData = {
  fullName: "Margot Foster",
  applicationFor: "Backend Developer",
  email: "margotfoster@example.com",
  salaryExpectation: "$120,000",
  about:
    "Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.",
  attachments: [
    {
      name: "resume_back_end_developer.pdf",
      size: "2.4mb",
      url: "/path/to/resume.pdf", // Replace with the actual file URL
    },
    {
      name: "coverletter_back_end_developer.pdf",
      size: "4.5mb",
      url: "/path/to/coverletter.pdf", // Replace with the actual file URL
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={<Profile applicant={applicantData} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
