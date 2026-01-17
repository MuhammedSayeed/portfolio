"use client";
const CityTime = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZoneName: "shortOffset",
    };

    const parts = new Intl.DateTimeFormat("en-US", options).formatToParts(now);

    const hour = parts.find((p) => p.type === "hour")?.value;
    const minute = parts.find((p) => p.type === "minute")?.value;
    const tz = parts.find((p) => p.type === "timeZoneName")?.value;

    const formattedTime = {
        time: `${hour}:${minute}`,
        offset: `(${tz})`
    };

    return (
        <div className="flex flex-col text-secondary font-spline space-y-1 text-xs">
            <span className="uppercase tracking-wider leading-none">
                Cairo, Egypt
            </span>
            <div className="leading-none space-x-2">
                <span className="leading-none text-gray-500">{formattedTime.offset}</span>
                <span suppressHydrationWarning>{formattedTime.time}</span>
            </div>
        </div>
    );
};

export default CityTime;
