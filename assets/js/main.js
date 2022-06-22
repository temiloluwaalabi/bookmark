const mobileOpen = document.querySelector(".mobile-open"),
    mobileClose = document.querySelector(".mobile-close"),
    tabImage = document.querySelector(".features-image"),
    tabContentHeading = document.querySelector(".tab-content-layer h1"),
    tabContentPara = document.querySelector(".tab-content-layer p"),
    tabHeaderOne = document.querySelector(".tab-header-one"),
    tabHeaderTwo = document.querySelector(".tab-header-two"),
    tabHeaderThree = document.querySelector(".tab-header-three"),
    mobileMenu = document.querySelector(".mobile-menu-container");

    mobileOpen.addEventListener("click", ()=>{
        mobileMenu.classList.add("show");

        mobileOpen.style.display = "none";
        mobileClose.style.display = "block"
    })

    mobileClose.addEventListener("click", ()=>{
        mobileMenu.classList.remove("show");

        mobileOpen.style.display = "block";
        mobileClose.style.display = "none"
    })

    tabHeaderTwo.addEventListener("click", ()=>{
        tabImage.src = "images/illustration-features-tab-2.svg";
        tabContentHeading.textContent = "Intelligent Search";
        tabContentPara.textContent = "Our powerful search feature will help you find sites in no time at all. No need to crawl through all your bookmarks";
    })
    tabHeaderThree.addEventListener("click", ()=>{
        tabImage.src = "images/illustration-features-tab-3.svg";
        tabContentHeading.textContent = "Share your bookmark";
        tabContentPara.textContent = "Easily share your bookmark and collections with others. Create a shareable link that you can send at the click of a button";
    })
    tabHeaderOne.addEventListener("click", ()=>{
        tabImage.src = "images/illustration-features-tab-1.svg";
        tabContentHeading.textContent = "Bookmark in one click";
        tabContentPara.textContent = "Organise your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites";
    })