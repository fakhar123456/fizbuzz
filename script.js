document.getElementById("playBtn").addEventListener("click", function() {
    const limit = document.getElementById("limit").value;
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 

    for (let i = 1; i <= limit; i++) {
        let outputText = "";

        if (i % 3 === 0 && i % 5 === 0) {
            outputText = `<span class="fizzbuzz">FizzBuzz</span>`;
        } else if (i % 3 === 0) {
            outputText = `<span class="fizz">Fizz</span>`;
        } else if (i % 5 === 0) {
            outputText = `<span class="buzz">Buzz</span>`;
        } else {
            outputText = i;
        }

        const p = document.createElement("p");
        p.innerHTML = outputText;
        outputDiv.appendChild(p);
    }
});
