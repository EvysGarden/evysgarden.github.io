var tools = {
    open: function(link) {
        location.href = link;
    }
}

class NavBox {
    constructor() {
        this.opened = false;
    }

    toggle() {
        var navigation = document.getElementById("navigation");
        if (this.opened) {
            navigation.style.visibility = "collapse";
        } else {
            navigation.style.visibility = "visible";
        }
        this.opened = !this.opened;
    }
}
let navBox = new NavBox