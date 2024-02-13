import '../css/style.css'
import { darkModeHandle } from './utils';
import { startGame } from './game';

darkModeHandle()

const buttonStart = document.getElementById('startGame')
buttonStart.addEventListener('click', startGame)