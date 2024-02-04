class FullView{

    parentElement;
    fullviewElement;
    imageElement;

    loadingSpin;

    closeButton;
    nextButton;
    prevButton;

    currentIndex = -1;

    isAnimating = false;

    setImage(newImage){
        if(newImage instanceof Image) {

            this.imageElement.src = newImage.src;
            this.imageElement.alt = newImage.src

            if(newImage.getAttribute("data-index")){
                this.currentIndex = (parseInt(newImage.getAttribute("data-index")) - 1)

                if(this.currentIndex == null || isNaN(this.currentIndex)) {this.currentIndex = -1}
            }
        } else if (typeof newImage == "string") {
            this.imageElement.src = newImage;
            this.currentIndex = -1
        }

        this.prevButton.style.display = (this.currentIndex == -1) ? "none" : "unset";
        this.nextButton.style.display = (this.currentIndex == -1) ? "none" : "unset";

        this.imageElement.style.opacity = "0";

        this.setLoadingSpin(true);
    }

    setLoadingSpin (enabled) {
        if(enabled) {
            this.imageElement.classList.add("hidden");
            this.loadingSpin.classList.remove("hidden");
        } else {
            this.imageElement.classList.remove("hidden");
            this.loadingSpin.classList.add("hidden");

            setTimeout(() => { 
                this.imageElement.style.opacity = "1";
            }, 100);

        }
    }

    setButtonsVisibility(enabled) {
        if(enabled) {
            this.closeButton.classList.remove("fade-out");
            this.prevButton.classList.remove("fade-out");
            this.nextButton.classList.remove("fade-out");
        } else {
            this.closeButton.classList.add("fade-out");
            this.prevButton.classList.add("fade-out");
            this.nextButton.classList.add("fade-out");
        }
    }

    show(duration=250) {
        if(this.isAnimating) {return}
        this.isAnimating = true;

        this.fullviewElement.classList.remove("hidden");

        const animation = this.fullviewElement.animate(
            [ {opacity:"0"}, {opacity:"1"}],
            {"duration":duration, fill:"forwards"}
        )

        animation.play();


        this.setButtonsVisibility(true);

        setTimeout(() => {
            animation.commitStyles();
            this.isAnimating = false;
            
            setTimeout(() => {
                this.setButtonsVisibility(false);
            }, 1200);


        }, duration);

    }

    hide(duration=250) {
        if(this.isAnimating) {return}
        this.isAnimating = true;


        const animation = this.fullviewElement.animate(
            [ {opacity:"1"}, {opacity:"0"}],
            {"duration":duration, fill:"forwards"}
        )

        animation.play();

        setTimeout(() => {
            this.fullviewElement.classList.add("hidden");
            animation.finish();
            this.isAnimating = false;
        }, duration);

    }

    prevImage(){
        const containerElement = document.getElementById("images-container");

        if(containerElement) {
            const nextIndex = (this.currentIndex + 1 >= containerElement.children.length) ? 0 : this.currentIndex + 1;
            this.setImage(containerElement.children[nextIndex].querySelector("img"));
        }
    }

    nextImage(){
        const containerElement = document.getElementById("images-container");

        if(containerElement) {
            const nextIndex = (this.currentIndex - 1 < 0) ? containerElement.children.length-1 : this.currentIndex - 1;
            this.setImage(containerElement.children[nextIndex].querySelector("img"));
        }
    }

    enableView() {
        this.imageElement = this.fullviewElement.querySelector("#fullview-image");

        this.loadingSpin = this.fullviewElement.querySelector(".loading-spin");

        this.closeButton = this.fullviewElement.querySelector(".close-button");
        this.nextButton = this.fullviewElement.querySelector(".next-button");
        this.prevButton = this.fullviewElement.querySelector(".prev-button");

        this.closeButton.addEventListener("click", ()=>this.hide());

        this.nextButton.addEventListener("click", ()=>this.nextImage());
        this.prevButton.addEventListener("click", ()=>this.prevImage());

        const onMouseEnter = ()=>this.setButtonsVisibility(true);
        const onMouseLeave = ()=>this.setButtonsVisibility(false);

        this.closeButton.addEventListener("mouseenter", onMouseEnter);
        this.nextButton.addEventListener("mouseenter", onMouseEnter);
        this.prevButton.addEventListener("mouseenter", onMouseEnter);

        this.closeButton.addEventListener("mouseleave", onMouseLeave);
        this.nextButton.addEventListener("mouseleave", onMouseLeave);
        this.prevButton.addEventListener("mouseleave", onMouseLeave);

        this.imageElement.addEventListener("load", ()=>this.setLoadingSpin(false));
    }

    async buildElement(htmLink, parentElement, baseChild) {
        let htmCode;

        try {
            htmCode = await(fetch(htmLink, {cache:"no-cache"}).then(res=>res.text()));
        } catch(err) {
            console.error("FullViewError: the htm link \""+htmLink+"\" has an error: ", err);
            return;
        }
        

        if(htmCode) {

            const container = document.createElement("div");
            container.innerHTML = htmCode;

            this.fullviewElement = container.querySelector("#fullview-container");

            if(!this.fullviewElement) {
                console.error("FullViewError: the htm link \""+htmLink+"\" is not valid.");
                return;
            }

            if(parentElement instanceof Element) {

                if(parentElement.contains(baseChild)) {
                    parentElement.insertBefore(this.fullviewElement, baseChild);
                } else {
                    parentElement.appendChild(this.fullviewElement);
                }

                this.enableView();

            } else {
                console.error("FullViewError: parentElement cannot be null.");
            }

        }



    }

    constructor(htmLink, parentElement, baseChild) {
        this.buildElement(htmLink, parentElement, baseChild);
    }
}

window.fullview = new FullView(
    document.currentScript.getAttribute("data-htm-link"),
    document.currentScript.parentElement,
    document.currentScript
);