// Calculate Budget
document.getElementById('calculateBtn').addEventListener('click', () => {
    const income = parseFloat(document.getElementById('incomeInput').value);
    if (isNaN(income) || income <= 0) {
      alert("Please enter a valid income amount.");
      return;
    }
  
    // Budget calculation
    const necessities = (income * 0.5).toFixed(2);
    const wants = (income * 0.3).toFixed(2);
    const savings = (income * 0.2).toFixed(2);
  
    document.getElementById('necessitiesAmount').textContent = necessities;
    document.getElementById('wantsAmount').textContent = wants;
    document.getElementById('savingsAmount').textContent = savings;
  
    document.getElementById('budgetResults').classList.remove('hidden');
    document.getElementById('chatGPTLink').classList.remove('hidden');
  });
  
  // Copy Budget to Clipboard
  document.getElementById('copyBtn').addEventListener('click', () => {
    const text = `
  Necessities: $${document.getElementById('necessitiesAmount').textContent}
  Wants: $${document.getElementById('wantsAmount').textContent}
  Savings: $${document.getElementById('savingsAmount').textContent}
    `;
    navigator.clipboard.writeText(text).then(() => {
      alert("Budget copied to clipboard!");
    });
  });
  
  // Dark Mode Toggle
  document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
  