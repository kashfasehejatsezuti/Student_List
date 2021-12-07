var selectedRow = null;
function onFormSubmit()
{
 event.preventDefault();
 var formData = readFormData();
 if( selectedRow === null)
 {
     insertNewRecord(formData);
 }
 else{
       updateRecord(formData);
 }
 resetForm();
}





//retrive the data

function readFormData()
{
    var formData={};
    formData["studentid"] = document.getElementById("studentid").value;
    formData["studentname"] = document.getElementById("studentname").value;
    formData["studentdep"] = document.getElementById("studentdep").value;
    formData["totalscore"] = document.getElementById("totalscore").value;
    formData["class"] = document.getElementById("class").value;

    return formData;

}

//insert the data

function insertNewRecord(data)
{
    var table = document.getElementById("store_list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 =newRow.insertCell(0);
       cell1.innerHTML=data.studentid;
    var cell2 =newRow.insertCell(1);
       cell2.innerHTML=data.studentname;
    var cell3 =newRow.insertCell(2);
       cell3.innerHTML=data.studentdep;
    var cell4 =newRow.insertCell(3);
       cell4.innerHTML=data.totalscore;
    var cell5 =newRow.insertCell(4);
       cell5.innerHTML=data.class;
    var cell6 =newRow.insertCell(5);
       cell6.innerHTML= `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`;
       

}

//edit the data

function onEdit(td)
{
   selectedRow = td.parentElement.parentElement;
   document.getElementById('studentid').value=selectedRow.cells[0].innerHTML;
   document.getElementById('studentname').value=selectedRow.cells[1].innerHTML;
   document.getElementById('studentdep').value=selectedRow.cells[2].innerHTML;
   document.getElementById('totalscore').value=selectedRow.cells[3].innerHTML;
   document.getElementById('class').value=selectedRow.cells[4].innerHTML;
}
function updateRecord(formData)
{
   selectedRow.cells[0].innerHTML = formData.studentid;
   selectedRow.cells[1].innerHTML = formData.studentname;
   selectedRow.cells[2].innerHTML = formData.studentdep;
   selectedRow.cells[3].innerHTML = formData.totalscore;
   selectedRow.cells[4].innerHTML = formData.class;
}
//delete data
function onDelete(td)
{
   if(confirm('Do you want to Delete the Record?'))
   {
      row = td.parentElement.parentElement;
      document.getElementById('store_list').deleteRow(row.rowIndex);
   }
   resetForm();
}
//reset data
function resetForm()
{
   document.getElementById('studentid').value ='';
   document.getElementById('studentname').value ='';
   document.getElementById('studentdep').value ='';
   document.getElementById('totalscore').value ='';
   document.getElementById('class').value ='';
}