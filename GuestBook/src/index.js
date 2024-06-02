import './index.css';
import './api.js';
import './delG.js';
import './newG.js';
import './getG.js';
import { newData } from './newG.js';
import { getData } from './getG.js';
import { delData } from './delG.js';

window.onload= getData();

const submitbtn = document.getElementById('submitbtn');
//const delBtn = document.getElementById('delBtn');

document.getElementById('submitbtn').addEventListener('click', newData);
//document.getElementById('delBtn').addEventListener('click', delData);