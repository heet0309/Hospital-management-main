import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import HospitalHome from "./components/Hospital/Home";
import HospitalSignup from "./components/Hospital/SignUp";
import LoginHospital from "./components/Hospital/Login";
import AdminHome from "./components/Admin/Home";
import ApprovedList from "./components/Admin/ApprovedList";
import PendingList from "./components/Admin/PendingList";
import Add_Bed from "./components/Hospital/Add_Bed";
import Update_Bed from "./components/Hospital/Update_Bed";
import Add_Doctor from "./components/Hospital/Add_Doctor";
import Update_Doctor from "./components/Hospital/Update_Doctor";
import HospitalForgetPassword from "./components/Hospital/HospitalForgetPassword";
import Doctor_List from "./components/Hospital/DoctorList";
import FindDoctor from "./components/User/FindDoctor";
import DoctorList from "./components/User/DoctorList";
import BookAppointment from "./components/User/BookAppointment";
import BedAvailibility from "./components/User/BedAvailibility";
import BedBooking from "./components/User/BedBooking";
import DocHospitalList from "./components/User/DocHospitalList";
import DoctorAppointmentList from "./components/Hospital/DoctorAppointmentList";
import BedBookedList from "./components/Hospital/BedBookedList";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home showAlert={showAlert} />
            </Route>
            <Route exact path="/user/login">
              <Login showAlert={showAlert} />
            </Route>
            <Route exact path="/user/FindDoctor">
              <FindDoctor showAlert={showAlert} />
            </Route>
            <Route exact path="/user/DoctorList">
              <DoctorList showAlert={showAlert} />
            </Route>
            <Route exact path="/user/BookAppoinment">
              <BookAppointment showAlert={showAlert} />
            </Route>
            <Route exact path="/user/BedAvailibility">
              <BedAvailibility showAlert={showAlert} />
            </Route>
            <Route exact path="/user/BedBooking">
              <BedBooking showAlert={showAlert} />
            </Route>
            <Route exact path="/user/DocHospitalList">
              <DocHospitalList showAlert={showAlert} />
            </Route>
            <Route exact path="/user/signup">
              <Signup showAlert={showAlert} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/hospital/Signup">
              <HospitalSignup showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/Login">
              <LoginHospital showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/Home">
              <HospitalHome showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/addBed">
              <Add_Bed showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/updateBed">
              <Update_Bed showAlert={showAlert} />
            </Route>

            <Route exact path="/hospital/addDoctor">
              <Add_Doctor showAlert={showAlert} />
            </Route>

            <Route exact path="/hospital/doctorlist">
              <Doctor_List showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/BedBookedList">
              <BedBookedList showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/DoctorAppointmentList">
              <DoctorAppointmentList showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/updateDoctor">
              <Update_Doctor showAlert={showAlert} />
            </Route>
            <Route exact path="/admin/Home">
              <AdminHome showAlert={showAlert} />
            </Route>
            <Route exact path="/admin/Home/Approved">
              <ApprovedList showAlert={showAlert} />
            </Route>
            <Route exact path="/admin/Home/PendingList">
              <PendingList showAlert={showAlert} />
            </Route>
            <Route exact path="/hospital/hospitalForgetPassword"></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
