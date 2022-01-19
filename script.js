function greet() {
    const time = new Date().getHours();
    let greeting;
    if (time < 10) {
        greeting = "Good morning";
    } else if (time < 17) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    document.querySelector(".greet").innerHTML = greeting;
} greet()
