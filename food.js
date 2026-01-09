
        // ==================== APPLICATION STATE ====================
        const AppState = {
            cart: [],
            menuItems: [],
            currentCategory: 'all',
            isDarkMode: false,
            isLoggedIn: false,
            user: null,
            orders: [],
            currentPaymentMethod: 'paystack'
        };

        // ==================== MENU DATA ====================
        const menuData = [
            {
                id: 1,
                name: "Jollof Rice with Grilled Chicken",
                description: "Classic Nigerian jollof rice cooked with tomatoes, peppers, and spices, served with juicy grilled chicken.",
                price: 2500,
                category: "rice",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23E85D04' opacity='0.15'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23E85D04' opacity='0.25'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍛%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EJollof Rice%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular", "spicy"]
            },
            {
                id: 2,
                name: "Fried Rice with Chicken",
                description: "Nigerian fried rice with vegetables, spices, and tender chicken pieces. A party favorite!",
                price: 2800,
                category: "rice",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23F4C430' opacity='0.15'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23F4C430' opacity='0.25'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍚%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EFried Rice%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular"]
            },
            {
                id: 3,
                name: "Ofada Rice with Beef Stew",
                description: "Local Ofada rice served with spicy palm oil beef stew, boiled eggs, and accessories.",
                price: 2200,
                category: "rice",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23D2691E' opacity='0.15'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23D2691E' opacity='0.25'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍲%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EOfada Rice%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: []
            },
            {
                id: 4,
                name: "Coconut Rice with Catfish",
                description: "Fragrant coconut rice served with grilled catfish and spicy pepper sauce.",
                price: 3500,
                category: "rice",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23F5F5DC' opacity='0.5'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23FFFEF0' opacity='0.7'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🥥%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3ECoconut Rice%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular"]
            },
            {
                id: 5,
                name: "Pounded Yam with Egusi Soup",
                description: "Smooth pounded yam served with rich melon seed soup, stockfish, and meat.",
                price: 3000,
                category: "swallow",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23FFFEF0' opacity='0.8'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23FFFFFF'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍠%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EEgusi Soup%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular"]
            },
            {
                id: 6,
                name: "Eba with Egusi Soup",
                description: "Garri (cassava) eba served with delicious melon seed soup, meat, and fish.",
                price: 2000,
                category: "swallow",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23D2B48C' opacity='0.3'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23DEB887' opacity='0.5'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍘%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EEba%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: []
            },
            {
                id: 7,
                name: "Fufu with Okra Soup",
                description: "Traditional fufu served with slimy okra soup, meat, and fish.",
                price: 2200,
                category: "swallow",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%2390EE90' opacity='0.3'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%2390EE90' opacity='0.5'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🥣%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EOkra Soup%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: ["veg"]
            },
            {
                id: 8,
                name: "Semovita with Vegetable Soup",
                description: "Smooth semovita served with fresh vegetable soup and fish.",
                price: 2000,
                category: "swallow",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23F5F5F5' opacity='0.8'/%3E%3Ccircle cx='150' cy='100' r='50' fill='%23FFFFFF'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🥔%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3ESemovita%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: ["veg"]
            },
            {
                id: 9,
                name: "Grilled Catfish (Whole)",
                description: "Whole grilled catfish (obokun) with pepper sauce and plantain.",
                price: 4000,
                category: "protein",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23CD853F' opacity='0.3'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🐟%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EGrilled Catfish%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular"]
            },
            {
                id: 10,
                name: "Grilled Chicken (Full)",
                description: "Full grilled chicken with spicy marination and local spices.",
                price: 4500,
                category: "protein",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23DEB887' opacity='0.3'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍗%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EGrilled Chicken%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: []
            },
            {
                id: 11,
                name: "Peppered Snails (Atama)",
                description: "Tender snails in spicy pepper sauce with ugba (oil bean).",
                price: 3500,
                category: "protein",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23FF6B6B' opacity='0.2'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🐌%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EPeppered Snails%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: ["spicy"]
            },
            {
                id: 12,
                name: "Bole (Roasted Plantain) with Fish",
                description: "Roasted plantains (bole) served with grilled fish and spicy sauce.",
                price: 1500,
                category: "sides",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23FFD700' opacity='0.3'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍌%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EBole%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular"]
            },
            {
                id: 13,
                name: "Coleslaw",
                description: "Fresh and creamy coleslaw, perfect side dish for any meal.",
                price: 800,
                category: "sides",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23F0FFF0' opacity='0.8'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🥗%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EColeslaw%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: ["veg"]
            },
            {
                id: 14,
                name: "Zobo Drink",
                description: "Traditional Nigerian zobo drink made from hibiscus flowers.",
                price: 500,
                category: "drinks",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23DC143C' opacity='0.3'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍷%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EZobo%3C/text%3E%3C/svg%3E",
                popular: false,
                tags: []
            },
            {
                id: 15,
                name: "Chapman Drink",
                description: "Popular Nigerian cocktail drink with grenadine and cucumber.",
                price: 800,
                category: "drinks",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ccircle cx='150' cy='100' r='70' fill='%23FF6347' opacity='0.3'/%3E%3Ctext x='150' y='95' text-anchor='middle' font-size='40'%3E🍹%3C/text%3E%3Ctext x='150' y='150' text-anchor='middle' font-family='Poppins' font-size='12' fill='%231A1A2E'%3EChapman%3C/text%3E%3C/svg%3E",
                popular: true,
                tags: ["popular"]
            }
        ];

        // ==================== ORDERS DATA ====================
        const ordersData = [
            { id: "NB-001", customer: "Adebayo T.", items: "Jollof Rice x2, Zobo", total: "₦5,500", status: "completed", date: "Dec 30, 2025" },
            { id: "NB-002", customer: "Chioma O.", items: "Pounded Yam + Egusi", total: "₦3,000", status: "completed", date: "Dec 30, 2025" },
            { id: "NB-003", customer: "Michael A.", items: "Catfish x3", total: "₦12,000", status: "pending", date: "Dec 31, 2025" },
            { id: "NB-004", customer: "Sarah K.", items: "Fried Rice, Bole", total: "₦3,300", status: "cancelled", date: "Dec 29, 2025" },
            { id: "NB-005", customer: "John D.", items: "Coconut Rice x2", total: "₦7,000", status: "completed", date: "Dec 31, 2025" }
        ];

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
        });

        function initializeApp() {
            // Load menu items
            AppState.menuItems = [...menuData];
            renderMenu();
            
            // Load orders
            AppState.orders = [...ordersData];
            renderOrders();
            
            // Initialize theme
            initializeTheme();
            
            // Update UI
            updateCartUI();
            updateAdminStats();
        }

        // ==================== THEME MANAGEMENT ====================
        function initializeTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme === 'dark') {
                AppState.isDarkMode = true;
                document.documentElement.setAttribute('data-theme', 'dark');
                updateThemeIcon();
            }
        }

        function toggleTheme() {
            AppState.isDarkMode = !AppState.isDarkMode;
            document.documentElement.setAttribute('data-theme', AppState.isDarkMode ? 'dark' : 'light');
            localStorage.setItem('theme', AppState.isDarkMode ? 'dark' : 'light');
            updateThemeIcon();
        }

        function updateThemeIcon() {
            const icon = document.querySelector('#themeToggle i');
            icon.className = AppState.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
        }

        // ==================== MENU FUNCTIONS ====================
        function renderMenu() {
            const grid = document.getElementById('menuGrid');
            const filteredItems = AppState.currentCategory === 'all' 
                ? AppState.menuItems 
                : AppState.menuItems.filter(item => item.category === AppState.currentCategory);
            
            grid.innerHTML = filteredItems.map(item => `
                <div class="food-card" data-id="${item.id}">
                    <div class="food-image">
                        <img src="${item.image}" alt="${item.name}" class="food-img">
                        <div class="food-badges">
                            ${item.popular ? '<span class="badge badge-popular">Popular</span>' : ''}
                            ${item.tags.includes('veg') ? '<span class="badge badge-veg">Veg</span>' : ''}
                            ${item.tags.includes('spicy') ? '<span class="badge badge-spicy">Spicy</span>' : ''}
                        </div>
                        <div class="food-actions">
                            <button class="food-action-btn" onclick="addToWishlist(${item.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                            <button class="food-action-btn" onclick="quickView(${item.id})">
                                <i class="fas fa-eye"></i>
                            </button>
                        </div>
                    </div>
                    <div class="food-content">
                        <div class="food-header">
                            <div>
                                <h3 class="food-title">${item.name}</h3>
                                <p class="food-desc">${item.description}</p>
                            </div>
                        </div>
                        <div class="food-footer">
                            <div class="food-price">₦${item.price.toLocaleString()} <span>/ serving</span></div>
                            <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        function filterMenu(category) {
            AppState.currentCategory = category;
            
            // Update active state
            document.querySelectorAll('.category-card').forEach(card => {
                card.classList.remove('active');
                if (card.dataset.category === category) {
                    card.classList.add('active');
                }
            });
            
            renderMenu();
        }

        // ==================== CART FUNCTIONS ====================
        function addToCart(id) {
            const item = AppState.menuItems.find(i => i.id === id);
            if (!item) return;
            
            const existingItem = AppState.cart.find(i => i.id === id);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                AppState.cart.push({ ...item, quantity: 1 });
            }
            
            updateCartUI();
            showToast('success', `${item.name} added to cart!`);
            
            // Animate button
            const btn = document.querySelector(`.food-card[data-id="${id}"] .add-to-cart-btn`);
            if (btn) {
                btn.style.transform = 'scale(1.3) rotate(90deg)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 300);
            }
        }

        function removeFromCart(id) {
            AppState.cart = AppState.cart.filter(item => item.id !== id);
            updateCartUI();
        }

        function updateQuantity(id, delta) {
            const item = AppState.cart.find(i => i.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    removeFromCart(id);
                } else {
                    updateCartUI();
                }
            }
        }

        function updateCartUI() {
            const cartItemsEl = document.getElementById('cartItems');
            const cartFooter = document.getElementById('cartFooter');
            const cartCount = document.getElementById('cartCount');
            const subtotalEl = document.getElementById('cartSubtotal');
            const taxEl = document.getElementById('cartTax');
            const totalEl = document.getElementById('cartTotal');
            
            const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            if (AppState.cart.length === 0) {
                cartItemsEl.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-basket"></i>
                        <h3>Your cart is empty</h3>
                        <p>Add some delicious Nigerian food!</p>
                    </div>
                `;
                cartFooter.style.display = 'none';
                return;
            }
            
            cartFooter.style.display = 'block';
            
            cartItemsEl.innerHTML = AppState.cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">₦${item.price.toLocaleString()}</div>
                        <div class="cart-item-controls">
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                            <span class="qty-value">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            // Calculate totals
            const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const delivery = subtotal > 0 ? 500 : 0;
            const tax = Math.round(subtotal * 0.075);
            const total = subtotal + delivery + tax;
            
            subtotalEl.textContent = `₦${subtotal.toLocaleString()}`;
            taxEl.textContent = `₦${tax.toLocaleString()}`;
            totalEl.textContent = `₦${total.toLocaleString()}`;
        }

        function toggleCart() {
            document.getElementById('cartSidebar').classList.toggle('active');
            document.getElementById('cartOverlay').classList.toggle('active');
        }

        // ==================== CHECKOUT FUNCTIONS ====================
        function openCheckoutModal() {
            if (AppState.cart.length === 0) {
                showToast('warning', 'Your cart is empty!');
                return;
            }
            
            // Calculate total
            const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            const delivery = 500;
            const tax = Math.round(subtotal * 0.075);
            const total = subtotal + delivery + tax;
            
            document.getElementById('checkoutTotal').textContent = `₦${total.toLocaleString()}`;
            
            // Pre-fill if logged in
            if (AppState.isLoggedIn && AppState.user) {
                document.getElementById('checkoutName').value = AppState.user.name || '';
                document.getElementById('checkoutEmail').value = AppState.user.email || '';
                document.getElementById('checkoutPhone').value = AppState.user.phone || '';
            }
            
            document.getElementById('checkoutModal').classList.add('active');
            toggleCart();
        }

        function closeCheckoutModal() {
            document.getElementById('checkoutModal').classList.remove('active');
        }

        function selectPayment(element, method) {
            document.querySelectorAll('.payment-method').forEach(el => el.classList.remove('selected'));
            element.classList.add('selected');
            element.querySelector('input').checked = true;
            AppState.currentPaymentMethod = method;
        }

        function handleCheckout(event) {
            event.preventDefault();
            
            const btn = document.getElementById('checkoutSubmitBtn');
            btn.innerHTML = '<div class="loading-spinner"></div> Processing...';
            btn.disabled = true;
            
            // Simulate payment processing
            setTimeout(() => {
                // Generate order number
                const orderNumber = 'NB-' + Math.random().toString(36).substr(2, 6).toUpperCase();
                document.getElementById('orderNumber').textContent = orderNumber;
                
                // Add to orders
                const newOrder = {
                    id: orderNumber,
                    customer: document.getElementById('checkoutName').value,
                    items: AppState.cart.map(i => `${i.name} x${i.quantity}`).join(', '),
                    total: document.getElementById('checkoutTotal').textContent,
                    status: 'pending',
                    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                };
                AppState.orders.unshift(newOrder);
                renderOrders();
                updateAdminStats();
                
                // Clear cart
                AppState.cart = [];
                updateCartUI();
                
                // Show success
                closeCheckoutModal();
                document.getElementById('successModal').classList.add('active');
                
                // Reset button
                btn.innerHTML = '<i class="fas fa-check"></i> Place Order';
                btn.disabled = false;
                
                // Send email notification (simulated)
                sendOrderEmail(orderNumber);
                
            }, 2000);
        }

        function closeSuccessModal() {
            document.getElementById('successModal').classList.remove('active');
        }

        function sendOrderEmail(orderNumber) {
            // Simulated email notification
            console.log(`Email sent to customer for order ${orderNumber}`);
            showToast('info', 'Order confirmation sent via email!');
        }

        // ==================== AUTH FUNCTIONS ====================
        function openAuthModal(mode) {
            if (mode === 'login') {
                document.getElementById('authModalTitle').textContent = 'Login';
                document.getElementById('authSubmitText').textContent = 'Login';
                document.getElementById('authSwitch').style.display = 'block';
                document.getElementById('authSwitchLogin').style.display = 'none';
                document.getElementById('nameGroup').style.display = 'none';
                document.getElementById('confirmGroup').style.display = 'none';
                document.getElementById('phoneGroup').style.display = 'none';
            } else {
                document.getElementById('authModalTitle').textContent = 'Sign Up';
                document.getElementById('authSubmitText').textContent = 'Create Account';
                document.getElementById('authSwitch').style.display = 'none';
                document.getElementById('authSwitchLogin').style.display = 'block';
                document.getElementById('nameGroup').style.display = 'block';
                document.getElementById('confirmGroup').style.display = 'block';
                document.getElementById('phoneGroup').style.display = 'block';
            }
            document.getElementById('authModal').classList.add('active');
        }

        function closeAuthModal() {
            document.getElementById('authModal').classList.remove('active');
        }

        function switchAuthMode(mode) {
            openAuthModal(mode);
        }

        function handleAuth(event) {
            event.preventDefault();
            
            const isLogin = document.getElementById('authModalTitle').textContent === 'Login';
            const btn = document.getElementById('authSubmitBtn');
            
            btn.innerHTML = '<div class="loading-spinner"></div> Please wait...';
            btn.disabled = true;
            
            setTimeout(() => {
                if (isLogin) {
                    // Simulate login
                    AppState.isLoggedIn = true;
                    AppState.user = {
                        name: 'Demo User',
                        email: document.getElementById('authEmail').value,
                        phone: '+234 800 123 4567'
                    };
                    showToast('success', 'Welcome back, Demo User!');
                } else {
                    // Simulate signup
                    AppState.isLoggedIn = true;
                    AppState.user = {
                        name: document.getElementById('authName').value,
                        email: document.getElementById('authEmail').value,
                        phone: document.getElementById('authPhone').value
                    };
                    showToast('success', 'Account created successfully!');
                }
                
                // Update UI
                document.getElementById('userMenu').innerHTML = `
                    <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='35' r='25' fill='%23E85D04'/%3E%3Cellipse cx='50' cy='90' rx='35' ry='25' fill='%23E85D04'/%3E%3C/svg%3E" alt="${AppState.user.name}">
                `;
                
                closeAuthModal();
                btn.innerHTML = `<i class="fas fa-sign-in-alt"></i> <span>${isLogin ? 'Login' : 'Create Account'}</span>`;
                btn.disabled = false;
                
            }, 1500);
        }

        // ==================== ADMIN FUNCTIONS ====================
        function renderOrders() {
            const tbody = document.getElementById('ordersTableBody');
            tbody.innerHTML = AppState.orders.map(order => `
                <tr>
                    <td><strong>${order.id}</strong></td>
                    <td>${order.customer}</td>
                    <td>${order.items.length > 30 ? order.items.substring(0, 30) + '...' : order.items}</td>
                    <td>${order.total}</td>
                    <td><span class="status-badge status-${order.status}">${order.status}</span></td>
                    <td>${order.date}</td>
                    <td>
                        <div class="action-btns">
                            <button class="action-btn edit" onclick="editOrder('${order.id}')">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="action-btn delete" onclick="deleteOrder('${order.id}')">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `).join('');
        }

        function filterOrders(status) {
            if (status === 'all') {
                renderOrders();
            } else {
                const filtered = AppState.orders.filter(o => o.status === status);
                const tbody = document.getElementById('ordersTableBody');
                tbody.innerHTML = filtered.map(order => `
                    <tr>
                        <td><strong>${order.id}</strong></td>
                        <td>${order.customer}</td>
                        <td>${order.items.length > 30 ? order.items.substring(0, 30) + '...' : order.items}</td>
                        <td>${order.total}</td>
                        <td><span class="status-badge status-${order.status}">${order.status}</span></td>
                        <td>${order.date}</td>
                        <td>
                            <div class="action-btns">
                                <button class="action-btn edit" onclick="editOrder('${order.id}')">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button class="action-btn delete" onclick="deleteOrder('${order.id}')">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `).join('');
            }
        }

        function editOrder(id) {
            showToast('info', `Editing order ${id}`);
        }

        function deleteOrder(id) {
            if (confirm('Are you sure you want to delete this order?')) {
                AppState.orders = AppState.orders.filter(o => o.id !== id);
                renderOrders();
                updateAdminStats();
                showToast('success', 'Order deleted successfully');
            }
        }

        function updateAdminStats() {
            document.getElementById('menuItemCount').textContent = AppState.menuItems.length;
            document.getElementById('totalOrders').textContent = AppState.orders.length;
            
            // Calculate total revenue
            const revenue = AppState.orders
                .filter(o => o.status === 'completed')
                .reduce((sum, o) => {
                    const value = o.total.replace(/[^0-9]/g, '');
                    return sum + parseInt(value || 0);
                }, 0);
            document.getElementById('totalRevenue').textContent = `₦${revenue.toLocaleString()}`;
        }

        function openAddItemModal() {
            document.getElementById('addItemModal').classList.add('active');
        }

        function closeAddItemModal() {
            document.getElementById('addItemModal').classList.remove('active');
        }

        function handleAddItem(event) {
            event.preventDefault();
            
            const newItem = {
                id: Date.now(),
                name: document.getElementById('itemName').value,
                description: document.getElementById('itemDesc').value,
                price: parseInt(document.getElementById('itemPrice').value),
                category: document.getElementById('itemCategory').value,
                image: document.getElementById('itemImage').value || `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Crect fill='%23FFF8F0' width='300' height='200' rx='12'/%3E%3Ctext x='150' y='100' text-anchor='middle' font-size='50'%3E🍽️%3C/text%3E%3C/svg%3E`,
                popular: document.getElementById('itemPopular').checked,
                tags: []
            };
            
            AppState.menuItems.push(newItem);
            renderMenu();
            updateAdminStats();
            closeAddItemModal();
            document.getElementById('addItemForm').reset();
            showToast('success', 'Menu item added successfully!');
        }

        // ==================== UTILITY FUNCTIONS ====================
        function showSection(section) {
            const homeSection = document.getElementById('homeSection');
            const adminSection = document.getElementById('adminSection');
            
            if (section === 'home') {
                homeSection.style.display = 'block';
                adminSection.style.display = 'none';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (section === 'admin') {
                homeSection.style.display = 'none';
                adminSection.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        function scrollToMenu() {
            document.getElementById('menuSection').scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToFeatures() {
            document.getElementById('featuresSection').scrollIntoView({ behavior: 'smooth' });
        }

        function scrollToTestimonials() {
            document.getElementById('testimonialsSection').scrollIntoView({ behavior: 'smooth' });
        }

        function addToWishlist(id) {
            showToast('info', 'Added to favorites!');
        }

        function quickView(id) {
            showToast('info', 'Quick view coming soon!');
        }

        function showToast(type, message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = `toast ${type}`;
            
            const icons = {
                success: 'fa-check-circle',
                error: 'fa-exclamation-circle',
                warning: 'fa-exclamation-triangle',
                info: 'fa-info-circle'
            };
            
            toast.innerHTML = `
                <div class="toast-icon"><i class="fas ${icons[type]}"></i></div>
                <span class="toast-message">${message}</span>
                <button class="toast-close" onclick="this.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(100px)';
                setTimeout(() => toast.remove(), 300);
            }, 4000);
        }

        function toggleMobileMenu() {
            showToast('info', 'Mobile menu coming soon!');
        }

        // ==================== EXPORT DATA FUNCTIONS ====================
        function exportCartData() {
            return JSON.stringify(AppState.cart, null, 2);
        }

        function exportOrdersData() {
            return JSON.stringify(AppState.orders, null, 2);
        }

        // Security: Input sanitization
        function sanitizeInput(input) {
            const div = document.createElement('div');
            div.textContent = input;
            return div.innerHTML;
        }

        // Security: XSS protection for dynamic content
        function escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        }