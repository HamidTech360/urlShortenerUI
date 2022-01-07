import React from 'react';
import './css/setting.css'
const Settings = ()=>{
    return(
        <div className="settings">

            <div className="setting-form-box">
                <div className="setting-header">
                    Settings
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control setting-inpt" 
                        placeholder="Gmail"
                        name="email"
                        
                     />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control setting-inpt" 
                        placeholder=" Password"
                        name="password"
                        
                     />
                </div>
                <div className="form-group">
                   <button className="btn btn-danger btn-save-changes ">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Settings;