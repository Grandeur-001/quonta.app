<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <!-- ============TITLE============= -->
        <title>Ocean Fortune</title>
    
        <!-- ============HEAD-ICON-LOGO============= -->
        <link rel="icon" type="image/png" href="assets/images/logo.png">
    
        <!-- ============CSS-LINKS============= -->
        <link rel="stylesheet" href="assets/css/swap.css">
        <link rel="stylesheet" href="assets/css/history.css">
        <link rel="stylesheet" href="assets/css/style.css">
        <link rel="stylesheet" href="assets/css/table-wallet.css">
        <link rel="stylesheet" href="assets/css/mediaquery.css">
        <link rel="stylesheet" href="assets/css/main-mediaquery.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css">
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    
    
    
        <!-- ============FONT-AWESOME-LINKS============= -->
        <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


        <noscript> Powered by <a href=“https://www.smartsupp.com” target=“_blank”>Smartsupp</a></noscript>
    </head>


        <?php
            
            include 'session_handler.php';

        ?>


    <style>
        html{
          animation: none;
        }
        .tradingview-widget-container{
            width: auto;
            height: auto;
            position: relative;
            bottom: auto;
            z-index: auto;
        }

        .main_content{
            margin-top: 8rem;
        }

  
    </style>
<body>
    
      <header class="dashboard_header">
          <div class="wrapper">
            <div class="logo">
              <div class="image_wrapper">
                  <img src="assets/images/logo.png" width="42" height="42" alt="">
              </div>
              <!-- <div class="logo_name">Ocean </div> -->
            </div>

            <div class="icons">
              <ul>
                  <li class=""><a><i class="material-icons notification-icon">notifications_none</i></a>
                      <div class="notification_box">
                        <div class="wrapper">
                          <header>
                              <span>Notifications</span>
                              <a>Clear All</a>
                          </header>
                          <ul>
                              <li>
                                  <a href="#">
                                      <i class="fa fa-user"></i>
                                      <span>Your OTP is <p>487887</p></span>
                                  </a>
                              </li>

                              <li>
                                  <a href="#">
                                      <i class="fa fa-user"></i>
                                      <span>Your OTP is <p>651902</p></span>
                                  </a>
                              </li>

                              <li>
                                  <a href="#">
                                      <i class="fa fa-user"></i>
                                      <span>Your OTP is <p>651902</p></span>
                                  </a>
                              </li>

                              <li>
                                  <a href="#">
                                      <i class="fa fa-user"></i>
                                      <span>Your OTP is <p>651902</p></span>
                                  </a>
                              </li>
                          </ul>
                          <div class="view_all"><a href="#">View All</a></div>
                        </div>
                      </div>
                  </li>

                  <li><a href="#"><i class="material-icons account-icon">account_circle</i></a>
                      <div class="profile_box">
                          <ul>
                              <li>
                                  <a href="profile.php">
                                      <i class="material-icons">person_outline</i>
                                      <span>Profile</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      <i class="material-icons">account_balance_wallet</i>
                                      <span>Wallet</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="logout.php">
                                      <i class="material-icons">logout</i>
                                      <span>Logout</span>
                                  </a>
                              </li>
                          </ul>
                      </div>

                      
                  </li>

                
              </ul>
            </div>
          </div>


        <!-- ============ CRYPTO STICKER ============= //--AT THE TOP, BELOW THE NAV BAR--//-->
        <div class="crypto-ticker">
          <div style="height:62px; background-color: #1e293b; overflow:hidden; box-sizing: border-box; border: 1px solid #282E3B; border-radius: 4px; text-align: right; line-height:14px; block-size:62px; font-size: 12px; font-feature-settings: normal; text-size-adjust: 100%; box-shadow: inset 0 -20px 0 0 #262B38;padding:1px;padding: 0px; margin: 0px; width: 100%;">
              <div style="height:40px; padding:0px; margin:0px; width: 100%;">
                  <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=dark&amp;pref_coin_id=1505&amp;invert_hover=no" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe>
                  <script>
                      document.addEventListener('contextmenu', (event) => event.preventDefault());
                          document.onkeydown = function(e) {
                              // Disable F12, Ctrl+Shift+I (Inspector), Ctrl+Shift+J (Console), Ctrl+U (View Source)
                              if (e.keyCode == 123 || // F12
                                  (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
                                  (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) || // Ctrl+Shift+J
                                  (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))) { // Ctrl+U
                                  return false; // Prevent the event
                              }
                          };
                  </script>
              </div>
              <div style="color: #1e293b; line-height: 14px; font-weight: 400; font-size: 11px; box-sizing: border-box; padding: 2px 6px; width: 100%; font-family: Verdana, Tahoma, Arial, sans-serif;">
                  <a href="https://coinlib.io" target="_blank" style="font-weight: 500; color: #626B7F; text-decoration:none; font-size:11px"></a>
              </div>
          </div>
        </div>
      </header>



    
        
      <aside class="sidebar">
          <div class="wrapper">


              <div class="sidebar_menu">
                  <ul>
                      <li>
                          <a href="admin_dashboard.php">
                              <i class="material-icons">dashboard</i>
                              <span>Home</span>
                          </a>
                      </li>
                      <li>
                          <a href="swap.php">
                              <i class="material-icons">swap_calls</i>
                              <span>Swap</span>
                          </a>
                      </li>

                      <li>
                          <a href="users.php">
                              <i class="fa fa-user-o"></i>
                              <span>Users</span>
                          </a>
                      </li>

                      <li>
                          <a href="admin_history.php">
                              <i class="material-icons">history</i>
                              <span>History</span>
                          </a>
                      </li>
                      <li>
                          <a href="features.php">
                              <i class="material-icons">widgets</i>
                              <span>Features</span>
                          </a>
                      </li>
                      <li>
                          <a href="market.php">
                              <i class="material-icons">store</i>
                              <span>Market</span>
                          </a>
                      </li>
                  </ul>
              </div>

              <div class="sidebar_widgets">
                <div class="wrapper">
                  <div class="image">
                    <img src="assets/images/crypto-join.png" alt="">
                  </div>
                  <div class="text">
                    <h3>Invest Now!</h3>
                    <a href="">
                      Buy and Sell Coins
                    </a>
                    <br><br>
                  </div>
                </div>
              </div>
          </div>
      </aside>

        <main class="main_content">

            <div class="app-container">
                <header class="app-header">
                    <h1>Latest Transactions</h1>



                    <!-- APPEARS ONLY ON ADMIN ACCOUNT -->
                    <div class="dropdown">
                        <button class="dropdown-button">Sort</button>
                        <div class="dropdown-menu">
                            <button type="submit" class="dropdown-item">All</button>
                            <button type="submit" class="dropdown-item">Pending</button>
                            <button type="submit" class="dropdown-item">Withdrawal</button>
                            <button type="submit" class="dropdown-item">Deposit</button>
                            <button type="submit" class="dropdown-item">Default</button>
                        </div>
                    </div>



                    
                </header>

                <div class="transactions">
                    <div class="transaction-card">
                        <div class="transaction-header">
                            <div class="hash">48be8abf581ff0</div>
                            <div class="amount">0.0109 BTC</div>
                        </div>
                        <div class="transaction-details">
                            <div class="detail-row">
                                <span class="label">Date:</span>
                                <span class="value">2024-11-20</span>
                            </div>
                            <div class="detail-row">
                                <span class="label">Preference:</span>
                                <span class="value">High</span>
                            </div>
                            <div class="status-row">
                                <div>


                                    <!-- [EITHER SUCCESSFULL, PENDINDG OR DECLINED FOR BACKEND (PHP IF STATEMENT, IF SUCCESSFULL || PENDING || DECLINED)] -->

                                    <span class="status-badge" style="background: #eab20817; color: var(--pending-color);">Pending</span>
                                    <!-- <span class="status-badge" style="background: rgba(34, 197, 94, 0.1); color: var(--positive-color);">Successful</span> -->
                                    <!-- <span class="status-badge" style="background: #ea080817; color: var(--negative-color);">Declined</span> -->
    

                                    <br>

                                    <!-- [EITHER DEBIT OR CREDIT FOR BACKEND (PHP IF STATEMENT, IF CREDIT || DEBIT)] -->
                                     
                                    <span class="type-badge credit" style="background-color: rgba(34, 197, 94, 0.1);color: var(--positive-color); ">Credit</span>
                                    <!-- <span class="type-badge credit" style="background: #ea080817;color: var(--negative-color); ">Debit</span> -->
                                </div>


                                <!--  (backend to view transaction details here) -->
                                <div class="transaction-dropdown">
                                    <button class="dropdown-button"><i class="fa fa-sort-down"></i></button>
                                    <div class="transaction-dropdown-menu">
                                        <button type="submit" class="popup_trigger dropdown-item">Update</button>
                                        <button type="submit" class="dropdown-item">View</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="transaction-card">
                        <div class="transaction-header">
                            <div class="hash">48be8abf581ff0</div>
                            <div class="amount">0.0109 BTC</div>
                        </div>
                        <div class="transaction-details">
                            <div class="detail-row">
                                <span class="label">Date:</span>
                                <span class="value">2024-11-20</span>
                            </div>
                            <div class="detail-row">
                                <span class="label">Preference:</span>
                                <span class="value">High</span>
                            </div>
                            <div class="status-row">
                                <div>


                                    <!-- [EITHER SUCCESSFULL, PENDINDG OR DECLINED FOR BACKEND (PHP IF STATEMENT, IF SUCCESSFULL || PENDING || DECLINED)] -->

                                    <span class="status-badge" style="background: #eab20817; color: var(--pending-color);">Pending</span>
                                    <!-- <span class="status-badge" style="background: rgba(34, 197, 94, 0.1); color: var(--positive-color);">Successful</span> -->
                                    <!-- <span class="status-badge" style="background: #ea080817; color: var(--negative-color);">Declined</span> -->
    

                                    <br>

                                    <!-- [EITHER DEBIT OR CREDIT FOR BACKEND (PHP IF STATEMENT, IF CREDIT || DEBIT)] -->
                                     
                                    <span class="type-badge credit" style="background-color: rgba(34, 197, 94, 0.1);color: var(--positive-color); ">Credit</span>
                                    <!-- <span class="type-badge credit" style="background: #ea080817;color: var(--negative-color); ">Debit</span> -->
                                </div>


                                <!--  (backend to view transaction details here) -->
                                <div class="transaction-dropdown">
                                    <button class="dropdown-button"><i class="fa fa-sort-down"></i></button>
                                    <div class="transaction-dropdown-menu">
                                        <button type="submit" class="popup_trigger dropdown-item">Update</button>
                                        <button type="submit" class="dropdown-item">View</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="transaction-card">
                        <div class="transaction-header">
                            <div class="hash">48be8abf581ff0</div>
                            <div class="amount">0.0109 BTC</div>
                        </div>
                        <div class="transaction-details">
                            <div class="detail-row">
                                <span class="label">Date:</span>
                                <span class="value">2024-11-20</span>
                            </div>
                            <div class="detail-row">
                                <span class="label">Preference:</span>
                                <span class="value">High</span>
                            </div>
                            <div class="status-row">
                                <div>


                                    <!-- [EITHER SUCCESSFULL, PENDINDG OR DECLINED FOR BACKEND (PHP IF STATEMENT, IF SUCCESSFULL || PENDING || DECLINED)] -->

                                    <span class="status-badge" style="background: #eab20817; color: var(--pending-color);">Pending</span>
                                    <!-- <span class="status-badge" style="background: rgba(34, 197, 94, 0.1); color: var(--positive-color);">Successful</span> -->
                                    <!-- <span class="status-badge" style="background: #ea080817; color: var(--negative-color);">Declined</span> -->
    

                                    <br>

                                    <!-- [EITHER DEBIT OR CREDIT FOR BACKEND (PHP IF STATEMENT, IF CREDIT || DEBIT)] -->
                                     
                                    <span class="type-badge credit" style="background-color: rgba(34, 197, 94, 0.1);color: var(--positive-color); ">Credit</span>
                                    <!-- <span class="type-badge credit" style="background: #ea080817;color: var(--negative-color); ">Debit</span> -->
                                </div>


                                <!--  (backend to view transaction details here) -->
                                <div class="transaction-dropdown">
                                    <button class="dropdown-button"><i class="fa fa-sort-down"></i></button>
                                    <div class="transaction-dropdown-menu">
                                        <button type="submit" class="popup_trigger dropdown-item">Update</button>
                                        <button type="submit" class="dropdown-item">View</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

         </main>

      
      <footer class="dashboard_footer">
        <div class="wrapper">
          <span>© 2024 <a href="index.php">Creative Fortune</a>All Right Reserved</span>
          <span><a href="#">Purchase Now</a></span>
        </div>
      </footer>

      <section class="bottom_nav">
        <div class="wrapper">
            <ul>
                <li>
                    <a href="dashboard.php">
                        <i class="material-icons">dashboard</i>
                        <span>Home</span>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="swap.php">
                        <i class="material-icons">swap_calls</i>
                        <span>Swap</span>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="admin_history.php">
                        <i class="material-icons">history</i>
                        <span>History</span>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="features.php">
                        <i class="material-icons">widgets</i>
                        <span>Features</span>
                    </a>
                </li>
            </ul>

            <ul>
                <li>
                    <a href="market.php">
                        <i class="material-icons">store</i>
                        <span>Market</span>
                    </a>
                </li>
            </ul>
        </div>
      </section>
    



      <!-- CONFIRM / DECLINE TRASACTION  (POP-UP BOX)-->
      <section class="confirm_decline">
        <div class="bg_overlay">
            <div class="popup_box">
                <div class="wrapper">
                    <header>
                        <div class="wrapper">
                            <!-- SAMP TAG is FOR THE NAME OF THE USER FROM THE BACKEND (first name and last name) -->
                            <span>
                                
                                Confirm/Decline   

                                <samp class="firstname">"OBINNA</samp>
                                <samp class="lastname">OJO'S"</samp>


                                transaction
                            </span>
                            <i class="material-icons close_confirm_decline">close</i>
                            <!-- <i class="fa fa-close close_confirm_decline"></i> -->
                        </div>
                    </header>
                    <main class="question">
                        <span>Are you sure you want to confirm/ decline this transacton?</span>
                    </main>
                    <footer class="confirm_decline_buttons">
                        <div class="wrapper">
                        <!-- BUTTONS TO CLOSE CONFIRM OR DECLINE TRANSACTIONS BY THE USERS -->
                            <button name="close" id="close" class="close" type="button">Close</button>
                            <button onclick="showToast('success')" name="confirm" id="confirm" class="btn confirm" type="button">Confirm</button>
                            <button onclick="showToast('decline')" name="decline" id="decline" class="btn decline" type="button">Decline</button>
                        </div>
                    </footer>
                </div>
            </div>
            <div class="toast-container" id="toastContainer"></div>
            <script>
                function showToast(type) {
                    const container = document.getElementById('toastContainer');
                    const toast = document.createElement('div');
                    toast.className = `toast ${type}`;
                    
                    const icons = {
                        success: '✓',
                        decline: '✕'
                    };
                    
                    const titles = {
                        success: 'Success',
                        decline: 'Error'
                    };
                    
                    const messages = {
                        success: 'Transaction confirmed successfully',
                        decline: 'You just declined this transaction'
                    };
                    
                    toast.innerHTML = `
                        <div class="toast-icon">${icons[type]}</div>
                        <div class="toast-content">
                            <div class="toast-title">${titles[type]}</div>
                            <div class="toast-message">${messages[type]}</div>
                        </div>
                        <button class="close-btn" onclick="closeToast(this)">×</button>
                    `;
                    
                    const maxToasts = 3;
                    while (container.children.length >= maxToasts) {
                        container.removeChild(container.lastChild);
                    }
                    
                    container.insertBefore(toast, container.firstChild);
                    
                    toast.offsetHeight;
                    
                    requestAnimationFrame(() => {
                        toast.classList.add('show');
                    });
                    
                    if (window.navigator && window.navigator.vibrate) {
                        window.navigator.vibrate(50);
                    }
                    
                    const timeout = setTimeout(() => {
                        if (toast.parentElement) {
                            closeToast(toast.querySelector('.close-btn'));
                        }
                    }, 4000);
                    
                    toast.dataset.timeoutId = timeout;
                }

                function closeToast(closeButton) {
                    const toast = closeButton.parentElement;
                    
                    if (toast.dataset.timeoutId) {
                        clearTimeout(parseInt(toast.dataset.timeoutId));
                    }
                    
                    toast.classList.remove('show');
                    
                    setTimeout(() => {
                        if (toast.parentElement) {
                            toast.parentElement.removeChild(toast);
                        }
                    }, 400);
                }
            </script>

        </div>
        <!-- <div class="toast-container" id="toastContainer"></div> -->
      </section>
 
    <!-- ============JAVASCRIPT-LINKS============= -->
    <script src="assets/user/javascript/popup.js"></script>
    <script>
        const popupTrigger = document.querySelectorAll(".popup_trigger");
        const confirmDecline = document.querySelector(".confirm_decline");
        const popupBox = document.querySelector(".popup_box");
        const closeConfirmDecline = document.querySelector(".close_confirm_decline");
        currentPopupTrigger = null;

        popupTrigger.forEach((popup_trigger => {
            popup_trigger.addEventListener("click", function() {
                currentPopupTrigger = event.currentTarget;
                confirmDecline.style.visibility = "visible";
                confirmDecline.style.opacity = "1";

                popupBox.style.opacity = 1;
                popupBox.style.transform = "translateY(0)";
            });
        }));

        const removePopup = function() {
            confirmDecline.style.visibility = "hidden";
            confirmDecline.style.opacity = "0";

            popupBox.style.opacity = 0;
            popupBox.style.transform = "translateY(-90%)";
        }

        closeConfirmDecline.addEventListener("click", removePopup);
        




    </script>
</body>
</html>
