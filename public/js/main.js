setTimeout(function () {
    $('body').addClass('loaded');
}, 2000);
window.onload = function () {
    var buttons = document.getElementById('buttons');
    var clear = document.getElementById('clear');
    var answer = document.getElementById('answer');

    buttons.addEventListener('click', function (e) {
        if (e.target.nodeName === 'LI') {
            value = e.target.innerHTML;
            if (value === '=') {
                try {
                    answer.innerHTML = eval(answer.innerHTML);
                } catch(e) {
                    if (value === '=' || value === '.' || value === '/' || value === '*' || value === '+' || value === '-'){
                        return;
                    }
                    answer.innerHTML = e.message;
                }
            } else {
                answer.innerHTML += value;
            }
        }
    });

    clear.addEventListener('click', function () {
        answer.innerHTML = '';
    });
};