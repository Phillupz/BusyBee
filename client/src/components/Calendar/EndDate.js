import React from "react"
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css"
import "./DateAndTime.css"

function EndDate({newEvent, setNewEvent}) {

    return (
      <div className="Date">
        <Datetime
          value={newEvent.end}
          onChange={(end) => {
            const convertedDate = end.toDate()
            setNewEvent({ 
              ...newEvent, 
              end: convertedDate})
          }}
          timeFormat={true}
          closeOnSelect={true}
          inputProps={{ className: "datetime", placeholder:"Choose End Date"}}
        />
      </div>
    )
  }


export default EndDate
