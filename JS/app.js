window.addEventListener('load', ()=> {
    let dayHTML = document.getElementById('day');
    let monthHTML = document.getElementById('month');
    let yearHTML = document.getElementById('year');
    let hourHTML = document.getElementById('hour');
    let minutoHTML = document.getElementById('minutes');
    let secondsHTML = document.getElementById('seconds');




    const mostrarHora = () => {
        let fecha = new Date();
        let day = fecha.getDay();
        let month = fecha.getMonth();
        let year = fecha.getFullYear();
        let hour = fecha.getHours();
        let minutes = fecha.getMinutes();
        let seconds = fecha.getSeconds(); 
    
        dayHTML.textContent = String(day+'/').padStart(3, "0");
        monthHTML.textContent = String(month+ "/").padStart(3, "0");
        yearHTML.textContent = year;
        hourHTML.textContent = String(hour+':').padStart(3, "0");
        minutoHTML.textContent = String(minutes+':').padStart(3, "0");
        secondsHTML.textContent = String(seconds).padStart(2, "0");

        setTimeout(mostrarHora, 1000)
    } 
    
    mostrarHora();
})
