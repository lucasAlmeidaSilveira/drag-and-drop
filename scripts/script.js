const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

function dragstart() {
  /*   console.log("start dragging"); */
  dropzones.forEach(dropzone => dropzone.classList.add('highlight'));
  this.classList.add('is-dragging')
}
function drag() {
  /*   console.log("is drag"); */
}
function dragend() {
  /*   console.log("stop drag"); */
  dropzones.forEach(dropzone => dropzone.classList.remove('highlight'));
  this.classList.remove('is-dragging')
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {
  // console.log("Enter: Enter in zone");
}
function dragover() {
  // console.log("Over: In the zone");
  this.classList.add('over')

  // get dragging card
  const cardBeingDragged = document.querySelector('.is-dragging')

  this.appendChild(cardBeingDragged)
}
function dragleave() {
  // console.log("Leave: leave");
  this.classList.remove('over')
}
function drop() {
  // console.log("drop: dropped");
  this.classList.remove('over')
}
