document.addEventListener("DOMContentLoaded", () => {
    
    const predictBtn = document.querySelector(".input-card button");
    const resultCard = document.querySelector(".result-card");
    const stockInput = document.getElementById("stockInput");

    predictBtn.addEventListener("click", () => {
        const stock = stockInput.value.trim();

        if (stock === "") {
            alert("Please enter a stock symbol!");
            return;
        }

        // Show dummy prediction (for now)
        resultCard.style.display = "block";
        resultCard.innerHTML = `
            <h2>Stock Analysis for ${stock.toUpperCase()}</h2>
            <p>Predicted Price: <span>$${(Math.random() * 100 + 100).toFixed(2)}</span></p>
            <p>Direction: <span>${Math.random() > 0.5 ? "Up" : "Down"}</span></p>
            <p>Confidence: <span>${(Math.random() * 20 + 70).toFixed(2)}%</span></p>
            <p>Predicted Change: <span>${(Math.random() * 5 - 2.5).toFixed(2)}%</span></p>
        `;
    });
});
