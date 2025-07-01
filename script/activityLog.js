document.getElementById("complete-btn-1").addEventListener("click",function(){
    // For alert
    alert("Board updated Successfully");
    // For real time
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US");
    // Status message update
    const title = "Fix Mobile Button Issue";
    const message = `You have completed the task ${title} at ${timeString}`
    document.getElementById("statusMessage-1").textContent = message;
    // Change the button color & disable it
    this.classList.add("completed");
    this.disabled = true;
    //Task assign due
    const six = document.getElementById("six").innerText;
    console.log(typeof six);
    const convertedSix = parseInt(six);
    const minus = convertedSix - 1;
    document.getElementById("six").innerText = minus ;
    // Twenty three
    const t23 = document.getElementById("t23").innerText;
    console.log(typeof t23);
    const convertedT23 = parseInt(t23);
    const sum = convertedT23 + 1;
    document.getElementById("t23").innerText = sum ;
});

document.getElementById("complete-btn-2").addEventListener("click",function(){
    // For alert
    alert("Board updated Successfully");
    // For real time
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US");
    // Status message update
    const title = "Add Dark Mode";
    const message = `You have completed the task ${title} at ${timeString}`
    document.getElementById("statusMessage-2").textContent = message;
    // Change the button color & disable it
    this.classList.add("completed");
    this.disabled = true;
    //Task assign due
    const six = document.getElementById("six").innerText;
    console.log(typeof six);
    const convertedSix = parseInt(six);
    const minus = convertedSix - 1;
    document.getElementById("six").innerText = minus ;
    // Twenty three
    const t23 = document.getElementById("t23").innerText;
    console.log(typeof t23);
    const convertedT23 = parseInt(t23);
    const sum = convertedT23 + 1;
    document.getElementById("t23").innerText = sum ;
});

document.getElementById("complete-btn-3").addEventListener("click",function(){
    // For alert
    alert("Board updated Successfully");
    // For real time
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US");
    // Status message update
    const title = "Optimize Home page";
    const message = `You have completed the task ${title} at ${timeString}`
    document.getElementById("statusMessage-3").textContent = message;
    // Change the button color & disable it
    this.classList.add("completed");
    this.disabled = true;
    //Task assign due
    const six = document.getElementById("six").innerText;
    console.log(typeof six);
    const convertedSix = parseInt(six);
    const minus = convertedSix - 1;
    document.getElementById("six").innerText = minus ;
    // Twenty three
    const t23 = document.getElementById("t23").innerText;
    console.log(typeof t23);
    const convertedT23 = parseInt(t23);
    const sum = convertedT23 + 1;
    document.getElementById("t23").innerText = sum ;
});

document.getElementById("complete-btn-4").addEventListener("click",function(){
    // For alert
    alert("Board updated Successfully");
    // For real time
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US");
    // Status message update
    const title = "Add new emoji 🤲";
    const message = `You have completed the task ${title} at ${timeString}`
    document.getElementById("statusMessage-4").textContent = message;
    // Change the button color & disable it
    this.classList.add("completed");
    this.disabled = true;
    //Task assign due
    const six = document.getElementById("six").innerText;
    console.log(typeof six);
    const convertedSix = parseInt(six);
    const minus = convertedSix - 1;
    document.getElementById("six").innerText = minus ;
    // Twenty three
    const t23 = document.getElementById("t23").innerText;
    console.log(typeof t23);
    const convertedT23 = parseInt(t23);
    const sum = convertedT23 + 1;
    document.getElementById("t23").innerText = sum ;
});

document.getElementById("complete-btn-5").addEventListener("click",function(){
    // For alert
    alert("Board updated Successfully");
    // For real time
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US");
    // Status message update
    const title = "Integrate OpenAI API";
    const message = `You have completed the task ${title} at ${timeString}`
    document.getElementById("statusMessage-5").textContent = message;
    // Change the button color & disable it
    this.classList.add("completed");
    this.disabled = true;
    //Task assign due
    const six = document.getElementById("six").innerText;
    console.log(typeof six);
    const convertedSix = parseInt(six);
    const minus = convertedSix - 1;
    document.getElementById("six").innerText = minus ;
    // Twenty three
    const t23 = document.getElementById("t23").innerText;
    console.log(typeof t23);
    const convertedT23 = parseInt(t23);
    const sum = convertedT23 + 1;
    document.getElementById("t23").innerText = sum ;
});

document.getElementById("complete-btn-6").addEventListener("click",function(){
    // For alert
    alert("Board updated Successfully");
    alert("Congrats!!! You have completed all the current task")
    // For real time
    const now = new Date()
    const timeString = now.toLocaleTimeString("en-US");
    // Status message update
    const title = "Improve Job searching";
    const message = `You have completed the task ${title} at ${timeString}`
    document.getElementById("statusMessage-6").textContent = message;
    // Change the button color & disable it
    this.classList.add("completed");
    this.disabled = true;
    //Task assign due
    const six = document.getElementById("six").innerText;
    console.log(typeof six);
    const convertedSix = parseInt(six);
    const minus = convertedSix - 1;
    document.getElementById("six").innerText = minus ;
    // Twenty tree
    const t23 = document.getElementById("t23").innerText;
    console.log(typeof t23);
    const convertedT23 = parseInt(t23);
    const sum = convertedT23 + 1;
    document.getElementById("t23").innerText = sum ;
});

//  Clear history funtionally
document.getElementById("clear-btn").addEventListener("click",function(){
    //  Clear the Activity Log
    document.getElementById("clear-history").innerHTML= " ";
    // Clear the Status Message
    document.getElementById('statusMessage-1').textContent = " ";
    document.getElementById('statusMessage-2').textContent = " ";
    document.getElementById('statusMessage-3').textContent = " ";
    document.getElementById('statusMessage-4').textContent = " ";
    document.getElementById('statusMessage-5').textContent = " ";
    document.getElementById('statusMessage-6').textContent = " ";
});

// Connect html file
document.getElementById("discover").addEventListener("click",function(event){
    event.preventDefault();
    window.location.href = "./discover.html" ;
});