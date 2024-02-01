
function GetChildsByTagName(parent, tagName) {
    return Array.from(parent.children).filter(child => child.tagName === tagName);
}

function FindChildByAttribute(parent, attributeName, attributeValue) {
    const children = parent.children;
  
    for (const child of children) {
      if (child.getAttribute(attributeName) == attributeValue) {
        return child;
      }
    }
  
    return null; // Retorna null si no se encontró ningún hijo con el atributo
  }
  
function GenerateStringOfHTMLCollectionWithAttribute(htmlCollection, attribute) {
    
    let error = false;

    if(!(htmlCollection instanceof HTMLCollection)){
        console.error(`[HTMLCollection to String function]: The first argument is not a HTMLCollection.`);
        error = true;
    }

    if(!(typeof attribute == "string")) {
        console.error(`[HTMLCollection to String function]: The second argument is not a string.`);
        error = true;
    }

    if(error) {
        return "";
    }


    let result = "";
    let currentIndex = 0;

    for(const htmlElement of htmlCollection) {
        if(!(htmlElement instanceof HTMLElement)) {
            continue;
        }

        const attributeValue = htmlElement.getAttribute(attribute); 

        if(typeof attributeValue == "undefined") {
            continue;
        }

        result += htmlElement.tagName+"."+attribute+" = "+attributeValue.toString()+"";

        if(htmlCollection.length-1 !== currentIndex) {
            result += ",\n";
        }

        currentIndex ++;
    }

    return result;

}

const imagesPlaceholders = document.getElementsByClassName("image-placeholder");

for (const currentPlaceholder of imagesPlaceholders) {
    if (!(currentPlaceholder instanceof HTMLElement)) {
        continue;
    }

    const imageLoadPath = currentPlaceholder.getAttribute("value");
    if (typeof imageLoadPath === "undefined") {
        console.error(`[Images Placeholder Settings]: The placeholder ${currentPlaceholder.id} doesn't have the attribute 'value'.`);
        continue;
    }

    const loadingImages = currentPlaceholder.getElementsByClassName('loading-image');
    if (loadingImages.length !== 1) {
        console.error(`[Images Placeholder Settings]: There is ${loadingImages.length} image(s) to load in the placeholder ${currentPlaceholder.id}`);
        continue;
    }

    const loadingImage = loadingImages[0];
    if (!(loadingImage instanceof HTMLImageElement)) {
        continue;
    }

    loadingImage.addEventListener("error", () => {
        const placeholderLoaders = currentPlaceholder.getElementsByClassName('placeholder-loader');

        if(!currentPlaceholder.getElementsByClassName("error").length < 0) {
            currentPlaceholder.innerHTML += (`<b class="error" style='color:red;'>No se cargó la imagen.</b>`);
        }
        
        for (const loader of placeholderLoaders) {
            loader.remove();
        }
    });

    loadingImage.addEventListener("load", () => {

        loadingImage.style.animation = "fade-in-animation 1s forwards ease-in";
        loadingImage.className = "loaded-image";

        const placeholderLoaders = currentPlaceholder.getElementsByClassName('placeholder-loader');
        for (const loader of placeholderLoaders) {
            loader.remove();
        }
    });

    loadingImage.src = imageLoadPath;
}

const multipleSelectionContainers = document.getElementsByClassName('multiple-selection');

const imageFullViewContainer = document.getElementById("image-full-view");
const currentImage = document.getElementById("image-full-view__current-image");
const imageViewCloseButton = document.getElementById("image-full-view__close-button");

imageFullViewContainer.style.display = "none";

var canAnimateImageViewClosing = true;

function UpdateImagesToSee() {
    for(const currentPlaceholder of imagesPlaceholders){
    
            currentPlaceholder.addEventListener("click", (evt)=>{
        
                let selectingIMG = currentPlaceholder.getElementsByTagName("img")[0];
                
                currentImage.addEventListener("load", ()=>{
                    if(currentImage.naturalHeight >= currentImage.naturalWidth || (currentImage.naturalHeight-currentImage.naturalWidth) <= 100){
                        currentImage.style.height = "calc(100% - 120px)";
                        currentImage.style.width = "auto";
                    } else {
                        currentImage.style.height = "auto";
                        currentImage.style.width = "calc(100% - 20px)";
                    }
            
                    imageFullViewContainer.style.animation = "fade-in-animation 0.25s ease-in forwards";
                    imageFullViewContainer.style.display = "unset";

                    console.log(currentImage.naturalWidth, currentImage.naturalHeight);
                });

                currentImage.src = selectingIMG.src;
                
                

            });
        
    }
}

UpdateImagesToSee();

for (const container of multipleSelectionContainers) {
    if (!(container instanceof HTMLElement)) {
        continue;
    }

    const selectionButtonsContainer = container.getElementsByClassName("selection-buttons")[0];
    const selectionsContainer = container.getElementsByClassName("selections")[0];
    const currentSelectionContainer = container.getElementsByClassName("current-selection")[0];

    const selectionButtons = Array.from(selectionButtonsContainer.children);
    const selections = Array.from(selectionsContainer.children);

    if (!(selectionButtonsContainer instanceof HTMLDivElement)) {
        console.error(`[Multiple Selection Setting]: The selections buttons container div hasn't been find in ` + container.id);
        continue;
    }

    if (!(selectionsContainer instanceof HTMLDivElement)) {
        console.error(`[Multiple Selections Settings]: The selections div hasn't been find in ` + container.id);
        continue;
    }

    if (!(currentSelectionContainer instanceof HTMLDivElement)) {
        console.error(`[Multiple Selections Settings]: The current selection div hasn't been find in ` + container.id);
        continue;
    }

    if (selectionButtons.length !== selections.length) {
        console.error(`[Multiple Selections Settings]: The buttons and selections do not match in ` + container.id + `. There is ` + selectionButtons.length.toString() + ` buttons and ` + selections.length.toString() + ` selectable divs.`);
        continue;
    }

    for (const selection of selections) {
        let match = false;
        for (const button of selectionButtons) {
            if (button.getAttribute("selection-id") == selection.getAttribute("selection-id")) {
                match = true;
            }
        }
        if (!match) {
            console.error(`[Multiple Selections Settings]: The next list don't match attribute "selection-id" in ` + container.id + `: \n\nSelection list:\n\n`,
                GenerateStringOfHTMLCollectionWithAttribute(selections, "selection-id"),
                `\n\nButtons selection list:\n\n`,
                GenerateStringOfHTMLCollectionWithAttribute(selectionButtons, "selection-id"));
        }
    }

    container.setAttribute("animating", "no");

    currentSelectionContainer.appendChild(FindChildByAttribute(selectionsContainer, 'selection-id', '0').cloneNode(true));

    selectionButtons[0].className = "selected-button";

    for (const button of selectionButtons) {
        button.addEventListener("click", () => {
            let currentSelection = currentSelectionContainer.children[0];

            if (currentSelection.getAttribute("selection-id") == button.getAttribute("selection-id") || container.getAttribute("animating") !== "no") {
                return;
            }

            container.setAttribute("animating", "yes");

            currentSelection.style.setProperty("animation", "moving-left-out-animation 0.25s forwards ease-out");

            let selectionToClone = FindChildByAttribute(selectionsContainer, "selection-id", button.getAttribute("selection-id"));

            if (!(selectionToClone instanceof HTMLElement) || selectionToClone == null) {
                console.error("[Multiple Selections Settings]: The selection in button with selection-id " + button.getAttribute('selection-id') + " doesn't exists.");
                container.setAttribute("animating", "no");
                return;
            }

            let newSelection = selectionToClone.cloneNode(true);
            
            button.className = "selected-button";
            FindChildByAttribute(selectionButtonsContainer, "selection-id", currentSelection.getAttribute("selection-id")).className = "";

            setTimeout(() => {
                currentSelection.remove();
                currentSelectionContainer.appendChild(newSelection);

                UpdateImagesToSee();

                newSelection.style.setProperty("animation", "moving-right-in-animation 0.25s forwards ease-in");

                setTimeout(() => {
                    container.setAttribute("animating", "no");
                }, 250);
            }, 250);
        });
    }
}


imageViewCloseButton.addEventListener("click", (evt) => {
    if(!canAnimateImageViewClosing){ 
        return;
    }
    canAnimateImageViewClosing = false;
    imageViewCloseButton.classList.add("pich-button");

    setTimeout(() => {
        imageViewCloseButton.classList.remove("pich-button");
        canAnimateImageViewClosing = true;
        imageFullViewContainer.style.animation = "fade-out-animation 0.25s ease-out forwards";
        setTimeout(() => {
            imageFullViewContainer.style.display = "none";
        }, 250);
    }, 600);
});