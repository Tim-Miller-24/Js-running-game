function randomNumb() {
    let min = 0;
    let max = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function step() {
    let min = 1;
    let max = 10;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var askStart = confirm('Давай сыграем в игру "Тараканьи бега" ?');
if (askStart == true) {
    alert('Суть игры: ты вводишь случайное число от 0 до 1,система в этот момент генерирует случайное число 0-1,если ты угадываешь,то шагаешь вперед. Если нет - остаешься на месте.');
    alert('Когда ты угадываешь число, система генерирует для тебя случайное количество шагов, в диапозоне от 1 до 10. Кто первым преодалеет рубеж 100 шагов,тот и выиграл.');
    alert('Только давай договоримся, что ты будешь вводить только числа от 0 до 1, чтоб не делать лишних проверок =)');
    var userName = prompt('Введи пожалуйста своё имя.');
    var rnd = randomNumb();
    var sysTry = randomNumb();
    var finish = 100;

    var sysProgress = 0;
    var userProgress = 0;

    var userTry = +prompt('Угадай, 0 или 1 ?');
    var sysStep = step();
    var userStep = step();


    function checkStep(userTry, sysTry) {
        if (userTry == rnd) {
            alert('Поздравляю, ты угадал');
            alert(`Ты сделал свой шаг: ${userStep} .`);
            userProgress += userStep;

            if (sysTry == rnd) {
                alert(`Система тоже угадала, ее шаг: ${sysStep}`);
                sysProgress += sysStep;
            } else {
                alert('Система не угадала, и осталась на месте');
            }

        } else {
            alert('Ты не угадал, и остаешься на месте');

            if (sysTry == rnd) {
                alert(`А система угадала, ее шаг: ${sysStep}`);
                sysProgress += sysStep;
            } else {
                alert('Система тоже не угадала, и осталась на месте');
            }
        }
    }
    function seeStats(userProgress, sysProgress) {
        alert(`
        ${userName} находится на ${userProgress}.
        А система находится на ${sysProgress}.
        Финиш достигается на 100 шагах`);
    }

    checkStep(userTry, sysTry);
    seeStats(userProgress, sysProgress);

    while (userProgress !== finish || sysProgress !== finish) {
        var userTry = +prompt('Угадай, 0 или 1 ?');
        var rnd = randomNumb();
        var sysTry = randomNumb();
        var sysStep = step();
        var userStep = step();
    
    
        function checkStep(userTry, sysTry) {
            if (userTry == rnd) {
                alert('Поздравляю, ты угадал');
                alert(`Ты сделал свой шаг: ${userStep} .`);
                userProgress += userStep;
    
                if (sysTry == rnd) {
                    alert(`Система тоже угадала, ее шаг: ${sysStep}`);
                    sysProgress += sysStep;
                } else {
                    alert('Система не угадала, и осталась на месте');
                }
    
            } else {
                alert('Ты не угадал, и остаешься на месте');
    
                if (sysTry == rnd) {
                    alert(`А система угадала, ее шаг: ${sysStep}`);
                    sysProgress += sysStep;
                } else {
                    alert('Система тоже не угадала, и осталась на месте');
                }
            }
        }
        function seeStats(userProgress, sysProgress) {
            alert(`
            ${userName} находится на ${userProgress}.
            А система находится на ${sysProgress}.
            Финиш достигается на 100 шагах.`);
        }
    
        checkStep(userTry, sysTry);
        seeStats(userProgress, sysProgress);

        if (userProgress >= finish) {
            alert(`Поздравляю! Победил ${userName}!`);
            break;
        }  else if (sysProgress >= finish) {
            alert('В этой игре победила система!');
            break;
        }

    }
}