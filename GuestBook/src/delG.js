import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';
import { getData } from './getG.js';
//getG에서 생성된 delBtn클릭시 delData()함수 실행됨.

//방명록삭제
async function delData(delValue, guestbook_id) {
    //1.getG에서 사용자가 입력한 비밀번호 값을 변수에 저장하기
    const response= await fetch(`${baseURL}${guestbook_id}/`,{
        method: 'POST',
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(delValue)
    });
    if (response.ok) {
        getData();
    } else{
        alert("비밀번호를 다시 입력하세요.");
    }



}

export {delData};
