let sport = prompt("Введіть ваш улюблений вид спорту:");
let message = "Сподіваюсь, що у тебе все вийде!:\n\n";

if (sport === null) {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорта" + ".......");
} else {
    if (sport === "Футбол" || sport === "Хокей" || sport === "Баскетбол") {
        let star = "";
        if (sport === "Футбол") {
            star = "Леонелем Мессі";
        } else if (sport === "Хокей") {
            star = "Уэйном Гретцкім";
        } else if (sport === "Баскетбол") {
            star = "Майклом Джорданом";
        }

        message += "Круто! Хочеш стати " + star + "...?";
    }
    alert(message);
}
