const notificationIcon = document.querySelector('.notification-icon');
const notificationBox = document.querySelector('.notification_box');
const accountIcon = document.querySelector('.account-icon');
const profileBox = document.querySelector('.profile_box');
let currentOpenPopup = null;

notificationIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    
    if (currentOpenPopup && currentOpenPopup !== notificationBox) {
        closePopup(currentOpenPopup);
    }

    const isHidden = window.getComputedStyle(notificationBox).visibility === 'hidden';
    if (isHidden) {
        notificationBox.style.opacity = '1';
        notificationBox.style.visibility = 'visible';
        notificationBox.classList.add('bounce-in');
        currentOpenPopup = notificationBox;
    } else {
        closePopup(notificationBox);
    }
});

accountIcon.addEventListener('click', (event) => {
    event.stopPropagation();

    if (currentOpenPopup && currentOpenPopup !== profileBox) {
        closePopup(currentOpenPopup);
    }

    const isHidden = window.getComputedStyle(profileBox).visibility === 'hidden';
    if (isHidden) {
        profileBox.style.opacity = '1';
        profileBox.style.visibility = 'visible';
        profileBox.classList.add('bounce-in');
        currentOpenPopup = profileBox;
    } else {
        closePopup(profileBox);
    }
});

function closePopup(popup) {
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
    popup.classList.remove('bounce-in');
    currentOpenPopup = null;
}

document.addEventListener('click', () => {
    if (currentOpenPopup) {
        closePopup(currentOpenPopup);
    }
});

profileBox.addEventListener('click', (event) => {
    event.stopPropagation();
});

notificationBox.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default page reload
        
        const url = link.getAttribute('href'); // Get the link's href attribute

        // Redirect to the expected page
        window.location.assign(url);
    });
});

