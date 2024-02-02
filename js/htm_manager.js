class HTMManager {

    async findNodes(where) {
        for(const node of Array.from(where.children)) {
            if(node instanceof HTMLElement) {

                if(node.children.length > 0) {
                    this.findNodes(node);
                }

                if (node.hasAttribute("data-content-path")) {
                    const nodeContentPath = node.getAttribute("data-content-path");
                    node.setAttribute("data-content-path", "");

                    if(nodeContentPath.length < 1) {continue;}

                    let nodeContent;

                    try {
                        nodeContent = await (fetch(nodeContentPath, {cache:"no-cache"}).then(res=>res.text()));
                    } catch(err) {
                        console.error("Error fetching \""+nodeContentPath+"\", error: ", err);
                        continue;
                    }

                    node.innerHTML = nodeContent;
                }

            }
        }
    }

    constructor() {
        const mutationObserver = new MutationObserver((mutations, observer) =>{
            for (const mutation of mutations) {
                if(mutation.type == "childList"){
                    this.findNodes(document.body);
                }
            }
        });

        mutationObserver.observe(document.body, {
            childList:true,
            subtree:true
        });

        this.findNodes(document.body);
    }
}

window.addEventListener("load", ()=>{
    window.HTMManager = new HTMManager();
});