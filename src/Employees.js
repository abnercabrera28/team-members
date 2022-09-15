import React from 'react'
import { useState } from 'react'
import femaleProfile from "./images/femaleProfile.jpg"
import maleProfile from "./images/maleProfile.jpg"


const Employees = () => {

    return (
        <div className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-6'>
                    <select className='form-select form-select-lg' value={selectedTeam} onChange={handleSelectedTeam}>
                        <option value="TeamA">TeamA</option>
                        <option value="TeamB">TeamB</option>
                        <option value="TeamC">TeamC</option>
                        <option value="TeamD">TeamD</option>
                    </select>
                </div>
                <div className='col-8'>
                    <div className='card-collection'>
                    {
                        employees.map(employee => (
                            <div id={employee.id} className={(employee.teamName === selectedTeam ? "card m-2 standout" : "card m-2")} style={{cursor: "pointer"}} onClick={handleCardClick}>
                                {employee.gender === "male" ?
                                <img src={maleProfile} className="card-img-top" />
                                :<img src={femaleProfile} className="card-img-top" />}
                                <div className='card-body'>
                                    <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                                    <p className='card-text'><b>Designation: {employee.designation}</b></p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Employees