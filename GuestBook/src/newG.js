import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';
import { getData } from './getG.js';

//새로운 방명록 생성(작성)

function newData() {
    //input안에 입력된 값을 변수에 값 저장
    const submitBtn = document.querySelector("#submitBtn");
    const newtitle = document.getElementById("title").value;
    const newwriter = document.getElementById("writer").value;
    const newcontent = document.getElementById("content").value;
    const newpassword = document.getElementById("password").value;


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
                title:newtitle,
                writer:newwriter,
                content:newcontent,
                password:newpassword
            })
        })
        .then((response)=>{
            return response.json()})
        .then((response) => {
            //console.log(response);
            getData();
        //.catch((error)=>console.log(error));
        })
    }

    return newPost();


}

export {newData};