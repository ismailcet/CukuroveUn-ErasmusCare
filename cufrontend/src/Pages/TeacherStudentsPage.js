import React, { useEffect, useState } from "react";
import StudentInfo from "../Components/StudentInfo";
import StudentsDetail from "../Components/StudentsDetail";
import axios from "axios";
import { useParams } from "react-router-dom";

const TeacherStudentsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getStudent = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/students/find/${id}`
    );
    if (response.statusText === "OK") {
      setUser(response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStudent();
  }, [id]);

  return (
    <section className="studentPage flex px-[1rem] w-[1170px] justify-center gap-4 my-0 mx-auto">
      {isLoading ? (
        <></>
      ) : (
        <>
          <StudentInfo user={user} />
          <StudentsDetail user={user} />
        </>
      )}
    </section>
  );
};

export default TeacherStudentsPage;
