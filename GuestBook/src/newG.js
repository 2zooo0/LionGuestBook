import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';
import { getData } from './getG.js';

//새로운 방명록 생성(작성)

function newData() {
    //input안에 입력된 값을 변수에 값 저장
    
    //newPost();

    //var submitBtn = document.querySelector("submitBtn");
    

    const titleform = document.getElementById('title');
    const newtitle = titleform.value;
    //console.log(newtitle);
    const writerform = document.getElementById('writer');
    const newwriter = writerform.value;
    //var newwriter = document.querySelector("#writer").value;
    const contentform = document.getElementById('content');
    const newcontent = contentform.value;
    //var newcontent = document.querySelector("#content").value;
    const passwordform = document.getElementById('password');
    const newpassword = passwordform.value;
    //var newpassword = document.querySelector("#password").value;


    //입력받은 값들을 post해주기
    //입력되지 않은 칸이 있다면 경고창 띄워주기->html에서 required로 대체
    //submitBtn.onclick = () => {
    function newPost(){
        fetch(baseURL, {
            method:"POST",
            headers : {
                "Content-Type":"application/json",
            },
            body : JSON.stringify({
                password : newpassword,
                title: newtitle,
                writer: newwriter,
                content: newcontent
            })
        })
        .then((response)=> {
            return response.json()})
        .then((response) => {
            console.log(response);
            getData();
        //.catch((error)=>console.log(error));
        })
        location.reload();
       
    }

    newPost();



}

//document.getElementById('submitbtn').addEventListener('submit', newData);

export {newData};