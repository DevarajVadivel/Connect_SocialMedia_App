const commentBox = document.getElementsByClassName("writeComment");

// for (let index = 0; index < commentBox.length; index++) {

//     commentBox[index].addEventListener('input', function() {
//         console.log('am i working?');
//         const lines = commentBox[index].value.split('\n').length;
//         commentBox[index].rows = lines > 5 ? 5 : lines;
//       });

// }

for (let index = 0; index < commentBox.length; index++) {
  commentBox[index].addEventListener("input", function () {
    console.log("am i working?");

    const maxRows = 5;
    const previousRows = commentBox[index].rows;
    commentBox[index].rows = 1; // Reset to a single row to calculate scroll height correctly
    const currentRows = Math.floor(commentBox[index].scrollHeight / 20); // Adjust 20 based on your font size and line height
    // commentBox[index].rows = currentRows;
    commentBox[index].rows = currentRows > maxRows ? maxRows : currentRows;

    if (currentRows > previousRows) {
      commentBox[index].scrollTop = commentBox[index].scrollHeight; // Scroll to the bottom if the box expanded
    }
  });
}

const profileContainers = document.querySelectorAll('.profile');
const listItems = document.querySelectorAll('.list');

profileContainers.forEach((profileContainer, index) => {
  const moreIcon = profileContainer.querySelector('i.fa-ellipsis-vertical');

  moreIcon.addEventListener('click', function (e) {
    e.stopPropagation();

    moreIcon.classList.toggle('active');
    const listItem = profileContainer.querySelector('.list');

    listItem.classList.toggle('show');
  
  });
});

window.addEventListener('click', function () {
  listItems.forEach((listItem) => {
    listItem.classList.remove('show');
  });

  const activeMoreIcons = document.querySelectorAll('.profile i.fa-ellipsis-vertical.active');
  activeMoreIcons.forEach((activeMoreIcon) => {
    activeMoreIcon.classList.remove('active');
  });
});
