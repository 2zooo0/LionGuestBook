//베이스URL가져오기
const baseURL = "http://likelion12thtoy.kro.kr:8000/guestbook/";

//자식요소 넣을 돔 가져오기(나누다보니,,,많아짐)
const container = document.getElementById('container');
const GuestList = document.getElementById('GuestList');
const newGuest = document.getElementById('newGuest');
const GList = document.getElementById('GList');
const newG = document.getElementById('newG');

export {baseURL, container, GuestList, newGuest, GList, newG};