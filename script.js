showStudents();

let btnLuu = document.getElementById("btnLuu");
btnLuu.addEventListener('click',function(){
    let ho_va_ten       = document.getElementById('txtHoTen');
    let email           = document.getElementById('txtEmail');
   

   
    let lstStudents = localStorage.getItem("lstStudents");
    if(lstStudents == null){
        lstStudentsObj = []; 
    }else{
        lstStudentsObj = JSON.parse(lstStudents);
    }

    let student = {
        hoVaTen: ho_va_ten.value,
        diaChiEmail: email.value,
        soDienThoai: tel.value,
        queQuan: que_quan.value,
        

    }
   
    lstStudentsObj.push(student);
    /
    localStorage.setItem("lstStudents",JSON.stringify(lstStudentsObj));
    
    ho_va_ten.value = '';
    email.value = '';
    tel.value = '';
   
    
})


