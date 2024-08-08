const login_details = new Map();
document.addEventListener('DOMContentLoaded',() =>{
    const form = document.getElementById('signin');
    //const login = document.getElementById('login');

    if(!form){
        alert("form not found");
        return;
    }

    function getLoginDetails(){
        const details = localStorage.getItem('login_details');
        return details ? JSON.parse(details) : {};
    }

    function saveLoginDetails(details){
        localStorage.setItem('login_details', JSON.stringify(details));
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        //const name = formData.get('name');
        const email = formData.get('email'); 
        const password = formData.get('password');
        const passwordRepeat = formData.get('confirm-password');
        

        //checking if passwords match before submitting the form
        if(password !== passwordRepeat){
            alert("passwords do not match. Try again");
        }

        //if they match, checking if the email is not in use already
        else{
            const current_Details = getLoginDetails();

            if(!current_Details[email]){
                current_Details[email] = password;
                saveLoginDetails(current_Details);
                //console.log("login_details",current_Details);
                alert("successfully signed in");
                
                form.reset();
                window.location.href= 'nextpage.html';
            }
            
            else{
                alert("email already in use, try with new email or try logging-in");
            }
        }
    });
})