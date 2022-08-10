import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.data('pdp', () => ({
    menuOpen: false,
    minicartOpen: false,
    lightbox: false,
    qty: 0,
    cartItems: 0,
    error: '',
    gallery: {
        position: 0,
        translate: 0,
        max: 4
    },
    product: {
        name: "Fall Limited Edition Sneakers",
        description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the wather can offer.",
        brand: "Sneaker Company",
        price: 250,
        discount: .5,
    },

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    },

    increaseQty() {
        this.qty = parseInt(this.qty) + 1;
        this.error = '';
    },

    decreaseQty() {
        if (this.qty === 0) {
            return;
        } 

        this.qty = parseInt(this.qty) - 1;
    },

    finalPrice() {
        const final = this.product.price * this.product.discount;
        return this.currencyOutput(final);
    },

    oldPrice() {
        return this.currencyOutput(this.product.price);
    },

    total() {
        const total = this.product.price * this.product.discount * this.cartItems;
        return this.currencyOutput(total);
    },

    formattedDiscount() {
        return this.product.discount * 100 + '%';
    },
    
    currencyOutput(amount) {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        return formatter.format(amount);
    },

    addToCart() {
        if (this.qty === 0) {
            this.error = 'Quantity must not be 0';
            return;
        }

        this.cartItems = this.cartItems + this.qty;
        this.minicartOpen = true;
    },

    removeFromCart() {
        this.cartItems = 0;
    },

    checkout() {
        alert('Checkout')
    },

    nextSlide() {
        if (this.gallery.position === this.gallery.max - 1) {
            this.gallery.position = -1;
        }

        this.gallery.position = parseInt(this.gallery.position) + 1;
        this.translatePosition();

    },

    prevSlide() {
        if (this.gallery.position === 0) {
            this.gallery.position = this.gallery.max;
        }
        this.gallery.position = parseInt(this.gallery.position) - 1;
        this.translatePosition();
    },

    translatePosition() {
        const val = parseInt(this.gallery.position) * 100;
        this.gallery.translate = `-translate-x-${val}`;
    },

    setGalleryPosition(pos) {
        this.gallery.position = parseInt(pos);
        this.translatePosition();
    }
}));

Alpine.start();