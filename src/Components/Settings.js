import React, { useState } from 'react'
import SettingsAddBank from './SettingsAddBank'
import SettingsBankList from './SettingsBankList'
const Settings = () => {
    
    return (
        <div className='row  p-3 justify-content-between'>
            <SettingsAddBank/>
            <SettingsBankList/>
        </div>
    )
}
export default Settings
