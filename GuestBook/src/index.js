import './index.css';
import './api.js';
import './delG.js';
import './newG.js';
import './getG.js';
import { newData } from './newG.js';
import { getData } from './getG.js';

window.onload= getData();

const submitbtn = document.getElementById('submitbtn');

submitbtn.addEventListener('click', newData());