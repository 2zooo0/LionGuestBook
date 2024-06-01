import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';

//방명록삭제

function delData() {
    //삭제하고자하는 List의 비번과 입력된 비번값 일치불일치 확인
    //비밀번호 일치 시 삭제
    const newpassword = document.getElementById("password").value;
    if (password != newpassword) {
        alert("비밀번호를 다시 입력해주세요."); //비밀번호 일치하지않을시 알람창 띄우기
        return false;
    } else {
        return del(); //비번이 일치한다면 del함수 실행
    }

    function del(){
        fetch(baseURL, {
            method: "DELETE",
        })
    }



}

export {delData};
