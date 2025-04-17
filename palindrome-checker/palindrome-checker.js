document.getElementById("check-btn").addEventListener("click", () => {
    const input = document.getElementById("text-input").value;
    const result = document.getElementById("result");
  
    if (!input) {
      alert("Please input a value");
      return;
    }
  
    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const isPalindrome = cleanInput === cleanInput.split("").reverse().join("");
  
    result.textContent = `${input} is ${isPalindrome ? "" : "not "}a palindrome.`;
  });
  