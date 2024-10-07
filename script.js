document.addEventListener('DOMContentLoaded', () => {
    const cartCount = document.getElementById('cart-count');
    let count = 0;

    // Function to track the "Add to Cart" event in Google Analytics
    function trackAddToCart(product) {
        gtag('event', 'add_to_cart', {
            items: [{
                item_name: product,
                // Add other product details if necessary, like price or category
            }]
        });
    }

    // Add event listeners to each "Add to Cart" button
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            count++;
            cartCount.textContent = count;
            const productName = button.getAttribute('data-product');
            alert(`${productName} added to cart!`);
            
            // Call the tracking function with the product name
            trackAddToCart(productName);
        });
    });
});