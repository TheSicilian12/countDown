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

    let str = days + ' days ' + hours + ' hours ' + minutes + ' minutes ' + seconds + ' seconds ';
    return str
};
