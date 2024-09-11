let store_room = JSON.parse(sessionStorage.getItem("room"));
let tbody = document.querySelector("tbody");
let Floor_Ch = document.getElementById("floor-ch");
let Room_Ch = document.getElementById("room-ch");   
let Check_Ch = document.getElementById("check-ch");	
let roomid = "";
let tr = "";
let col = null;
let Floor = Floor_Ch.value;
let Room = Room_Ch.value;
let Check = Check_Ch.value;
let thead = "";
for(i = 0 ; i < store_room.length ; i++){
    document.querySelector("#title_hotel").innerHTML = `Your Hotel have ${store_room[0]} floor and ${store_room[1]} room`;	
}
for(let i=1;i<=store_room[0];i++){
    tr += `
    <tr>
        <td>Floor ${i}</td>`;
    for(let j = 1;j<=store_room[1];j++){
        tr += `
            <td id="col${i}-${j}">${col}</td>
        `;
    }
    tr += `</tr>`
   
tbody.innerHTML = tr;
}
document.querySelector("#chfrm").onsubmit = (event)=>{
    event.preventDefault();
    if(validate()){
        insertCh();
    }else{ 
        alert("Please enter all information");
    }
    document.querySelector("#chfrm").reset();
} 

function insertCh(){
    roomid = `col${Floor_Ch.value}-${Room_Ch.value}`;
    let col_room = document.querySelector(`#${roomid}`)

    
    if(col_room == null){
        alert(`Floor ${Floor_Ch.value} and Room ${Room_Ch.value} is do not exist`);
    }
    else if(col_room.innerHTML == "null"){
        col_room.innerHTML = Check_Ch.value;
        col_room.classList.add("bg-danger","text-light","fw-bold");	
        document.querySelector("#boxcheckin").classList.add("d-none");
    }
    else{
        alert(`Floor ${Floor_Ch.value} and Room ${Room_Ch.value} is already checked-in`);
    }
    
}
function validate(){
    let check = true;
    if(Floor_Ch.value == ""){
        document.querySelector("#label_floor").innerHTML="Please input floor";
        check = false;
    }else{  
        document.querySelector("#label_floor").innerHTML="";
        check = true;
    }
    if(Room_Ch.value == ""){
        document.querySelector("#label_room").innerHTML="Please input room";
        check = false;
    }else{
        document.querySelector("#label_room").innerHTML="";
        check = true;
    }
    if(Check_Ch.value == ""){
        document.querySelector("#label_checkin").innerHTML="Please input check in";
        check = false;
    }else{
        document.querySelector("#label_checkin").innerHTML="";
        check = true;
    }
    return check;
}
Floor_Ch.oninput = ()=>{
    if(Floor_Ch.value == ""){
        document.querySelector("#label_floor").innerHTML="Please input floor";
    }else{
        document.querySelector("#label_floor").innerHTML="";
    }
}
Room_Ch.oninput = ()=>{
    if(Room_Ch.value == ""){
        document.querySelector("#label_room").innerHTML="Please input room";
    }else{
        document.querySelector("#label_room").innerHTML="";
    }
}
Check_Ch.oninput = ()=>{
    if(Check_Ch.value == ""){
        document.querySelector("#label_checkin").innerHTML="Please input check in";
    }else{
        document.querySelector("#label_checkin").innerHTML="";
    }
}





document.querySelector("#btncheckin").onclick = ()=>{
    // alert("Check rooms");
    document.querySelector("#boxcheckin").classList.remove("d-none");
    document.querySelector("#boxcheckout").classList.add("d-none");
}
document.querySelector("#btnchecheckout").onclick = ()=>{
    document.querySelector("#boxcheckout").classList.remove("d-none");
    document.querySelector("#boxcheckin").classList.add("d-none");
}


document.querySelector("#choutfrm").onsubmit = (event)=>{
    event.preventDefault();
    if(validateChout()){
        insertChout();
    }else{ 
        alert("Please enter all information");
    }
    document.querySelector("#choutfrm").reset();
}

let floor_chout = document.querySelector("#floor-chout");
let room_chout = document.querySelector("#room-chout");
let roomoutid = "";
function validateChout(){
    let chout = true;
    if(floor_chout.value == ""){
        document.querySelector("#label_floor_chout").innerHTML="Please input floor";
        chout = false;
    }else{
        document.querySelector("#label_floor_chout").innerHTML="";
        chout = true;
    }
    if(room_chout.value == ""){
        document.querySelector("#label_room_chout").innerHTML="Please input room";
        chout = false;
    }else{
        document.querySelector("#label_room_chout").innerHTML="";
        chout = true;
    }
    return chout;
}
floor_chout.oninput = ()=>{
    if(floor_chout.value == ""){
        document.querySelector("#label_floor_chout").innerHTML="Please input floor";
        
    }else{
        document.querySelector("#label_floor_chout").innerHTML="";
        
    }
}
room_chout.oninput = ()=>{
    if(room_chout.value == ""){
        document.querySelector("#label_room_chout").innerHTML="Please input room";
        
    }else{
        document.querySelector("#label_room_chout").innerHTML="";
        
    }
}

function insertChout(){
    roomoutid = `col${floor_chout.value}-${room_chout.value}`;
    let col_chout = document.querySelector(`#${roomoutid}`);

    if(col_chout == null){
        alert(`Floor ${floor_chout.value} and Room ${room_chout.value} is do not exist`);
    }
    else if(col_chout.innerHTML == "null"){
        alert(`Floor ${floor_chout.value} and Room ${room_chout.value} is empty, don't exist check in`);
    }
    else{
        document.querySelector(`#${roomoutid}`).innerHTML = "null";
        document.querySelector(`#${roomoutid}`).classList.remove("bg-danger","text-light","fw-bold");
        document.querySelector("#boxcheckout").classList.add("d-none");
    }
}


document.querySelector("#btnexit").onclick = ()=>{
    location = "../index.html";
    sessionStorage.removeItem("room");
    
}