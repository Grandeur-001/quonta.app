// notification.js

document.addEventListener("DOMContentLoaded", function () {
    // Insert the notification badge and dropdown into the DOM (assuming navbar is already present in HTML)
    const notificationIcon = document.querySelector('.notification_icon');
    
    // Create and append the notification badge
    const notificationBadge = document.createElement('span');
    notificationBadge.className = 'notification-badge';
    notificationBadge.id = 'notification-badge';
    notificationBadge.textContent = '0'; // Initially set the badge count to 0
    notificationIcon.appendChild(notificationBadge);
  
    // Create and append the notification dropdown
    const notificationDropdown = document.createElement('div');
    notificationDropdown.className = 'notification-dropdown';
    notificationDropdown.id = 'notification-dropdown';
    notificationIcon.appendChild(notificationDropdown);
  });
  
  // Notifications data for generating random notifications
  const names = ["Ahmed", "João", "Kofi", "Thabo", "Youssef"];
  const countries = ["Algeria", "Angola", "Benin", "Botswana", "Burkina Faso"];
  const minAmount = 100, maxAmount = 9000;
  
  // Initialize notifications from localStorage or set an empty array
  let notifications = JSON.parse(localStorage.getItem("notifications")) || [];
  
  // Function to toggle notification dropdown visibility with scale-in effect
  function toggleDropdown() {
    const dropdown = document.getElementById("notification-dropdown");
    dropdown.classList.toggle("show"); // Add/remove the "show" class to trigger scale transition
  }
  
  // Function to add a new notification
  function addNotification() {
    const name = names[Math.floor(Math.random() * names.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const amount = Math.floor(Math.random() * (maxAmount - minAmount + 1)) + minAmount;
    const notification = `${name} from ${country} earned $${amount}`;
    notifications.unshift(notification); // Add to the top of the list
    localStorage.setItem("notifications", JSON.stringify(notifications)); // Persist in localStorage
    updateBadge();
    displayNotifications();
    playNotificationSound(); // Play sound when a new notification is added
  }
  
//   Function to play notification sound
  function playNotificationSound() {
    const sound = new Audio('alert.wav');  // Adjust the file path if needed
    // sound.play();
  }
  
  // Update notification badge count
  function updateBadge() {
    const badge = document.getElementById("notification-badge");
    badge.textContent = notifications.length;
    badge.style.display = notifications.length > 0 ? "inline" : "none";
  }
  
  // Display all notifications in the dropdown
  function displayNotifications() {
    const dropdown = document.getElementById("notification-dropdown");
    dropdown.innerHTML = ""; // Clear previous content
  
    if (notifications.length === 0) {
      // Show "No notifications" if there are no notifications
      const noNotificationMessage = document.createElement("div");
      noNotificationMessage.className = "no-notification";
      noNotificationMessage.textContent = "No notifications";
      dropdown.appendChild(noNotificationMessage);
    } else {
      notifications.forEach((notif, index) => {
        const item = document.createElement("div");
        item.className = "notification-item";
        item.textContent = notif;
  
        // Close icon for manual removal
        const closeIcon = document.createElement("span");
        closeIcon.className = "close-icon";
        closeIcon.textContent = "✖";
        closeIcon.onclick = (e) => {
          e.stopPropagation(); // Prevent dropdown from closing on icon click
          removeNotification(index);
        };
  
        item.appendChild(closeIcon); // Append close icon to notification item
  
        // Swipe-to-remove functionality
        let startX;
        item.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX; // Record start X position
        });
        item.addEventListener("touchend", (e) => {
          const endX = e.changedTouches[0].clientX; // Record end X position
          if (startX - endX > 50) { // Detect left swipe (adjust threshold as needed)
            item.classList.add("swiped");
            setTimeout(() => removeNotification(index), 300);
          }
        });
  
        dropdown.appendChild(item);
      });
    }
  
    // Add "Clear All" button if there are notifications
    if (notifications.length > 0) {
      const clearAllBtn = document.createElement("button");
      clearAllBtn.className = "clear-all-btn";
      clearAllBtn.textContent = "Clear All";
      clearAllBtn.onclick = clearAllNotifications;
      dropdown.appendChild(clearAllBtn);
    }
  }
  
  // Remove a notification by index and update localStorage
  function removeNotification(index) {
    notifications.splice(index, 1); // Remove from array
    localStorage.setItem("notifications", JSON.stringify(notifications)); // Update localStorage
    updateBadge();
    displayNotifications();
  }
  
  // Clear all notifications from both UI and localStorage
  function clearAllNotifications() {
    notifications = []; // Clear the array
    localStorage.setItem("notifications", JSON.stringify(notifications)); // Clear from localStorage
    updateBadge();
    displayNotifications();
  }
  
  // Initialize notification count and display saved notifications on load
  document.addEventListener("DOMContentLoaded", () => {
    updateBadge();
    displayNotifications();
    // Generate a new notification every 7 seconds
    setInterval(addNotification, 300000); // Adjust interval as needed
  });
  