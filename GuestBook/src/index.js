import './index.css';
import './api.js';
import './delG.js';
import './newG.js';
import './getG.js';
import { newData } from './newG.js';
import { getData } from './getG.js';
import { delData } from './delG.js';

window.onload= getData();
window.onload = function(){
    const submitbtn = document.getElementById('submitbtn');
    document.getElementById('submitbtn').addEventListener('click', newData);

}

//const submitbtn = document.getElementById('submitbtn');


//ocument.getElementById('submitbtn').addEventListener('click', newData);
