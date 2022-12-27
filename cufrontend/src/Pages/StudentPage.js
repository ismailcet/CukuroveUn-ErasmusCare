import React, { useEffect, useState } from "react";
import Student from "../Components/Student";
import Information from "../Components/Information";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";
import { studentList } from "../assets/data";

const StudentPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getStudent = async () => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      const token = jwt_decode(tokens);
      const response = await axios.get(
        `http://localhost:5000/api/students/find/${token.id}`
      );
      if (response.statusText === "OK") {
        setUser(response.data);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getStudent();
  }, [id]);

  return (
    <section className="studentPage flex px-[1rem] w-[1170px] justify-center gap-4 my-0 mx-auto">
      {!isLoading ? (
        <>
          <Student user={user} />
          <Information user={user} />
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </section>
  );
};

export default StudentPage;
