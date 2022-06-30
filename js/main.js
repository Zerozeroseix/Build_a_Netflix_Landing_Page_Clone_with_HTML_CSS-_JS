const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// Select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();

  // Add border to the current tab
  this.classList.add("tab-border");

  // Grab content item from DOM (escolhe o ID (*-content) dinamicamente a partir do ID do Item, tab-1 tab-2 ou tab-3 )
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add show class
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}

// Listen for tab item click
tabItems.forEach((item) => {
  return item.addEventListener("click", selectItem);
});
