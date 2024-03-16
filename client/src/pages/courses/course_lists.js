import React, { useState, useEffect } from 'react';
import SearchBar from './search';
import './courses.css';


const csc_courses_test = [
    [88486,"CSC",1301,16,4,"HON PRINCIPLES OF COMP SCI I Lecture/Supervised Laboratory","Sunderraman, Raj Saghaeiannejad Esfahani, Hossein (Primary)","Lecture/Supervised Laboratory"],
    [91694,"CSC",1301,24,4,"PRINCIPLES OF COMPUTER SCI I Lecture/Supervised Laboratory","Hawamdeh, Faris S. (Primary)","Lecture/Supervised Laboratory"],
    [89980,"CSC",1301,26,4,"PRINCIPLES OF COMPUTER SCI I Lecture/Supervised Laboratory","Hawamdeh, Faris S. (Primary)","Lecture/Supervised Laboratory"],
    [83476,"CSC",1302,2,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [88841,"CSC",1302,4,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [88842,"CSC",1302,6,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [88843,"CSC",1302,8,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Sunderraman, Raj Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83477,"CSC",1302,10,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83478,"CSC",1302,12,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83479,"CSC",1302,14,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83480,"CSC",1302,16,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83481,"CSC",1302,18,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83486,"CSC",1302,20,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83485,"CSC",1302,22,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83484,"CSC",1302,24,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83483,"CSC",1302,26,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83482,"CSC",1302,28,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83487,"CSC",1302,30,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [89912,"CSC",1302,32,4,"PRINCIPLES OF COMPUTER SCI II Lecture/Supervised Laboratory","Islam, Towhid (Primary)","Lecture/Supervised Laboratory"],
    [83489,"CSC",2510,2,3,"THEOR FOUNDATIONS OF COMP SCI Lecture","","Lecture"],
    [82891,"CSC",2510,4,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [82892,"CSC",2510,6,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [83488,"CSC",2510,8,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [82889,"CSC",2510,10,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [81547,"CSC",2510,12,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [81584,"CSC",2510,14,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [82890,"CSC",2510,16,3,"THEOR FOUNDATIONS OF COMP SCI Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [83491,"CSC",2720,2,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83493,"CSC",2720,4,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83494,"CSC",2720,6,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83492,"CSC",2720,8,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83499,"CSC",2720,10,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Tanvir, Farhan . (Primary)","Lecture/Supervised Laboratory"],
    [87426,"CSC",2720,12,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Tanvir, Farhan . (Primary)","Lecture/Supervised Laboratory"],
    [87425,"CSC",2720,14,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Tanvir, Farhan . (Primary)","Lecture/Supervised Laboratory"],
    [87424,"CSC",2720,16,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Tanvir, Farhan . (Primary)","Lecture/Supervised Laboratory"],
    [83497,"CSC",2720,18,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83496,"CSC",2720,20,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83495,"CSC",2720,22,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [83498,"CSC",2720,24,3,"DATA STRUCTURES Lecture/Supervised Laboratory","Pokharel, Shiraj (Primary)","Lecture/Supervised Laboratory"],
    [86172,"CSC",3210,2,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [87429,"CSC",3210,4,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [87432,"CSC",3210,6,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [87431,"CSC",3210,8,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86139,"CSC",3210,10,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86149,"CSC",3210,12,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86148,"CSC",3210,14,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86164,"CSC",3210,16,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86168,"CSC",3210,18,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86170,"CSC",3210,20,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"],
    [86166,"CSC",3210,22,4,"COMPUTER ORG & PROGRAMMING Lecture/Supervised Laboratory","","Lecture/Supervised Laboratory"]
  ];

const CourseList = () => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const [filteredCourses, setFilteredCourses] = useState([]);
    
    useEffect(() => {
        if (searchQuery === '') {
          setFilteredCourses([]);
        }
      }, [searchQuery]);

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = csc_courses_test.filter(([crn, subject, courseNumber, section, hours, title, professor, schedule_type]) =>
          title.toLowerCase().includes(query.toLowerCase()) ||
          courseNumber.toString().includes(query) || crn.toString().includes(query) || professor.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(filtered);
      };

    
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearch} />
            </div>
            <div className="col">
              <div className="course-list">
                {filteredCourses.length > 0 ? (
                  <div className='row'>
                    <h1>Course List</h1>
                    {filteredCourses.map(([crn, subject, courseNumber, section, hours, title, professor, schedule_type]) => (
                      <div key={crn} className="course-item">
                        <h4>{title}</h4>
                        <p>Subject: {subject}</p>
                        <p>CRN: {crn}</p>
                        <p>Course Number: {courseNumber}</p>
                        <p>Professor: {professor}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div id='filler-intro'>
                    <h1>Courses will appear here</h1>
                    <p>Ready to locate your courses and give valuable feedback? </p>
                    <p>Start by typing in the search to the right!</p>
                    <p>Enter a Course Name, CRN, Course Number, or Professor</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  export default CourseList