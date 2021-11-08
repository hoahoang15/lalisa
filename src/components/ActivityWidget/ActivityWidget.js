// libs
import React from 'react'
// images
import icon from "../../assets/image/icon_activity_widget.svg"
// styles
import "./ActivityWidget.css"

/**
 * ActivityWidget
 * @param {number} amount
 */
const ActivityWidget = ({ amount }) => {
    return (
        <div className="activityWidgetWrapper">
            <img src={icon} alt="icon" />
            <span className="subTitle">Tổng số người dùng</span>
            <strong className="number">{amount}</strong>
        </div>
    )
}

export default ActivityWidget
