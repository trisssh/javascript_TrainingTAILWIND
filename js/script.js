const header = document.querySelector(".header");
const batches = document.querySelectorAll(".batches__tab__content");
batches.forEach((batches) => {
    
} )
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >=300) {
    header.classList.add("active");
    batches.classList.add("pink");

  } else {
    header.classList.remove("active");
    batches.classList.remove("pink");
  }
});

const batchNav = document.querySelectorAll(".trainee__nav__link");
const batchContent = document.querySelectorAll(".batches__tab__content");
batchNav.forEach((batch) => {
  batch.addEventListener("click", () => {
    removeActiveBatch();
    batch.classList.add("active");
    const activeContent = document.querySelector(`#${batch.id}-content`);
    removeActiveContent();
    activeContent.classList.add("active");
  });
});

function removeActiveBatch() {
  batchNav.forEach((batch) => {
    batch.classList.remove("active");
  });
}

function removeActiveContent() {
  batchContent.forEach((batch) => {
    batch.classList.remove("active");
  });
}
