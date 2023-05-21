

$( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
  
    var errors = [];
  
    if (nameInput.value.trim() === '') {
      errors.push('Name field cannot be empty.');
    }
  
    if (emailInput.value.trim() === '') {
      errors.push('Email field cannot be empty.');
    } else if (!isValidEmail(emailInput.value.trim())) {
      errors.push('Please enter a valid email address.');
    }
  
    if (messageInput.value.trim() === '') {
      errors.push('Message field cannot be empty.');
    }
  
    var errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '';
  
    if (errors.length > 0) {
      errors.forEach(function (error) {
        var errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
      });
    } else {
      // Tüm alanlar doldurulduğunda başarılı bir mesaj göster
      alert('Başarılı! Form gönderildi.');
      // Formu sıfırla
      this.reset();
    }
  });
  
  function isValidEmail(email) {
    var emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }