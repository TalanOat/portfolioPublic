//tile toggles

const aboutTiles = document.querySelectorAll('.top-row');

const tileStates = {};

aboutTiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    console.log("pressed: ", event.currentTarget.id);  
    const parentTile = event.currentTarget.parentElement;
    parentTile.classList.toggle('active');

    const mainRow = parentTile.querySelector('.main-row');
    mainRow.classList.toggle('active');

    const toggleButton = parentTile.querySelector('.toggle');
    toggleButton.classList.toggle('active');
  });
});
