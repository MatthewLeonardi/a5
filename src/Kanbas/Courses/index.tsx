// import { courses } from "../Database";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import { Navigate, Route, Routes, useParams } from "react-router";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
export default function Courses({ courses }: { courses: any[]; }) {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    return (
      <div id="wd-courses">
        <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}</h2> <hr />
        <div className="d-flex">
        <div className="d-none d-md-block">
            <CoursesNavigation />
            </div>
            <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<h2>Assignments</h2>} />
              <Route path="Assignments/:aid" element={<h2>Assignment Editor</h2>} />
              <Route path="People" element={<h2>People</h2>} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
          </div></div>
      </div>
  );}
  