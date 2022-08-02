import React from "react"
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css"
import "./DateAndTime.css"

function StartDate({newEvent, setNewEvent}) {
  return (
    <div className="Date">
      <Datetime
        value={newEvent.start}
        onChange={(start) => {
          const convertedDate = start.toDate()
          setNewEvent({ 
            ...newEvent, 
            start: convertedDate
          })
        }}
        timeFormat={true}
        closeOnSelect={true}
        inputProps={{ className: "datetime", placeholder:"Choose Start Date"}}
      />
    </div>
  )
}


export default StartDate
