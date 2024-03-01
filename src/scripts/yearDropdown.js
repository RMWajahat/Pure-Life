const yearSelect = () => {
  let selectYear = document.getElementById('birthYear');
  let currentYear = (new Date()).getFullYear();

  for (let i = currentYear; i >= 1913; i--) {
    let option = document.createElement('option');
    option.innerHTML = i;
    option.value = i;
    selectYear.appendChild(option);
  }

  document.getElementById('birthYear').value = '';
}