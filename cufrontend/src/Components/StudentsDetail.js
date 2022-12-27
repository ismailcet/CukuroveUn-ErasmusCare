import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import Form from "react-bootstrap/Form";
import axios from "axios";

const StudentsDetail = ({ user }) => {
  const [country, setCountry] = useState();
  const [levelLanguage, setLevelLanguage] = useState();
  const changeGpa = () => {
    console.log(levelLanguage);
    const putGpa = async () => {
      const response = await axios.put(
        `http://localhost:5000/api/students/${user._id}`,
        {
          levelLanguage: levelLanguage,
        }
      );
    };
    putGpa();
  };

  const submitErasmus = async (type) => {
    if (type === "onay") {
      const response = await axios.put(
        `http://localhost:5000/api/students/${user._id}`,
        {
          teacherSubmit: true,
          country: country,
        }
      );
    } else {
      const response = await axios.put(
        `http://localhost:5000/api/students/${user._id}`,
        {
          teacherSubmit: false,
        }
      );
    }
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
            <td>{user.gpa}</td>
            <td className="text-center">
              {user.gpa >= 2.0 ? (
                <>
                  <Button className="bg-[#157347] text-white w-[80px]">
                    Başarılı
                  </Button>
                </>
              ) : (
                <>
                  <Button className="bg-[#BB2D3B] text-white w-[80px]">
                    Başarısız
                  </Button>
                </>
              )}
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>Dil Seviyesi </td>
            <td>
              <InputGroup size="sm" className="mt-3">
                <Form.Control
                  aria-label="Small"
                  aria-describedby="inputGroup-sizing-sm"
                  defaultValue={user.levelLanguage}
                  onChange={(e) => setLevelLanguage(e.target.value)}
                  onBlur={() => changeGpa()}
                />
              </InputGroup>
            </td>
            <td className="text-center">
              {user.levelLanguage > 65 ? (
                <>
                  <Button className="bg-[#157347] text-white w-[80px]">
                    Başarılı
                  </Button>
                </>
              ) : (
                <>
                  <Button className="bg-[#BB2D3B] text-white w-[80px]">
                    Başarısız
                  </Button>
                </>
              )}
            </td>
          </tr>
          <tr className="h-[50px]">
            <td>Giden Öğrencinin Ders Değişikliği İzin Dilekçesi </td>
            <td>
              {" "}
              {user.files1 ? (
                <>
                  {" "}
                  <Button className="bg-[#157347] text-white w-[120px]">
                    Yüklendi
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="bg-[#FF9800] text-white w-[120px]">
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
                  <Button className="bg-[#157347] text-white w-[120px]">
                    Onayla
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="bg-[#BB2D3B] text-white w-[80px]">
                    Bildirim Gönder
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
                  <Button className="bg-[#157347] text-white w-[120px]">
                    Yüklendi
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="bg-[#FF9800] text-white w-[120px]">
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
                  <Button className="bg-[#157347] text-white w-[120px]">
                    Onayla
                  </Button>
                </>
              ) : (
                <>
                  {" "}
                  <Button className="bg-[#BB2D3B] text-white w-[80px]">
                    Bildirim Gönder
                  </Button>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
      <div style={{ width: "100vw" }}>
        <Form.Select
          aria-label="Default select example"
          style={{ width: "20vw", display: "flex", marginLeft: "220px" }}
          onChange={(e) => setCountry(e.target.value)}
        >
          <option>Ülke Seçimi</option>
          <option value="İspanya">İspanya</option>
          <option value="Fransa">Fransa</option>
          <option value="Polonya">Polonya</option>
          <option value="Romanya">Romanya</option>
          <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
        </Form.Select>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Button
          className="bg-[#BB2D3B] text-white w-[120px]"
          onClick={() => {
            if (window.confirm("Onaylıyor musunuz ? ")) {
              submitErasmus("red");
            }
          }}
        >
          Red
        </Button>
        <Button
          className="bg-[#157347] text-white w-[120px]"
          onClick={() => {
            if (window.confirm("Onaylıyor musunuz ? ")) {
              submitErasmus("onay");
            }
          }}
        >
          Onay
        </Button>
      </div>
    </section>
  );
};

export default StudentsDetail;
