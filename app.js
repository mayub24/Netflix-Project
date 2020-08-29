const watch = document.querySelectorAll(`.card-content`);
const content = document.querySelectorAll(`.tab-content `);
// const watchItems  = document.querySelectorAll(`.card-content`);

watch.forEach(item => {
    item.addEventListener(`click`, selectItems);
})

// card-current has border so adding the class card-current will add it to any place that is clicked
function selectItems() {
    removeBorder();
    removeShow();
    // this.classList.add means whichever one is clicked, add the class 'card-current'
    // below adds border
    this.classList.add('card-current');
    // content.classList.add(`show`); 
    console.log(this.id);
    // Gets the item-NUMBER-content accociated with each icon
    const moreContent = document.querySelector(`#${this.id}-content`);
    moreContent.classList.add('show');
}

// Removes border for items that already have borders under it
function removeBorder() {
    watch.forEach(item => {
        // The one that has card-current, remove it
        item.classList.remove(`card-current`);
    })
}


// Removes class 'show' for tags that already have 'show' class
function removeShow() {
    content.forEach(item => {
        item.classList.remove('show');
    })
}

