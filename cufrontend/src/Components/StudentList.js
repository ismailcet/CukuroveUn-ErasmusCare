import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

//import "reactjs-popup/dist/index.css";
const StudentList = () => {
  const [students, setStudents] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getAllStudents = async () => {
    const response = await axios.get("http://localhost:5000/api/students");
    if (response.statusText === "OK") {
      setStudents(response.data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);
  return (
    <section className="announcements w-[780px]">
      <div className="left-title">
        <h3 className="uppercase">Students List / Öğrenci Listesi</h3>
      </div>
      <div className="studentList-content">
        {isLoading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <Table className="w-full">
            <thead>
              <tr>
                <th>Öğrenci Bilgi</th>
                <th>İşlem Durumu</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr className="h-[50px]" key={student._id}>
                  <td>
                    <Link to={`/studentsdetail/${student.studentID}`}>
                      {student.studentID} {student.name} {student.surname}
                    </Link>{" "}
                  </td>
                  <td className="text-center">
                    {student.teacherSubmit ? (
                      <>
                        <Button className="bg-[#157347] text-white w-[120px]">
                          Tamamlandı
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button className="bg-[#BB2D3B] text-white w-[120px]">
                          Tamamlanmadı
                        </Button>
                      </>
                    )}
                  </td>
                  <td className="text-center">
                    <Link to={`/studentsdetail/${student.studentID}`}>
                      <Button className="bg-[#FF9800] text-white w-[80px]">
                        Göster
                      </Button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </section>
  );
};

export default StudentList;
