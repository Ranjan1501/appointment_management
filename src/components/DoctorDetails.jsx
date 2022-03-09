import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "./doctor.svg";

function DoctorDetails() {
  const { id } = useParams();
  const [doctorDetails, setDoctorDetails] = useState([]);
  useEffect(() => {
    getFlatDetails();
  }, []);

  let getFlatDetails = () => {
    fetch(`http://localhost:4000/doctors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.flats);
        setDoctorDetails(data.doctors);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
  return (
    <div className="Doctor">
      <br />
      {doctorDetails
        // .filter((e) => {
        //   if (searchDoctor === "") return e;
        //   else if (e.first_name.includes(searchDoctor)) return e;
        // })
        // .filter((e) => {
        //   if (searchDoctor === "") return e;
        //   else if (e.speciality_ids.speciality_type.includes(searchDoctor))
        //     return e;
        // })
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
          </div>
        ))}
    </div>
  );
}

export default DoctorDetails;
