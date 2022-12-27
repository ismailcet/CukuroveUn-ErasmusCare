import React, { useEffect, useState } from "react";
import Teacher from "../Components/Teacher";
import StudentList from "../Components/StudentList";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useParams } from "react-router-dom";

const TeacherPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getTeacher = async () => {
    if (localStorage.getItem("tokens")) {
      let tokens = JSON.parse(localStorage.getItem("tokens"));
      const token = jwt_decode(tokens);
      const response = await axios.get(
        `http://localhost:5000/api/teacher/find/${token.id}`
      );
      if (response.statusText === "OK") {
        setUser(response.data);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getTeacher();
  }, [id]);
  return (
    <section className="teacherPage flex px-[1rem] w-[1170px] justify-center gap-4 my-0 mx-auto">
      {!isLoading ? (
        <>
          <Teacher user={user} />
          <StudentList />
        </>
      ) : (
        <>
          <h1>Loading...</h1>
        </>
      )}
    </section>
  );
};

export default TeacherPage;
