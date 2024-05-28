document.addEventListener('DOMContentLoaded', function() {
    
    checkOpeningHours();

    
    setInterval(checkOpeningHours, 60000);  // Update every minute
});

function checkOpeningHours() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();

    // Define opening and closing hours for each day
    const openingHours = [
        { start: [12, 30], end: [18, 0] },  // Monday
        { start: [8, 30], end: [18, 0] },   // Tuesday - Thursday
        { start: [8, 30], end: [18, 0] },   // Wednesday
        { start: [8, 30], end: [18, 0] },   // Thursday
        { start: [8, 30], end: [19, 30] },  // Friday
        { start: [9, 0], end: [17, 0] },    // Saturday
        null,                               // Sunday (closed)
    ];

    const currentDayOpeningHours = openingHours[dayOfWeek];

    if (!currentDayOpeningHours) {
        setStatus("Gesloten");  // Sunday
        return;
    }

    const [startHour, startMinute] = currentDayOpeningHours.start;
    const [endHour, endMinute] = currentDayOpeningHours.end;

    if (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) {
        if (currentHour < endHour || (currentHour === endHour && currentMinute < endMinute)) 
        {
            setStatus("Geopend");
        } else 
        {
            setStatus("Gesloten");
        }
    } else 
    {
        setStatus("Gesloten");
    }
}

function setStatus(status) 
{
    document.getElementById('status').textContent = `Winkel is ${status}`;
}


document.addEventListener('DOMContentLoaded', function () 
{
    const menuIcon = document.querySelector('.menu-icon');
    const navbarItems = document.querySelector('.navbar-2-items');

    menuIcon.addEventListener('click', function () {
        navbarItems.classList.toggle('show');
    });
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

