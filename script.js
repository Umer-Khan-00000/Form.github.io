// Retrieving HTML elements from the DOM
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Function to update class and error
        function showError(input, message) {
        //Get The Parent Element Of The Input Field (.form-control) 
        const formControl = input.parentElement;
        // Replace The Class - Add Error
        formControl.className = 'form-control error';
        // Get The Smaal Element For The Error Message
        const small = formControl.querySelector('small');
        // Replace the text for small element using the input message
        small.innerText = message;
}
        
//Function To Update Class For Success:

        function showSuccess(input){
        //Get The Parent Element Of The Input Field (.form-control) 
         const formControl = input.parentElement;
        // Replace The Class - Add Success
        formControl.className = 'form-control success';
}

// Event Listeners
// Create Event Listener For Submit Button
form.addEventListener('submit', function(e){
        // Stop Page From Reloading When Clicking On The Submit Button:
        e.preventDefault();
        
        // Check To See If Fields Meet Requirements 
        // Check if username is empty:
        if (username.value === '') {
              showError(username, 'Username is required.');
        }else{
                showSuccess(username);
        }
        
        // Check if email is empty:
        if (email.value === '') {
              showError(email, 'Email is required.');
        }else{
                showSuccess(email);
        }
        
        // Check if password is empty:
        if (password.value === '') {
              showError(password, 'Password is required.');
        }else{
                showSuccess(password);
        }
        
        // Check if password2 is empty:
        if (password2.value === '') {
              showError(password2, 'Confirm Password is required.');
        }else{
                showSuccess(password2   );
        }
        
        
        
});

