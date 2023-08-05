import React, { useState } from 'react'
import SettingsAddBank from './SettingsAddBank'
import SettingsBankList from './SettingsBankList'
import { Link } from 'react-router-dom'
import EditBank from './EditBank'
const Settings = () => {
    const [edit,showEdit] = useState(false)
    return (
        <div>
        <div className='row  p-3 justify-content-between'>
            {edit?<EditBank showEdit = {showEdit}/>:
            <SettingsAddBank/>}
            <SettingsBankList showEdit = {showEdit}/>
        </div>
        
        </div>
        
    )
}
export default Settings
