import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Alert } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import axios from "axios";

const Information = ({ user }) => {
  const [gpa, setGpa] = useState();
  const changeGpa = () => {
    const putGpa = async () => {
      const response = await axios.put(
        `http://localhost:5000/api/students/${user._id}`,
        {
          gpa: gpa,
        }
      );
    };
    putGpa();
  };

  const submitFile1 = (e) => {
    e.preventDefault();
    const putFiles1 = async () => {
      const response = await axios.put(
        `http://localhost:5000/api/students/${user._id}`,
        {
          files1: true,
        }
      );
    };
    putFiles1();
  };

  const submitFile2 = (e) => {
    e.preventDefault();
    const putFiles2 = async () => {
      const response = await axios.put(
        `http://localhost:5000/api/students/${user._id}`,
        {
          files2: true,
        }
      );
    };
    putFiles2();
  };
  return (
    <section className="information w-[780px]">
      <Table className="w-full">
        <thead>
          <tr>
            <th>Dokümanlar ve Formlar</th>
            <th>Belge Durumu</th>
            <th>Onay</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[50px]">
            <td>Genel not ortalaması</td>
            <td>
              <InputGroup size="sm" className="mt-3">
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={user.gpa}
                  onChange={(e) => setGpa(e.target.value)}
                  onBlur={() => changeGpa()}
                />
              </InputGroup>
            </td>
            <td className="text-center">
              {user.gpa < 2.0 ? (
                <Button className="bg-[#BB2D3B] text-white w-[80px]">
                  Başarısız
                </Button>
              ) : (
                <Button className="bg-[#157347] text-white w-[80px]">
                  Başarılı
                </Button>
              )}
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>Dil Seviyesi </td>
            <td>{user.levelLanguage} %</td>
            <td className="text-center">
              {user.levelLanguage < 65 ? (
                <Button className="bg-[#BB2D3B] text-white w-[80px]">
                  Başarısız
                </Button>
              ) : (
                <Button className="bg-[#157347] text-white w-[80px]">
                  Başarılı
                </Button>
              )}
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>Giden Öğrencinin Ders Değişikliği İzin Dilekçesi </td>
            <td>
              {user.files1 ? (
                <>
                  {" "}
                  <Button className="bg-[#157347] text-white w-[80px]">
                    Yüklendi
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="bg-[#FF9800] text-white w-[100px]">
                    Yüklenmedi
                  </Button>
                </>
              )}
            </td>
            <td colSpan={2} className="text-center">
              {" "}
              {user.files1 ? (
                <>
                  {" "}
                  <Button className="bg-[#157347] text-white w-[80px]">
                    Yüklendi
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button
                    className="bg-[#FF9800] text-white w-[100px]"
                    onClick={(e) => submitFile1(e)}
                  >
                    Yükle
                  </Button>
                </>
              )}
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>Erasmus+ Öğrenci Beyannamesi </td>
            <td>
              {user.files2 ? (
                <>
                  {" "}
                  <Button className="bg-[#157347] text-white w-[80px]">
                    Yüklendi
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="bg-[#FF9800] text-white w-[100px]">
                    Yüklenmedi
                  </Button>
                </>
              )}
            </td>
            <td colSpan={2} className="text-center">
              {" "}
              {user.files2 ? (
                <>
                  {" "}
                  <Button className="bg-[#157347] text-white w-[80px]">
                    Yüklendi
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button
                    className="bg-[#FF9800] text-white w-[80px]"
                    onClick={(e) => submitFile2(e)}
                  >
                    Yükle
                  </Button>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
      {!user.teacherSubmit ? (
        <div
          style={{
            backgroundColor: "#D1E7DD",
            width: "100%",
            padding: "20px",
            fontWeight: "bold",
            color: "#0f5132",
          }}
        >
          Erasmus Başvurunuz Onaylandı . Kazandığınız Ülke : {user.country}
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#F8D7DA",
            width: "100%",
            padding: "20px",
            fontWeight: "bold",
            color: "#842029",
          }}
        >
          Erasmus Başvurunuz Reddedildi.
        </div>
      )}
    </section>
  );
};

export default Information;
