import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    // like data()
    state: () => ({
        items: JSON.parse(localStorage.getItem('cartItems')) || []
    }),
    // like methods
    actions: {
        addToCart(product) {
            this.items.push(product);
            this.saveToLocalStorage();

            console.log("Item was added to Pinia: ", product.title);
        },

        clearCart() {
            this.items = [];
            this.saveToLocalStorage();
        },

        removeFromCart(index) {
            this.items.splice(index, 1);
            this.saveToLocalStorage();
        },

        saveToLocalStorage() {
            localStorage.setItem('cartItems', JSON.stringify(this.items));
        }

    }
})