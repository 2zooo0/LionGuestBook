import {baseURL, container, GuestList, newGuest, GList, newG} from './api.js';
import { delData } from './delG.js';


//방명록 리스트 조회(시간순 정렬)
async function getData() {
    //const url= `${baseURL}/`;
    const fetchData = await fetch(baseURL);
    const toJson = await fetchData.json();
    //console.log(toJson);
    
    //불러온 기록 정렬하기(GuestListdksdp Glist박스들 쌓이게, 한 기록이 한 GList)
    toJson.map((data)=> {
        const list = document.createElement('div');
        list.id = "list";
        //list내 데이터 나타내기
        list.innerHTML = `
            <p>${data.title}</p>
            <p>${data.content}</p>
            <p>${data.writer} <p style="color:gray">${data.created_at}</p> </p>
            <input type="text"  name="delpassword" placeholder="비밀번호 입력">
            <button type="button" id="delBtn" >삭제하기</button>
        `;
        //list를 div박스를 만들어 innerHtml을 통해 내부에 데이터 내용 가져오기
        
        //delBtn클릭시 delData함수 호출
        var delBtn = list.querySelector("#delBtn");
        
        delBtn.addEventListener('click', function(){
            var del_id = `${data.guestbook_id}`;

            var del_password = document.getElementsByName("delpassword")[0].value;
            //console.log(del_password);
            delData(del_id, del_password);
        } )
    
        GList.appendChild(list); //위에서 만든 list를 Glist에 넣기
        GuestList.appendChild(GList);


    })

   
}

export {getData} ;