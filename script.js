const envelope = document.getElementById('envelope');
const toggleBtn = document.getElementById('toggle');

function toggleEnvelope() {
  const isOpen = envelope.classList.toggle('open');
  toggleBtn.textContent = isOpen ? 'Levél bezárása' : 'Levél kinyitása';
}

envelope.addEventListener('click', toggleEnvelope);
toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleEnvelope();
});
