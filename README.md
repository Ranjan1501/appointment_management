# Appointment_Management
Hospital Appointment
Hospital Appointment is a Appointment Management System made with Node.js & React.
Patients can create hospital appointments to departments and doctors they choose.
Doctors can open and close appointments, diagnose patients and choose diseases form completed appointments.

Installation
Clone Project for FrontEnd
$ git clone https://github.com/Ranjan1501/appointment_management.git
<br> 
Install dependencies and start both client 
<br> 
 backend server
$ for Backend
$ git clone https://github.com/Ranjan1501/apollo_backend.git
$ npm i
$ npm run server
Go to localhost:4000

$ for FrondEnd

$ npm i
$ npm start
Go to localhost:3000
Tech
Server Side: Node.js, Express

Client Side: React.js, Axios

Database: MongoDB

Deployed Demo
Deployed demo will be at here when it is ready.


API Reference
The backend and frontend communicate through REST Apis. On the frontend, we make Axios requests to the following routes:

Users
URI	Method	Operation
localhost:4000/users	get	get all users
api/users/:id	get	get a user

Doctors
URI	Method	Operation
localhost:4000/doctors	get	get all users
localhost:4000/doctors/:id	get	get a doctor

Slots
URI	Method	Operation
localhost:4000/slots	get	get all users
localhost:4000/slots/:id	get	get a doctor

Availabitlity
URI	Method	Operation
localhost:4000/availabities	get	get all users
localhost:4000/availabities/:id	get	get a doctor

Clinic
URI	Method	Operation
localhost:4000/clinics	get	get all users
localhost:4000/clinics/:id	get	get a doctor

Specility 
URI	Method	Operation
localhost:4000/specialities	get	get all users
localhost:4000/specialities/:id	get	get a doctor
