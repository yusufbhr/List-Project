var listİmg = {
    Actions: {
        getİmg: (x) => {
            if (x.id == "img1") {
                x.setAttribute("src", "Content/images/_dsc0548-1.jpg");
                x.classList.add("active");
            }
            if (x.id == "img2") {
                x.setAttribute("src", "Content/images/_dsc0530-1.jpg");
                x.classList.add("active");
            }
            if (x.id == "img3") {
                x.setAttribute("src", "Content/images/1.jpg");
                x.classList.add("active");
            }
            if (x.id == "img4") {
                x.setAttribute("src", "Content/images/_dsc0285-1.jpg");
                x.classList.add("active");
            }
            if (x.id == "img5") {
                x.setAttribute("src", "Content/images/_dsc0502-1.jpg");
                x.classList.add("active");
            }
            if (x.id == "img6") {
                x.setAttribute("src", "Content/images/1-1-of-1.jpg");
                x.classList.add("active");
            }
        },
        closeImg: (x) => {
            if (x.id == "img1") {
                x.setAttribute("src", "");
                x.classList.remove("active");
            }
            if (x.id == "img2") {
                x.setAttribute("src", "");
                x.classList.remove("active");
            }
            if (x.id == "img3") {
                x.setAttribute("src", "");
                x.classList.remove("active");
            }
            if (x.id == "img4") {
                x.setAttribute("src", "");
                x.classList.remove("active");
            }
            if (x.id == "img5") {
                x.setAttribute("src", "");
                x.classList.remove("active");
            }
            if (x.id == "img6") {
                x.setAttribute("src", "");
                x.classList.remove("active");
            }
        }

    }
}