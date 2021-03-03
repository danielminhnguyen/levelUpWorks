import React, { useState } from "react";
import NavigationBar from "components/NavigationBar/NavigationBar";
import Footer from "components/Footer/Footer";
import Home from "screens/Home/Home";
import ProjectsList from "screens/ProjectsList/ProjectsList";
import ModalLoginSignup from "components/ModalLoginSignup/ModalLoginSignup";
import { Switch, Route } from "react-router-dom";
import Profile from "screens/Profile";

export default function Main() {
  const [modalOpen, setmodalOpen] = useState(false);
  const [loginSingup, setloginSingup] = useState(null);

  const openModal = (event) => {
    setmodalOpen(true);
    setloginSingup(event);
  };

  const ModalClose = () => {
    setmodalOpen(false);
  };

  return (
    <div className="column">
      <NavigationBar modalClick={openModal} />

      <Switch>
        <Route exact path="/">
          <Home signUp={openModal} />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/projects">
          <ProjectsList closeModal={ModalClose} />
        </Route>
      </Switch>
      <Footer />

      <ModalLoginSignup show={modalOpen} request={loginSingup} close={ModalClose} />
    </div>
  );
}
