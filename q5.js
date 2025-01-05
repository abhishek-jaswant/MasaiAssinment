 const distance = prompt("Enter the distance in km");
 const time = prompt("Enter the time in hours");
    const speed = distance / time;
    if (speed > 40) {
        console.log("Aply the break");
    } else {
        console.log("Keep going");
    }
