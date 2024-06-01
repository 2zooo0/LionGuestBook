import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';
import { delData } from './delG.js';


//방명록 리스트 조회(시간순 정렬)
async function getData() {
    //const url= `${baseURL}/`;
    const fetchData = await fetch(baseURL);
    const toJson = await fetchData.json();
    //console.log(toJson);
    
    //지금까지 패치데이터를 toJson에 담았음.->정렬필요
    //toJson.sort((a,b)=>
       //new Date(a.created_at) - new Date(b.created_at));
    
    //불러온 기록 정렬하기(GuestListdksdp Glist박스들 쌓이게, 한 기록이 한 GList)
    toJson.map((data)=> {
        const list = document.createElement('div');
        list.id = "list";
        //list내 데이터 나타내기
        list.innerHTML = `
            <p>${data.title}</p>
            <p>${data.content}</p>
            <p>${data.writer} <p style="color:gray">${data.created_at}</p> </p>
            <input type="password" id="delPAssword" placeholder="비밀번호 입력">
            <button type="button" id="delBtn">삭제하기</button>
        `;
        //list를 div박스를 만들어 innerHtml을 통해 내부에 데이터 내용 가져오기
        //delBtn클릭시 delData함수 호출

        //const delBtn = document.getElementById("delBtn");
        //delBtn.addEventListener("click",delData());

        window.onload = function() {
            const delBtn = document.querySelector("delBtn");
            delBtn.addEventListener("click", delData);
        };

        GList.appendChild(list); //위에서 만든 list를 Glist에 넣기
        GuestList.appendChild(GList);
    })
   
}

export {getData} ;