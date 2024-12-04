<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ocean Fortune</title>
    <link rel="icon" type="image/png" href="assets/images/logo.png">
    <link rel="stylesheet" href="assets/css/swap.css">
    <link rel="stylesheet" href="assets/css/users.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/mediaquery.css">
    <link rel="stylesheet" href="assets/css/main-mediaquery.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/5.4.5/css/swiper.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    <link rel="stylesheet" href="assets/font-awesome/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

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
    <?php
    include 'session_handler.php';

    // THIS ONE SUPPOSE TO BE THE MAIN BACKEND ARRAY OF USERS FROM THE DATABASE ** i just use two from testing purpose

    $users = [
        [
            'id' => 1,
            'name' => 'Developer',
            'email' => 'dev@dailyminning.com',
            'location' => 'Belgium',
            'balance' => 0,
            'status' => 'Enabled',
            'avatar' => 'D'
        ],
        [
            'id' => 2,
            'name' => 'Administrator',
            'email' => 'admin@dailyminning.com',
            'location' => 'Belgium',
            'balance' => 53850,
            'status' => 'Enabled',
            'avatar' => 'A'
        ],
    ];

    // this is the dropdwon for action close to each of the users
    $dropdownOptions = [
        'Edit', 'Delete', 'Disable', 'Add Balance', 'Email', 'Verify Email', 'Verify KYC'
    ];
    ?>


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
                    <li class=""><a href="#"><i class="material-icons notification-icon">notifications_none</i></a>
                        <div class="notification_box">
                            <div class="wrapper">
                            <header>
                                <span>Notifications</span>
                                <a href="#">Clear All</a>
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
        <div class="box-body">
            <div class="input-group-navbar">
                <input type="text" id="searchInput" class="form-control" placeholder="Search users by name or email">
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </button>
            </div>
            <div id="error" class="error_message">No users found matching your search.</div>

            <div class="table-responsive">
                <table class="table">
                    <thead class="d-none">
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="usersTableBody">
                        <?php foreach ($users as $user): ?>
                            <tr>
                                <td>
                                    <a class="avatar" href="#">
                                        <img src="https://api.dicebear.com/6.x/initials/svg?seed=<?= urlencode($user['name']) ?>&backgroundColor=4f46e5&textColor=ffffff" alt="<?= $user['name'] ?>'s Avatar">
                                    </a>
                                </td>
                                <td class="user-info">
                                    <strong><?= $user['name'] ?></strong>
                                    <span class="sidetitle"><?= $user['email'] ?></span>
                                    <span class="location"><?= $user['location'] ?></span>
                                    <div class="balance">$<?= number_format($user['balance'], 2) ?></div>
                                    <span class="badge badge-success"><?= $user['status'] ?></span>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button class="dropdown-toggle" onclick="toggleDropdown(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="1"></circle>
                                                <circle cx="12" cy="5" r="1"></circle>
                                                <circle cx="12" cy="19" r="1"></circle>
                                            </svg>
                                        </button>
                                        <div class="action-dropdown-menu">
                                            <?php foreach ($dropdownOptions as $option): ?>
                                                <button type="submit" class="dropdown-item" name="<?= strtolower(str_replace(' ', '_', $option)) ?>">
                                                    <!-- each button has the name attribute for backend -->
                                                    <?= $option ?>
                                                </button>
                                            <?php endforeach; ?>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>

            <nav>
                <ul class="pagination" id="pagination"></ul>
            </nav>
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
    

    <script src="assets/user/javascript/popup.js"></script>

    <script>
            let currentPage = 1;
            const usersPerPage = 10;

            const searchInput = document.getElementById('searchInput');
            const usersTableBody = document.getElementById('usersTableBody');
            const paginationContainer = document.getElementById('pagination');

            let filteredUserRows = [];

            const getAllUserRows = () => Array.from(document.querySelectorAll('#usersTableBody tr'));

            const renderUsersForPage = (page) => {
                const startIndex = (page - 1) * usersPerPage;
                const endIndex = startIndex + usersPerPage;

                getAllUserRows().forEach(row => row.style.display = 'none'); // Hide all rows
                filteredUserRows.slice(startIndex, endIndex).forEach(row => row.style.display = ''); // Show filtered rows
            };

            const createPagination = () => {
                const totalPages = Math.ceil(filteredUserRows.length / usersPerPage);
                let paginationHTML = '';

                paginationHTML += `
                    <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                        <button class="page-link" onclick="changePage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>‹</button>
                    </li>
                `;

                for (let i = 1; i <= totalPages; i++) {
                    paginationHTML += `
                        <li class="page-item ${currentPage === i ? 'active' : ''}">
                            <button class="page-link" onclick="changePage(${i})">${i}</button>
                        </li>
                    `;
                }

                paginationHTML += `
                    <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                        <button class="page-link" onclick="changePage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>›</button>
                    </li>
                `;

                paginationContainer.innerHTML = paginationHTML;
            };

            const changePage = (page) => {
                const totalPages = Math.ceil(filteredUserRows.length / usersPerPage);

                if (page >= 1 && page <= totalPages) {
                    currentPage = page;
                    renderUsersForPage(currentPage);
                    createPagination();
                }
            };

            const handleSearch = () => {
                const searchTerm = searchInput.value.toLowerCase();
                const allUserRows = getAllUserRows();

                filteredUserRows = allUserRows.filter((row) => {
                    const name = row.querySelector('.user-info strong')?.textContent.toLowerCase();
                    const email = row.querySelector('.sidetitle')?.textContent.toLowerCase();
                    return name.includes(searchTerm) || email.includes(searchTerm);
                });

                document.getElementById('error').style.display = filteredUserRows.length ? 'none' : 'block';

                currentPage = 1;
                createPagination();
                renderUsersForPage(currentPage);
            };

            const toggleDropdown = (button) => {
                const dropdown = button.nextElementSibling;

                document.querySelectorAll('.action-dropdown-menu.show').forEach(menu => {
                    if (menu !== dropdown) menu.classList.remove('show');
                });

                dropdown.classList.toggle('show');
            };

            document.addEventListener('click', (event) => {
                const isDropdownButton = event.target.closest('.dropdown-toggle');
                const isDropdownMenu = event.target.closest('.action-dropdown-menu');

                if (!isDropdownButton && !isDropdownMenu) {
                    document.querySelectorAll('.action-dropdown-menu.show').forEach(menu => {
                        menu.classList.remove('show');
                    });
                }
            });

            searchInput.addEventListener('input', handleSearch);
            document.addEventListener('DOMContentLoaded', () => {
                filteredUserRows = getAllUserRows(); 
                renderUsersForPage(currentPage);
                createPagination();
            });

    </script>