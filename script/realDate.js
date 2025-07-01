function updateDate() {
      const date = new Date();
      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      const dayOfWeek = weekdays[date.getDay()];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const year = date.getFullYear();

      document.getElementById("dayOfWeek").textContent = dayOfWeek;
      document.getElementById("fullDate").textContent = `${month} ${day} ${year}`;
    }

    updateDate();
    
    setInterval(updateDate, 1000);