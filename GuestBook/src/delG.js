import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';
import { getData, list } from './getG.js';
//getG에서 생성된 delBtn클릭시 delData()함수 실행됨.

//방명록삭제
function delData(del_id, del_password) {
    //입력받은 비밀번호가 지우고자 선택한 id의 비밀번호와 일치한다면, 서버에 DELETE요청보내기
    fetch(`${baseURL}${del_id}/`, {
        method:"DELETE",
        headers : {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({
            password: del_password,
        }),
    })
    .then((response)=> {
        return response.json()})
    .then((response) => {
        console.log(response);
        //location.href = location.href;
        //return getData();
    }).catch((error)=>console.log(error))


    //location.reload();//에러확인못할정도로바로 변해서
}

export {delData};
