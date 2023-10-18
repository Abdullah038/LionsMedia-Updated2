const primaryRoot = document.documentElement;

// For the first scrolling area
const displayedItemsCount = getComputedStyle(primaryRoot).getPropertyValue("--scroll-items-displayed");
const contentArea1 = document.querySelector("#scrollingArea1 ul.scrollItems");

primaryRoot.style.setProperty("--scroll-items", contentArea1.children.length);

for(let index=0; index<displayedItemsCount; index++) {
    contentArea1.appendChild(contentArea1.children[index].cloneNode(true));
}

// For the second scrolling area
const contentArea2 = document.querySelector("#scrollingArea2 ul.scrollItems");

primaryRoot.style.setProperty("--scroll-items", contentArea2.children.length);

for(let index=0; index<displayedItemsCount; index++) {
    contentArea2.appendChild(contentArea2.children[index].cloneNode(true));
}