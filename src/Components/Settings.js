import React, { useState } from 'react'
import SettingsAddBank from './SettingsAddBank'
import SettingsBankList from './SettingsBankList'
import { Link } from 'react-router-dom'
const Settings = () => {
    
    return (
        <div>
        <div className='row  p-3 justify-content-between'>
            <SettingsAddBank/>
            <SettingsBankList/>
        </div>
        <Link to="/">Home</Link>
        </div>
        
    )
}
export default Settings
