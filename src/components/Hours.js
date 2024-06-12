import React from "react";

const Hours = () => {
    const shelterHours = [
        { day: "Monday", open: "10:00", close: "16:00" },
        { day: "Tuesday", open: "10:00", close: "16:00" },
        { day: "Wednesday", open: "10:00", close: "16:00" },
        { day: "Thursday", open: "10:00", close: "16:00" },
        { day: "Friday", open: "10:00", close: "16:00" },
        { day: "Saturday", open: "10:00", close: "16:00" },
        { day: "Sunday", open: "09:00", close: "10:00" },
    ];

    return (
        <div>
            {shelterHours.map((hour, index) => (
                <div key={index}>
                    <p>{hour.day}: {hour.open} - {hour.close}</p>
                </div>
            ))}
        </div>
    );
}

export default Hours;