import React from "react";
import "./Data-timezone.scss";
import { DateTime } from "luxon";

function DateTimezone() {
  const currentDateTime = DateTime.now(); // Current date and time in the system's default timezone

  const specificDateTime = DateTime.fromISO("2023-06-24T10:00:00", {
    zone: "America/New_York",
  }); // Specific date and time in a particular timezone

  console.log("currentDateTime", currentDateTime);
  console.log("specificDateTime", specificDateTime);

  const convertedDateTime = specificDateTime.toLocal();

  const formattedDateTime = convertedDateTime.toLocaleString(
    DateTime.DATETIME_MED
  );
  const addTimeToCurrent = DateTime.now().plus({ minutes: 15, seconds: 8 });
  const timeDifference = currentDateTime
    .diff(convertedDateTime, ["days", "hours", "minutes"])
    .toObject();

  return (
    <div className="date-timezone">
      <h1 className="text-[42px] font-extrabold leading-[70px]">
        Date and Time Examples
      </h1>
      <p className="text-sky-400">
        Current DateTime: {currentDateTime.toISO()}
      </p>
      <p className="text-sky-400/100">
        Specific DateTime (New York): {specificDateTime.toISO()}
      </p>
      <p className="text-blue-600">
        Converted DateTime (Local Timezone): {convertedDateTime.toISO()}
      </p>
      <p className="text-sky-400/50">Formatted DateTime: {formattedDateTime}</p>
      <p className="text-[#50d71e]">
        Time Difference:
        {`${timeDifference.days} days, ${timeDifference.hours} hours, ${timeDifference.minutes} minutes`}
      </p>
      <p className="text-[#a16207]">
        Added tim is 15m and 8s : {`${addTimeToCurrent}`}
      </p>
    </div>
  );
}

export default DateTimezone;
