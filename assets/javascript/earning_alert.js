
// const countriesArray = [
//     "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad",
//     "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon",
//     "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar",
//     "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda",
//     "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo",
//     "Tunisia", "Uganda", "Zambia", "Zimbabwe","Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", "Dominican Republic", "El Salvador",
//     "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia",
//     "Saint Vincent and the Grenadines", "Trinidad and Tobago", "United States","Argentina", "Bolivia", "Brazil", "Chile", "Colombia", 
// 	"Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
// ];

// const peopleNamesArray = [
//     "Ahmed", "João", "Kofi", "Thabo", "Youssef", "Nia", "Joaquim", "Emeka", "Gaston", "Mahamat",
//     "Fatou", "Denis", "Blaise", "Rashid", "Amira", "Carmen", "Selah", "Amina", "Thandiwe", "Youssef",
//     "Aisha", "Kwame", "Mohammed", "Chinua", "Marie", "Lerato", "Winston", "Maya", "Zara", "Tinashe",
//     "Eli", "Salim", "Fatima", "Musa", "Sofia", "Samira", "Zuri", "Diana", "Sibusiso", "Zahara",
//     "Noah", "Amani", "Lina", "Chima", "Ifeoma", "Nadine", "Patrice", "Amani", "Zachary", "Enzo", "Derek", 
// 	"Chad", "Jamal", "Ethan", "Liam", "Maria", "Carlos", "Michelle", "Isaiah", "Santiago",
//     "Avery", "Juliana", "Jordan", "Hannah", "Logan", "Emily", "Noah", "Eliana", "Sophia", "Amara",
//     "Lucas", "Dylan", "Madison", "Zoe", "Elijah", "Isabella", "Mia", "Olivia", "Camila", "Levi",
// 	"Mateo", "Rafael", "Sofia", "Valentina", "Pablo", "Camila", "Mateo", "Ana", "Nicolas", "Bianca",
//     "Luna", "Gabriel", "Felipe", "Fernanda", "Lucia", "Tiago", "Isabella", "Ruben", "Julia", "Mariana",
//     "Thiago", "Carla", "Samuel", "Bianca", "Bruno", "Luiza", "Joaquim", "Gustavo", "Rafaela", "Pedro"
// ];

// const numbersArray = [
//     9000, 4200, 1500, 8500, 106000, 112500, 3010, 5040, 2080, 6001,
//     7200, 9999, 3055, 4021, 6000, 1001, 8563, 7400, 4500, 123456,
//     4204, 2123, 1010, 3030, 9400, 4321, 1080, 2500, 9876, 1200,
//     5500, 8501, 6720, 4501, 8015, 1023, 9401, 5120, 6002, 3040,
//     8200, 4325, 2000, 6150, 8888, 7650, 4503, 6400, 5700, 7100,
//     6005, 1050, 7020, 9998, 8530, 5045, 4078, 1005, 3067, 1505
// ];

// let currentIndex  = 0;
// let currentIndex2  = 0;
// let currentIndex3  = 0;
// const countryDisplay = document.querySelector(`.country`);
// const peopleNamesDisplay = document.querySelector(`.name`);
// const amountNum = document.querySelector(`.amount`);

// setInterval(() => {
// 	countryDisplay.textContent = countriesArray[currentIndex];
// 	currentIndex = (currentIndex + 1) % countriesArray.length;
// }, 4000);

// setInterval(() => {
// 	peopleNamesDisplay.textContent = peopleNamesArray[currentIndex2];
// 	currentIndex2 = (currentIndex2 + 1) % peopleNamesArray.length;
// }, 4000);

// setInterval(() => {
// 	amountNum.textContent = `$` + numbersArray[currentIndex3];
// 	currentIndex3 = (currentIndex3 + 1) % numbersArray.length;
// }, 4000);


// go install -v golang.org/x/tools/gopls@latest"


(function ($) {
    "use strict";

    $.fn.Notification = function (options) {
      const settings = $.extend({
        Varible1: [
          "Ahmed", "João", "Kofi", "Thabo", "Youssef", "Nia", "Joaquim", "Emeka", "Gaston", "Mahamat",
          "Fatou", "Denis", "Blaise", "Rashid", "Amira", "Carmen", "Selah", "Amina", "Thandiwe", "Youssef",
          "Aisha", "Kwame", "Mohammed", "Chinua", "Marie", "Lerato", "Winston", "Maya", "Zara", "Tinashe",
          "Eli", "Salim", "Fatima", "Musa", "Sofia", "Samira", "Zuri", "Diana", "Sibusiso", "Zahara",
          "Noah", "Amani", "Lina", "Chima", "Ifeoma", "Nadine", "Patrice", "Amani", "Zachary", "Enzo",
          "Derek", "Chad", "Jamal", "Ethan", "Liam", "Maria", "Carlos", "Michelle", "Isaiah", "Santiago",
          "Avery", "Juliana", "Jordan", "Hannah", "Logan", "Emily", "Noah", "Eliana", "Sophia", "Amara",
          "Lucas", "Dylan", "Madison", "Zoe", "Elijah", "Isabella", "Mia", "Olivia", "Camila", "Levi",
          "Mateo", "Rafael", "Sofia", "Valentina", "Pablo", "Camila", "Mateo", "Ana", "Nicolas", "Bianca",
          "Luna", "Gabriel", "Felipe", "Fernanda", "Lucia", "Tiago", "Isabella", "Ruben", "Julia", "Mariana",
          "Thiago", "Carla", "Samuel", "Bianca", "Bruno", "Luiza", "Joaquim", "Gustavo", "Rafaela", "Pedro"
        ],
        Varible2: [
          "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon",
          "Central African Republic", "Chad", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the",
          "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon",
          "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya",
          "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger",
          "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone", "Somalia",
          "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe",
          "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica",
          "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico",
          "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
          "Trinidad and Tobago", "United States", "Argentina", "Bolivia", "Brazil", "Chile", "Colombia",
          "Ecuador", "Guyana", "Paraguay", "Peru", "Suriname", "Uruguay", "Venezuela"
        ],
        Amount: [100, 9000],
        Content: '<b>[Varible1]</b> from <b>[Varible2]</b> has just earned <b>$[Amount]</b>.',
        DisplayTime: 6000,
        DelayTime: 10000,
        Background: '#2b3141',
        BorderRadius: 5,
        BorderWidth: 1,
        BorderColor: 'red',
        TextColor: 'white',
        AnimationEffectOpen: 'translateX(0)',
        AnimationEffectClose: 'translateX(200%)',
        Link: [false, 'https://example.com', '_blank']
      }, options);

      let notificationCount = 0;

      return this.each(function () {
        const self = this;
        initializeStyles();

        function initializeStyles() {
          $(self).css({
            'border-radius': settings.BorderRadius + 'px',
            'border-width': settings.BorderWidth + 'px',
            'border-color': settings.BorderColor,
            'background': settings.Background,
            'color': settings.TextColor
          });
          $(self).find('.notification-text-block').css({ 'color': settings.TextColor });

          if (settings.Link[0]) {
            $(self).attr("onclick", "window.open('" + settings.Link[1] + "','" + settings.Link[2] + "');");
            $(self).css({ 'cursor': 'pointer' });
          }
        }

        function showNotification() {
          const randName = settings.Varible1[Math.floor(Math.random() * settings.Varible1.length)];
          const randCity = settings.Varible2[Math.floor(Math.random() * settings.Varible2.length)];
          const randAmount = Math.floor(Math.random() * (settings.Amount[1] - settings.Amount[0])) + settings.Amount[0];

          let content = settings.Content.replace("[Varible1]", randName)
                                        .replace("[Varible2]", randCity)
                                        .replace("[Amount]", randAmount);

          $(self).find('.notification-text').html(content);
          
          notificationCount++;
          $("#notification-badge").text(notificationCount).show();

          $(self).css({ transform: settings.AnimationEffectOpen }).show();

          setTimeout(() => {
            $(self).css({ transform: settings.AnimationEffectClose });
            setTimeout(showNotification, settings.DelayTime);
          }, settings.DisplayTime);
        }

        showNotification();
      });
    };
  })(jQuery);

  $(document).ready(function() {
    $("#fake-notification").Notification();
  });