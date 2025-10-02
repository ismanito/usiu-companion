// public/script.js
// Lesson-1 JavaScript only: prompt, alert, DOM, basic math, console.log

// Personalized greeting on load
(function greetingOnLoad(){
  const studentName = prompt("Welcome to USIU! What's your first name?");
  if (studentName === null || studentName.trim() === "") {
    console.log('No name provided; using "Student" fallback');
    document.getElementById('greeting').textContent = 'Hello, Student 👋';
  } else {
    alert('Karibu, ' + studentName + '!');
    console.log('Student entered name:', studentName);
    document.getElementById('greeting').textContent = 'Hello, ' + studentName + ' 👋';
  }

  // Optional: auto-switch theme based on hour (extension)
  tryAutoTheme();
})();

function tryAutoTheme() {
  try {
    const hour = new Date().getHours();
    console.log('Current hour:', hour);
    // simple rule: night if before 6am or after 18 (6pm)
    if (hour < 6 || hour >= 18) {
      applyNightTheme();
      console.log('Auto-applied night theme');
    } else {
      applyDayTheme();
      console.log('Auto-applied day theme');
    }
  } catch (e) {
    console.log('Auto theme check failed', e);
  }
}

function runEstimator(){
  const days = Number(prompt('How many days per week do you come to campus? (e.g., 3)'));
  const costPerTrip = Number(prompt('Average transport cost per trip in KSh? (e.g., 120)'));
  const snacksPerDay = Number(prompt('Snacks per day? (e.g., 2)'));
  const snackPrice = Number(prompt('Average price per snack in KSh? (e.g., 80)'));

  // Basic validation
  if ([days, costPerTrip, snacksPerDay, snackPrice].some(v => Number.isNaN(v) || v < 0)){
    alert('Please enter valid numeric values for all prompts. Try again.');
    console.log('Invalid estimator inputs', { days, costPerTrip, snacksPerDay, snackPrice });
    return;
  }

  const transportWeekly = days * costPerTrip * 2; // to & from
  const snacksWeekly = days * snacksPerDay * snackPrice;
  const totalWeekly = transportWeekly + snacksWeekly;
  const save10 = totalWeekly * 0.10;
  const totalWithSavings = totalWeekly - save10;

  console.log({ days, costPerTrip, snacksPerDay, snackPrice, transportWeekly, snacksWeekly, totalWeekly, totalWithSavings });

  const studentIdLine = 'Generated for: <Your Student ID here>'; // TODO: user to replace with their ID
  const tip = 'Tip: To save 10% try carpooling or reducing snack runs to campus-only days.';

  const summary = `Weekly Transport: KSh ${transportWeekly}\nWeekly Snacks: KSh ${snacksWeekly}\n-------------------------------\nWeekly Total: KSh ${totalWeekly}\nIf you cut 10%: KSh ${Math.round(totalWithSavings)}\n\n${tip}\n${studentIdLine}`;

  document.getElementById('summary').innerText = summary;
  alert('Check your summary on the page. All details logged to console for debugging.');
}

function toggleTheme(){
  const current = document.body.getAttribute('data-theme');
  if (current === 'dark') {
    document.body.removeAttribute('data-theme');
    console.log('Theme toggled to day');
  } else {
    document.body.setAttribute('data-theme', 'dark');
    console.log('Theme toggled to dark');
  }
}

function applyNightTheme(){
  document.body.setAttribute('data-theme','dark');
}
function applyDayTheme(){
  document.body.removeAttribute('data-theme');
}

function resetSummary(){
  document.getElementById('summary').innerText = 'Run the estimator to see your weekly plan…';
  console.log('Summary reset to default');
}
