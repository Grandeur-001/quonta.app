
// Crypto List (previously imported from cryptoData.js)
const cryptoList = [
    {
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png'
    },
    {
      id: '2',
      symbol: 'USDT',
      name: 'Tether',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'
    },
    {
      id: '3', 
      symbol: 'ETH',
      name: 'Ethereum',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png'
    },
    {
      id: '5',
      symbol: 'DOGE',
      name: 'Dogecoin',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png'
    },
    {
      id: '6',
      symbol: 'BNB',
      name: 'Binance Coin',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png'
    },
    {
      id: '8',
      symbol: 'SHIB',
      name: 'Shiba Inu',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png'
    },
    {
      id: '9',
      symbol: 'LTC',
      name: 'Litecoin',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png'
    },
    {
      id: '10',
      symbol: 'XRP',
      name: 'Ripple',
      imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png'
    }
  ];
  
  // Initialize the dropdowns
  function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.crypto-select');
  
    dropdowns.forEach((dropdown) => {
      const button = dropdown.querySelector('.select-btn');
      const menu = document.createElement('div');
      menu.className = 'dropdown-menu';
      const dropdownHeader = document.createElement('div');
      dropdownHeader.className = 'dropdown-header';
      dropdownHeader.innerHTML = 'Select Currency';
      menu.appendChild(dropdownHeader);
      dropdown.appendChild(menu);

  
      // Create dropdown items
      cryptoList.forEach((crypto) => {
        const item = createDropdownItem(crypto);
        menu.appendChild(item);
  
        item.addEventListener('click', () => {
          updateSelection(button, crypto);
          menu.classList.remove('show');
        });
      });
  
      // Toggle dropdown
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        menu.classList.toggle('show');
  
        // Close other dropdowns
        dropdowns.forEach((other) => {
          if (other !== dropdown) {
            other.querySelector('.dropdown-menu').classList.remove('show');
          }
        });
      });
    });
  
    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
      document.querySelectorAll('.dropdown-menu').forEach((menu) => {
        menu.classList.remove('show');
      });
    });
  }
  
  function createDropdownItem(crypto) {
    const item = document.createElement('div');
    item.className = 'dropdown-item';
    item.innerHTML = `
      <span class="crypto-option">
        <img src="${crypto.imageUrl}" alt="${crypto.symbol}" />
        <div class="crypto-name_and_symbol_wrapper">
          <span class="crypto-text">${crypto.symbol}</span>
          <span class="crypto-name">${crypto.name}</span>
        </div>
      </span>
    `;
    
    return item;
  }
  
  function updateSelection(button, crypto) {
    button.innerHTML = `
      <img src="${crypto.imageUrl}" alt="${crypto.symbol}" />
      <span>${crypto.symbol}</span>
    `;
    button.dataset.cryptoId = crypto.id;
  }
  
    
  
  
  
  
  
  
  
  // Main entry point
  document.addEventListener('DOMContentLoaded', () => {
    initializeDropdowns();
    setupTradingWidgets();
    // embeddedCode();
  });
  