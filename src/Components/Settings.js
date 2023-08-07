import React, { useState } from 'react'
import SettingsAddBank from './SettingsAddBank'
import SettingsBankList from './SettingsBankList'
import { Link } from 'react-router-dom'
import EditBank from './EditBank'
const Settings = () => {
    const [edit,showEdit] = useState(false)
    return (
        <>
            {edit?<div className="container">
                <EditBank showEdit = {showEdit}/>
            </div>:<div className="container">
                <SettingsAddBank/>
            </div>}
            <div className="container ">
            <SettingsBankList showEdit = {showEdit}/>
            </div>
        </>
    )
}
export default Settings
