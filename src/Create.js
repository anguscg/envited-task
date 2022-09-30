
import React from 'react';
import './Create.css'

function Create() {
    

    return (
        <div className="wrapper">
        <div>
            <h1>Lets get some details first...</h1>
            <form action="">
                <div className="form-inputs">
                    <div className="input-fields"><input type="text" name="" id="" placeholder="Event name..."/></div>
                    <div className="input-fields"><input type="text" name="" id="" placeholder="Host name..."/></div>
                    <div className="input-fields">
                        <label htmlFor="">Start Time</label>
                        <input type="date"/></div>
                    <div className="input-fields">
                        <label htmlFor="">End Date</label>
                        <input type="date"/></div>
                    <div className="input-fields"><input type="text" placeholder="Location"/></div>
                </div>  
            </form>
        </div>
            
        </div>
    )
}

export default Create;