const currentTime = () => {
    const currentDate = new Date();
    // Define options for formatting the date
    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);
    let hours = currentDate.getHours();
    const meridiem = hours < 12 ? "AM" : "PM";
    hours = hours % 12 || 12; // Convert hours to 12-hour format
    let minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes} ${meridiem}`;

    return `${formattedDate} ${formattedTime}`;
};

module.exports = currentTime;