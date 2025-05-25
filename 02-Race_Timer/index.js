document.getElementById("time_display").innerText = '5 Sec';

async function start() {
    for (let i = 5; i >= 0; i--) {
        document.getElementById("time_display").innerText = `${i} Sec`;
        await new Promise(resolve => setTimeout(resolve, 1000));
    }

    document.getElementById("started").innerHTML = `YOOO!!! THE RACE STARTED`

}