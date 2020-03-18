const totalDuration = 7.5;
const breathDuration = totalDuration * 0.4;
const holdDuration = totalDuration * 0.2;

const $clock = document.getElementById('clock');
const $pointer = document.getElementById('pointer');
const $instruction = document.getElementById('instruction');

start();

function start() {
    document.documentElement.style.setProperty('--total-duration', `${totalDuration}s`);
    document.documentElement.style.setProperty('--breath-duration', `${breathDuration}s`);
    breatheIn();
    $pointer.classList.add('rotating');
}

function breatheIn() {
    $clock.classList.remove('breathe-out');
    $clock.classList.add('breathe-in');
    $instruction.textContent = 'Breathe In!';
    setTimeout(breatheHold, breathDuration * 1000);
}

function breatheOut() {
    $clock.classList.remove('breathe-in');
    $clock.classList.add('breathe-out');
    $instruction.textContent = 'Breathe Out!';
    setTimeout(breatheIn, breathDuration * 1000);
}

function breatheHold() {
    $instruction.textContent = 'Hold';
    setTimeout(breatheOut, holdDuration * 1000);
}
