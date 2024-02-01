const clickableElements = document.getElementsByClassName("clickable");

for(const clickableElement of clickableElements) {
    clickableElement.addEventListener("click", (evt)=>{

        let newElement = document.createElement("div");
        
        newElement.className = "circle";

        newElement.style.pointerEvents = "none";

        let sizeValue = 0;

        if(clickableElement.offsetWidth > clickableElement.offsetHeight) {
            sizeValue = clickableElement.offsetWidth;
        } else {
            sizeValue = clickableElement.offsetHeight;
        }

        if(sizeValue == 0) {
            sizeValue = 1;
        }

        newElement.style.height = (sizeValue/10).toString()+"px";
        newElement.style.width = (sizeValue/10).toString()+"px";

        newElement.style.borderRadius = "50%";
        newElement.style.backgroundColor = "rgb(0, 0, 0, 0.6)";
        newElement.style.animation = "bigger 250ms forwards ease-out";

        newElement.style.position = "absolute";
        newElement.style.transform = "translate(-50%, -50%)";

        newElement.style.top = "50%";
        newElement.style.left = "50%";

        newElement.style.pointerEvents = "none";
        

        let oldClickableElementPositionValue = clickableElement.style.position;

        if(clickableElement.style.position === "static") {
            clickableElement.style.position = "relative"
        }

        clickableElement.appendChild(newElement);

        setTimeout(() => {
            newElement.remove();
            clickableElement.style.position = oldClickableElementPositionValue;
        }, 250);
    });
}

const allPicturesContainer = document.getElementById("all-pictures");

const picturesFolderPathTag = document.getElementById("meta:current-gallery-path");
const filesInFolderTag = document.head.querySelector(`meta[name="file-names"]`);

const filesInFolder = filesInFolderTag.content.split(",");
const picturesFolderPath = picturesFolderPathTag.content;

picturesFolderPathTag.remove();
filesInFolderTag.remove();

const allPictures = document.getElementById("all-pictures")

function CreateImagePlaceholder(imagePath) {

    let newImagePlaceholder = document.createElement("picture");

    newImagePlaceholder.className = "image-placeholder";
    newImagePlaceholder.setAttribute("ImageLoadPath", imagePath);

    let newLoader = document.createElement("div");

    newLoader.className = "placeholder-loader"

    newLoader.style.height = "20px";
    newLoader.style.width = "20px";

    newLoader.style.position = "absolute";

    newLoader.style.left = "50%";
    newLoader.style.top = "50%";

    newLoader.style.animation

    let newImageElement = new Image();

    newImageElement.className = "loading-image";

    newImagePlaceholder.appendChild(newImageElement);
    newImagePlaceholder.appendChild(newLoader);

    return newImagePlaceholder;
}

let placeholderId = 0;

for(const fileName of filesInFolder) {
    if(fileName.length < 1) {
        continue;
    }
    let placeholder = CreateImagePlaceholder(picturesFolderPath+"/"+fileName);

    placeholder.id = placeholderId.toString();
    allPictures.appendChild(placeholder);

    placeholderId ++;
}

const fullImageContainer = document.getElementById("full-image");
const fullImageBox = document.getElementById("full-image-box");
const currentFullImage = document.getElementById("current-full-image");

const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const closeButton = document.getElementById("close-button");

var selectedImageId = "0";

closeButton.addEventListener("click", () => {
    setTimeout(() => {
        fullImageContainer.style.animation = "fade-out-animation 0.25s forwards ease-out";
        setTimeout(() => {
            fullImageContainer.style.display = "none";
        }, 250);
    }, 250);
});

function SetCurrentFullImage(imagePlaceholder) {
    selectedImageId = imagePlaceholder.id;
    currentFullImage.src = imagePlaceholder.getElementsByTagName('img')[0].src
}

function ShowFullImageContainer() {

    previousButton.style.animation = "unset";
    nextButton.style.animation = "unset";
    closeButton.style.animation = "unset";

    setTimeout(() => {

        previousButton.style.animation = null;
        nextButton.style.animation = null;
        closeButton.style.animation = null;
    }, 1750);

    fullImageContainer.style.animation = "fade-in-animation 0.25s forwards ease-in";
    fullImageContainer.style.display = "unset";
}

currentFullImage.addEventListener("load", ()=>{
    currentFullImage.animation = "fade-in-animation 0.25s forwards ease-in";
});

previousButton.addEventListener("click", (evt)=>{
    let placeholderTarget = parseInt(selectedImageId) -1;
    
    if (placeholderTarget < 0) {
        console.log("back to the last");
        placeholderTarget = parseInt(placeholderId-1);
    }

    SetCurrentFullImage(document.getElementById(placeholderTarget.toString()));
    currentFullImage.style.opacity = 0;
    currentFullImage.style.animation = null;
    setTimeout(() => {
        currentFullImage.style.animation = "fade-in-animation 0.5s forwards ease-in";
    }, 50);
    
});

nextButton.addEventListener("click", (evt)=>{
    let placeholderTarget = parseInt(selectedImageId) +1;

    if (placeholderTarget > placeholderId-1) {
        placeholderTarget = 0;
    }

    SetCurrentFullImage(document.getElementById(placeholderTarget.toString()));
    currentFullImage.style.opacity = 0;
    currentFullImage.style.animation = null;
    setTimeout(() => {
        currentFullImage.style.animation = "fade-in-animation 0.5s forwards ease-in";
    }, 50);
});

fullImageContainer.style.display = "none";

const imagesPlaceholders = document.getElementsByClassName("image-placeholder");

for (const currentPlaceholder of imagesPlaceholders) {
    if (!(currentPlaceholder instanceof HTMLElement)) {
        continue;
    }

    const imageLoadPath = currentPlaceholder.getAttribute("ImageLoadPath");
    if (typeof imageLoadPath === "undefined") {
        console.error(`[Images Placeholder Settings]: The placeholder ${currentPlaceholder.id} doesn't have the attribute 'ImageLoadPath'.`);
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

    currentPlaceholder.addEventListener("click", ()=>{
        SetCurrentFullImage(currentPlaceholder);
        ShowFullImageContainer();
    });

    loadingImage.addEventListener("error", () => {
        /*const placeholderLoaders = currentPlaceholder.getElementsByClassName('placeholder-loader');
        
        if(currentPlaceholder.getElementsByClassName("error").length < 1) {
            currentPlaceholder.innerHTML += (`<b class="error" style='color:red;font-family:\"Poppins\", sans-serif;'>No se cargó la imagen.</b>`);
        }
        
        for (const loader of placeholderLoaders) {
            loader.remove();
        }*/
    });

    loadingImage.addEventListener("load", () => {


        if(loadingImage.naturalHeight > loadingImage.naturalWidth) {
            loadingImage.style.height = "auto";
            loadingImage.style.width = "100%";
        } else {
            loadingImage.style.height = "100%";
            loadingImage.style.width = "auto";
        }

        loadingImage.className = "loaded-image";
        loadingImage.style.animation = "fade-in-animation 1s forwards ease-in";

        setTimeout(() => {
            loadingImage.style.animation = "unexpand 0.25s forwards ease-out";
            loadingImage.style.opacity = "1";
        }, 1000);

        const placeholderLoaders = currentPlaceholder.getElementsByClassName('placeholder-loader');
        for (const loader of placeholderLoaders) {
            loader.remove();
        }
    });

    loadingImage.src = imageLoadPath;
}
