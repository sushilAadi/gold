import { useState, useEffect } from "react";

import TopNavbar  from "../Navigation/TopNavbar";



export default function SignIn() {

  

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <TopNavbar/>
    </div>
  );
}
