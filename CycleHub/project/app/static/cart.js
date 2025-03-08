let cart = [
    { id: 1, name: "PEN STAND", price: 199, quantity: 1 },
    { id: 2, name: "FLOWER VASE", price: 499, quantity: 1 },
    { id: 3, name: "BAGS", price: 99, quantity: 2 },
    { id: 4, name: "FANCY CHAIR", price: 1499, quantity: 1 },
    { id: 5, name: "TABLE LAMP", price: 699, quantity: 1 }
];

function renderCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = ''; 
    let tAmount = 0; 

    cart.forEach(item => {
        const total = item.price * item.quantity;
        tAmount += total;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rs ${item.price}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" class="form-control quantity-input" data-id="${item.id}">
            </td>
            <td>Rs ${total}</td>
            <td><button class="btn btn-remove" data-id="${item.id}">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });
    document.getElementById('totalAmount').innerText = `Total: Rs ${tAmount}`;
}

function handleQuantityChange(event) {
    const id = parseInt(event.target.getAttribute('data-id'));
    const quantity = parseInt(event.target.value);
    
    const item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity = quantity;
        
        renderCart();
    }
}

function handleRemoveItem(event) {
    const id = parseInt(event.target.getAttribute('data-id'));
    cart = cart.filter(item => item.id !== id);
    renderCart(); 
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();

    document.getElementById('cartItems').addEventListener('input', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            handleQuantityChange(event);
        }
    });

    document.getElementById('cartItems').addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-remove')) {
            handleRemoveItem(event);
        }
    });

    document.getElementById('checkoutButton').addEventListener('click', () => {
        const qrCodeContainer = document.getElementById("qr_code");
        qrCodeContainer.innerHTML = ''; 

        const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        new QRCode(qrCodeContainer, `upi://pay?pa=6206705516@axl&mode=02&am=${totalAmount}`);
    });
});