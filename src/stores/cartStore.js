import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', {
    // like data()
    state: () => ({
        items: []
    }),
    // like methods
    actions: {
        addToCart(product) {
            this.items.push(product);

            console.log("Item was added to Pinia: ", product.title);
        },
        clearCart() {
            this.items = [];
        },
        removeFromCart(index) {
            this.items.splice(index, 1)
        }

    }
})