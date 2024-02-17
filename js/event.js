// event.js

document.getElementById('event-registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var minecraftNick = document.getElementById('minecraft-nick').value;
    var discord = document.getElementById('discord').value;

    var registrationData = {
        "minecraftNick": minecraftNick,
        "discord": discord
    };

    saveRegistrationData(registrationData);
});

function saveRegistrationData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'files/registration.json', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Регистрация завершена! Данные сохранены.');
            // Дополнительные действия при успешной регистрации
        }
    };
    xhr.send(JSON.stringify(data));
}
