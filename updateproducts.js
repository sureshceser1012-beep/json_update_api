async function updateProduct(id, updates) {
    try {
        const response = await fetch(
            `http://localhost:3000/products/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updates)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Update failed:", error.message);
        throw error;
    }
}

// Example usage
updateProduct("1", {
    price: 45000,
    quantity: 8
})
    .then(product => console.log("Updated product:", product))
    .catch(error => console.error(error));