import React, { Component,useState, useEffect } from 'react';
import './Maintainence.css'
import Select from "react";
import data from './data.json';



class Maintainence extends Component {
    
    constructor () {
        super()
    this.state = {addCourseVisible: false,
                  addStudentVisible: false,
                  addStudentSubSectionVisible: false,
                  Subjects: ['sagar','deepak', 'hande']
                     }
                 }

    

    enableAddCourse = () => {this.setState({ addCourseVisible: !this.state.addCourseVisible });}

    enableAddStudent = () => {this.setState({ addStudentVisible: !this.state.addStudentVisible });}

    enableAddStudentSubSection = () => {this.setState({ addStudentSubSectionVisible: true });}

    

    render() {

        let options = this.state.Subjects.map((item) =>
            <option  key={item.array} > {item} </option>);

        return(
        	<div className="maintain" >

            		<h1 className="logo"> Course & Students maintainence </h1>

                    <div className ="part1">
                        <div className="course">Courses</div>
                        <div className="top_right">

                            <select   onChange={this.enableAddStudentSubSection} placeholder=" " name= "addcourse" >
                                {options} 
                            </select>

                            <button type="submit"  onClick={this.enableAddCourse} >
                                Add new Course 
                            </button>
                            <div className= {this.state.addCourseVisible? 'top_right_check_active':'top_right_check'} >
                                
                                <input type="text"  name="newCourseName"  />
                                
                                <button className="tick"  onClick={this.addCourse}> <i className="fa fa-check" onClick={this.addCourse} aria-hidden="true"></i> </button>
                                
                                <button className="cross" onClick={this.enableAddCourse} > <i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                            
                        </div>
                        
                    </div>


                    <div className= "part2">        
                        <div className="students">Students </div>              
                        <div className="bottom_right">

                            <select name= "addname" >
                                <option> </option>
                            </select>

                            <button type="submit" className= {this.state.addStudentSubSectionVisible ? 
                                "bottom_right_check_StudentSubSectionVisible_active":"bottom_right_check_StudentSubSectionVisible"} 
                                onClick={this.enableAddStudent} >
                                Add Student 
                            </button>

                            <div  className= {this.state.addStudentVisible ? 'bottom_right_check_active':'bottom_right_check'}>
                                <input type="text"   name="name" />
                                <button className="tick" > <i className="fa fa-check" aria-hidden="true"></i> </button>
                                <button className="cross" onClick={this.enableAddStudent}> <i className="fa fa-times" aria-hidden="true"></i></button>
                            </div>
                        </div>

                    </div>
                    
            </div>

                
        )
    }
}


export default Maintainence
//onChange={this.enableAddStudentSubSection} 
// 
// onChange={getData}

//  getData =(val) => {
//     if (val===''){
//         pass;}
//         else{
//         console.log(val.target.value) }
// }

// this.state.Subjects.tolowercase().add( .tolowercase());
    
// toggleoff = () => {
//     this.setState({ clicked: false });
// }
//
 //this.state.addStudentVisible ? 'part2_active':'part2'}
//{ Subjects.map(value) => (return  {Subjects.value.tolowercase()}  )} 
        // const [course, setCourse] = useState(null);
        // const [student, setStudent] = useState(null);
        // const [studentList, setStudentList] = useState([]);

        // const handleCourseChange = (obj) => {
        // setCourse(obj);
        // setStudentList(obj.students);
        // setStudent(null);
        // };
     
        // const handleStudentChange = (obj) => {
        // setStudent(obj);
        // };