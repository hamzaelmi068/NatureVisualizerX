onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  document.addEventListener('DOMContentLoaded', () =>{
    const flowers = document.querySelectorAll('.flower');

   flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            flower.classList.toggle('flower--clicked');
            // Add any additional animations or information display logic here

        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const flowers = document.querySelectorAll('.flower');
    const infoPanel = document.createElement('div');
    infoPanel.classList.add('info-panel');
    document.body.appendChild(infoPanel);

    flowers.forEach(flower => {
        flower.addEventListener('click', () => {
            const info = flower.getAttribute('data-info');
            infoPanel.textContent = info;
            infoPanel.classList.toggle('active');
        });
    });
});