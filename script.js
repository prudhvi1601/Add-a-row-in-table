 const addRowBtn = document.getElementById("btn");
 const bodyData = document.getElementById("tablebody");
 const tableData  = [];

 function newData(name, rollno, subject, marks, markedby){
    addRowBtn.disabled = false

    if(name == "" || rollno == "" || subject == "" || markedby == "" || marks == ""){
        alert("Please fill all the fields");
    }

    else if(markedby.includes("@") == false){
        alert("Please enter valid email");
    }
    
    else{
        let Data = { id : tableData.length + 1, student_name : name, student_roll : rollno, subject : subject, marks : marks, markedby : markedby }
        console.log("New Row :", Data);
        tableData.push(Data);
        console.log("New Table Data",  tableData);
        bodyData.innerHTML = tableData.map((item, ind) => {
            return (` <tr> <td>${item.id}</td>
            <td>${item.student_name}</td>
            <td>${item.student_roll}</td>
            <td>${item.subject}</td>
            <td>${item.marks}</td>
            <td>${item.markedby}</td></tr>`)
        }).join("")
    }
 }

 addRowBtn.addEventListener("click", () => {
    bodyData.innerHTML = bodyData.innerHTML + `
    <td>${tableData.length + 1}</td>
    <form>
        <td><input type="name" id="studentname"></td>
        <td><input type="number" id="rollno"></td>
        <td><input type="text" id="subject"></td>
        <td><input type="number" id="marks"></td>
        <td><input type="text" id="markedby"></td>
        <td><button class="savebtn" onclick="newData(document.getElementById('studentname').value, document.getElementById('rollno').value, document.getElementById('subject').value, document.getElementById('marks').value, document.getElementById('markedby').value)">Save</button></td>
    </form>`
    addRowBtn.disabled = true
 });
 