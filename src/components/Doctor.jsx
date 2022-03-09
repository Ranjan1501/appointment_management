import React, { useEffect, useState } from "react";
import logo from "./doctor.svg";
import "./Doctor.css";
import { Link } from "react-router-dom";
function Doctor() {
  const [data, setData] = useState([]);
  const [searchDoctor, setSearchDoctor] = useState("");
  console.log(searchDoctor);
  useEffect(() => {
    getDoctor();
  }, []);

  const getDoctor = () => {
    fetch("http://localhost:4000/doctors")
      .then((res) => res.json())
      .then((data) => {
        setData(data.doctors);
        console.log(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Doctor">
      <br />
      <div>
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchDoctor"
            placeholder="Search from City "
            onChange={(e) => setSearchDoctor(e.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
      {data
        // .filter((e) => {
        //   if (searchDoctor === "") return e;
        //   else if (e.first_name.includes(searchDoctor)) return e;
        // })
        // .filter((e) => {
        //   if (searchDoctor === "") return e;
        //   else if (e.speciality_ids.speciality_type.includes(searchDoctor))
        //     return e;
        // })
        .filter((e) => {
          if (searchDoctor == "") return e;
          else if (e.clinic_id.city_name.includes(searchDoctor)) return e;
          else return "Service Not Available";
        })
        .map((doctor) => (
          <div key={doctor._id}>
            <div className="docData">
              <div className="docImage">
                <img src={logo} alt="docImage" />
              </div>
              <div className="docDetails">
                <h3>
                  {" "}
                  Name: {doctor.first_name} {doctor.last_name}{" "}
                </h3>
                <h3> Gender: {doctor.gender} </h3>
                <h3> Name: {doctor.age}</h3>
                <div className="docSpeciality">
                  {" "}
                  <h3> Speciality: </h3>
                  {doctor.speciality_ids.map((e) => (
                    <> {e.speciality_type} </>
                  ))}
                </div>
                <h3> Rate: {doctor.rate} </h3>
                <h3>
                  {" "}
                  Clinic: {doctor.clinic_id.location},
                  {doctor.clinic_id.city_name} .
                </h3>
              </div>
            </div>
            <Link to={`/${doctor._id}`}>
              <button> See Details</button>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default Doctor;
