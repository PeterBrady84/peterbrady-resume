/*========== Auto update employment duration ==========*/
function calcDate() {
    today = new Date()
        // Start date in current employment
    past = new Date(2020, 05, 30) // remember this is equivalent to 01 01 2020 - Format yyyy, mm, dd
    var diff = Math.floor(today.getTime() - past.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var years = Math.floor(days / 365)
    var months = Math.floor((days % 365) / 31);

    var message
    if (years == 0 && months == 0) {
        message = "(Less than a month)"
    } else if (years == 0 && months == 1) {
        message = "(" + months + " month)"
    } else if (years == 0 && months > 1) {
        message = "(" + months + " months)"
    } else if (years == 1 && months == 0) {
        message = "(" + years + " year)"
    } else if (years == 1 && months == 1) {
        message = "(" + years + " year, " + months + " month)"
    } else if (years == 1 && months > 1) {
        message = "(" + years + " year, " + months + " months)"
    } else if (years > 1 && months == 0) {
        message = "(" + years + " years)"
    } else if (years > 1 && months == 1) {
        message = "(" + years + " years, " + months + " month)"
    } else if (years > 1 && months > 1) {
        message = "(" + years + " years, " + months + " months)"
    }

    return message;
}