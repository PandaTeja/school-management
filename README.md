# school-management

Introduction
This is a backend solution for a school management system that allows superadmins to manage schools and school administrators to manage classrooms and students. It includes JWT-based authentication and role-based access control (RBAC) to ensure secure and organized management.

Core Features
Role-Based Access Control (RBAC): Different roles for superadmins and school administrators.
JWT Authentication: Secure login and user management.
CRUD Operations: Fully functional APIs to manage schools, classrooms, and students.
Rate Limiting & Security: APIs are rate-limited and secured to prevent abuse.
Input Validation & Error Handling: Comprehensive input validation with proper HTTP status codes and error messages.
API Endpoints
Schools API (Managed by Superadmins)
Create a School

POST /api/schools
Request Body: { name, address, contactInfo, ... }
Get All Schools

GET /api/schools
Get School by ID

GET /api/schools/{schoolId}
Update School

PUT /api/schools/{schoolId}
Request Body: { name, address, contactInfo, ... }
Delete School

DELETE /api/schools/{schoolId}
Classrooms API (Managed by School Administrators)
Create a Classroom

POST /api/schools/{schoolId}/classrooms
Request Body: { name, capacity, resources, ... }
Get All Classrooms for a School

GET /api/schools/{schoolId}/classrooms
Get Classroom by ID

GET /api/schools/{schoolId}/classrooms/{classroomId}
Update Classroom

PUT /api/schools/{schoolId}/classrooms/{classroomId}
Request Body: { name, capacity, resources, ... }
Delete Classroom

DELETE /api/schools/{schoolId}/classrooms/{classroomId}
Students API (Managed by School Administrators)
Enroll a Student

POST /api/schools/{schoolId}/students
Request Body: { name, age, classId, ... }
Get All Students for a School

GET /api/schools/{schoolId}/students
Get Student by ID

GET /api/schools/{schoolId}/students/{studentId}
Update Student Profile

PUT /api/schools/{schoolId}/students/{studentId}
Request Body: { name, age, classId, ... }
Transfer Student

PATCH /api/schools/{schoolId}/students/{studentId}/transfer
Request Body: { newSchoolId }
Delete Student

DELETE /api/schools/{schoolId}/students/{studentId}
Authentication & Authorization
User Registration (Superadmins)

POST /api/auth/register
Request Body: { email, password, role }
User Login

POST /api/auth/login
Request Body: { email, password }
Get User Profile

GET /api/auth/profile
Database Schema
The database schema includes the following collections:

Schools: Stores school data (name, address, contact information).
Classrooms: Stores classroom data (name, capacity, resources) and links to schools.
Students: Stores student data (name, age, enrolled classes) and links to schools.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/school-management-api.git
cd school-management-api
Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file and set the following variables:
makefile
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
Run the application:

bash
Copy code
npm start
