

function handleFormSubmit(event){
  event.preventDefault();
  const uname = document.getElementById('username').value;
  const uemail = document.getElementById('email').value;
  const uphone = document.getElementById('phone').value;

  let obj = {"User_Name":uname,
            "User_Email":uemail,
              "User_Phone": uphone};
    
    let obj_serialised = JSON.stringify(obj);
  localStorage.setItem("User Details", obj_serialised);
  const ul = document.querySelector("ul");
  const li = document.createElement('li');
  let obj_normal = JSON.parse(obj_serialised);
  li.textContent = `Name: ${obj_normal.User_Name}, Email: ${obj_normal.User_Email}, Phone: ${obj_normal.User_Phone}`;
  ul.appendChild(li);
}

