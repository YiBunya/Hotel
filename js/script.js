let floor = document.querySelector("#floor");
let room = document.querySelector("#room");
let store_room = [];
document.querySelector("form").onsubmit = (event) => {
  event.preventDefault();
  if (validate()) {
    insert();
  } else {
  }
};
function insert() {
  store_room.push(floor.value, room.value);
  console.log(store_room);
  sessionStorage.setItem("room", JSON.stringify(store_room));
  alert("Insert successfully");
  location = "page/roomcheck.html";  
}

function validate() {
  let check = true;
  if(floor.value == 0 || room.value == 0){
    if(floor.value == 0 && room.value == 0){
      alert("Floor and room Can not equal 0, Please input floor and room again");
      check = false;
    }else if(floor.value == 0){
      alert("Floor Can not equal 0, Please input floor again");
      check = false;
    }else if(room.value == 0){
      alert("Room Can not equal 0, Please input room again");
      check = false;
    }
  }
  else{
    if (floor.value == "") {
      document.querySelector("#label_floor").innerHTML = "Please input floor";
      check = false;
    } else {
      document.querySelector("#label_floor").innerHTML = "";
      check = true;
    }
    if (room.value == "") {
      document.querySelector("#label_room").innerHTML = "Please input room";
      check = false;
    } else {
      document.querySelector("#label_room").innerHTML = "";
      check = true;
    }
  }
  
  return check;
}
floor.oninput = () => {
  if (floor.value == "") {
    document.querySelector("#label_floor").innerHTML = "Please input floor";
  } else {
    document.querySelector("#label_floor").innerHTML = "";
  }
};
room.oninput = () => {
  if (room.value == "") {
    document.querySelector("#label_room").innerHTML = "Please input room";
  } else {
    document.querySelector("#label_room").innerHTML = "";
  }
};
