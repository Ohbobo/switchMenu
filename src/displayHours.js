export function getFormattedTime() {
    let maintenant = new Date();
    let heure = maintenant.getHours();
    let minute = maintenant.getMinutes();
    let seconde = maintenant.getSeconds();
    minute = minute < 10 ? '0' + minute : minute;
    seconde = seconde < 10 ? '0' + seconde : seconde;

    return `${heure}:${minute}:${seconde}`;
}