document.addEventListener('DOMContentLoaded',() =>{
    const login = document.getElementById('login');

    if(!login){
        alert("form not found");
        return;
    }

    function getLoginDetails(){
        const details = localStorage.getItem('login_details');
        return details ? JSON.parse(details) : {};
    }

    // function saveLoginDetails(details){
    //     localStorage.setItem('login_details', JSON.stringify(details));
    // }
    login.addEventListener('submit', (event) =>{
        event.preventDefault();
        const login_data = new FormData(login);
        const email = login_data.get('email');
        const password = login_data.get('password');
        const current_Details = getLoginDetails();
        
        //checking if the email is currently registered
       if(!current_Details[email]){
            alert("no account found with this email")
       }

       //if registered checking if password match
       else{
            const stored_password = current_Details[email];
            // console.log("stored  => ",stored_password)
            // console.log("entered password => ", password)
            if(stored_password !== password){
                alert("incorrect email or password");
            }
            else{
                alert("login successful");
                login.reset();
                window.location.href = "nextpage.html";
            }
        }
    })
})