function buttonClick(){
    let name = document.getElementById("name").value;
    alert(name)
    let h1 = document.getElementById("heading1");
    h1.style.color = "red";
    h1.innerText = name;
    
}