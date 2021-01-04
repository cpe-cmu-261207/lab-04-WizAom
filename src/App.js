import { useState } from "react";
import {CourseCard} from "./components/CourseCard";

function App() {
  const grade = ["A", "B+", "B", "C+", "C", "D+", "D", "F", "W"];
  const credit = [1, 2, 3];

  const [myCourses, setMyCourse] = useState([]);
  const [inputData, setInputData] = useState({name:"",grd:"A",crd:"1"});
  const [GPA, setGPA] = useState(4.0);

  /**
   * Calculate the GPA of current courses
   * @returns the GPA of current courses
   */
  function calculateGPA(cc) {
    // TODO
    var r_gpa = 0
    var r_cre  = 0 
    var cal_gpa = 0
    cc.forEach((item) => {
      switch(item.grd){
        case 'A' :
          r_gpa = 4
          r_cre += Number(item.crd) 
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'B+' :
          r_gpa = 3.5
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'B' :
          r_gpa = 3
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'C+' :
          r_gpa = 2.5
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'C' :
          r_gpa = 2
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'D+' :
          r_gpa = 1.5
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'D' :
          r_gpa = 1
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
        case 'F' :
          r_gpa = 0
          r_cre += Number(item.crd)
          cal_gpa += r_gpa * Number(item.crd)
          break
      }  
    });
    setGPA(cal_gpa / r_cre) 
  }

  /**
   * Should be called when a course is to be added to the list.
   * After adding the course to the list, the displayed GPA should be updated.
   * @param {*} event 
   */
  function addCourse(event) {
    event.preventDefault();
    // TODO
    console.log(inputData.name)
    const course = [...myCourses,inputData]
    setMyCourse(course)
    // recalculate GPA
    calculateGPA(course);
  }

  /**
   * Should be called when a course is to be removed from the list.
   * After removing the course from the list, the displayed GPA should be updated.
   * @param {*} id 
   */
  function onDeleteCourse(id) {
    // TODO
    const course = myCourses.filter(item => {
      return item.name !== id
    })
    setMyCourse(course)
    calculateGPA(course)
  }

  return (
    <div className="bg-purple-300 container mx-auto h-screen">
      <h1 className="bg-yellow-400 text-left text-10x10 p-7 tracking-widest">
        GPA CALCULATOR 
      </h1>
      <div className="h-2/3 md:w-2/4 p-3 rounded-lg mx-auto overflow-auto">
        <h1 className="bg-pink-400  rounded-3xl p-1 text-center text-2xl my-3">My courses</h1>
        {/* TODO display courses */}
        {myCourses.map(item => {
          return <CourseCard name ={item.name} grd = {item.grd} crd ={item.crd} del={onDeleteCourse} />
        })}
        <select className = "bg-red-200  rounded-5xl p-1 text-left" onChange = { e => 
            setInputData({...inputData,crd: e.currentTarget.value}) 
          }>
          {credit.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
        <select className = "bg-red-200 rounded-5xl p-1 text-left " type="text" onChange = { e => 
           setInputData({...inputData,grd: e.currentTarget.value}) 
          }>
          {grade.map(item => {
            return <option value={item}>{item}</option>
          })}
        </select>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
            <form onSubmit ={
          e => addCourse(e)}>
          <input type="text" onChange = { e => 
            setInputData({...inputData,name: e.currentTarget.value}) 
          }/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className = "bg-blue-500 rounded-2xl p-1 text-left hover:bg-red-200" type="submit"> Add</button>
       </form>
      </div>
      {/* TODO add course input form */}
      {/* TODO display calculated GPA */}
      <p className = "bg-green-500 rounded-2xl p-2 text-center "> gpa is {GPA}</p>
    </div>
  );
}

export default App;