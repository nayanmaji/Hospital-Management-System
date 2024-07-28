import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import your icons
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Home from "./Component/Home";
import Patient from "./Component/Patient/Patient";
import Doctor from "./Component/Doctor/Doctor";
import Admin from "./Component/Admin/Admin";
import DrList from "./Component/Patient/DrList";
import BookApt from "./Component/BookApt";
import AppointmentList from "./Component/Doctor/AppointmentList";
import ClinicalExcellence from "./Component/Patient/ClinicalExcellence";
import DProtectedRoute from "./Component/DProtectedRoute";
import AProtectedRoute from "./Component/AProtectedRoute";
import DoctorDetils from "./Component/Doctor/DoctorDetils";
import DLogin from "./Component/Doctor/DLogin";
import PLogin from "./Component/Patient/PLogin";
import DSignUp from "./Component/Doctor/DSignUp";
import PSignUp from "./Component/Patient/PSignUp";
import ALogin from "./Component/Admin/ALogin";
import ASignUp from "./Component/Admin/ASignUp";
import PastAppointment from "./Component/Doctor/PastAppointment";
import ListDoctor from "./Component/Admin/ListDoctor";
import EditDoctor from "./Component/Doctor/EditDoctor";
import AllPatientList from "./Component/Admin/AllPatientList";
import ListContacts from "./Component/Admin/ListContacts";

library.add(fab, fas, far);

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/alldoctors" element={<DrList />} />
          <Route path="/bookapt" element={<BookApt />} />
          <Route path="/clinicalexcellence" element={<ClinicalExcellence />} />
          <Route
            path="/appointments/:doctorName/:departmentName"
            element={<DProtectedRoute component={AppointmentList} />}
          />
          <Route
            path="/:id"
            element={<DProtectedRoute component={DoctorDetils} />}
          />
          <Route
            path="/appointments/:doctorName/:departmentName/past"
            element={<DProtectedRoute component={PastAppointment} />}
          />
          <Route path="/dlogin" element={<DLogin />} />
          <Route path="/alogin" element={<ALogin />} />
          <Route path="/plogin" element={<PLogin />} />
          <Route path="/dregistration" element={<DSignUp />} />
          <Route path="/aregistration" element={<ASignUp />} />
          <Route path="/pregistration" element={<PSignUp />} />
          <Route
            path="/listdoctor"
            element={<AProtectedRoute component={ListDoctor} />}
          />
          <Route
            path="/editdoctor"
            element={<AProtectedRoute component={EditDoctor} />}
          />
          <Route
            path="/allpatientlist"
            element={<AProtectedRoute component={AllPatientList} />}
          />
          <Route
            path="/getallcontactus"
            element={<AProtectedRoute component={ListContacts} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
