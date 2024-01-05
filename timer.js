function timer(holiday) {
    let todayYear = new Date().getFullYear();
    let holidayObj = {
        'christmas': [new Date("Dec 25, " + todayYear + " 00:00:00").getTime(), 'Christmas'],
        'newYearsEve': [new Date("Dec 31, " + todayYear + " 00:00:00").getTime(), "New Year's Eve"],
        'now': [new Date(), 'now'],
    }

    let now = Date.now();
    let holidayDate = holidayObj[holiday][0]
    let timeDif = holidayDate - now;

    if (timeDif <= 0) return -1

    let days = Math.floor(timeDif / (1000 * 60 * 60 * 24))
    let hours = Math.floor(timeDif % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes = Math.floor(timeDif % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(timeDif % (1000 * 60) / 1000);

    let str = days + ' days ' + hours + ' hours ' + minutes + ' mins ' + seconds + ' secs ';
    return str
};

function startTimer(holiday) {
    let x = setInterval(function () {
        let time = timer(holiday)

        if (time < 0) {
            clearInterval(x);
            document.getElementById('time').innerHTML = "EXPIRED";
        } else {
            document.getElementById('time').innerHTML = time;
        }
    }, 1000);
}
