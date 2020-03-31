// ---------------------------
// Product List Implementation
// ---------------------------
let ProductList = {
    list: [
        {
            name: "tomato",
            quantity: 10,
            bought: false
        },
        {
            name: "potato",
            quantity: 12,
            bought: false
        },
        {
            name: "apple",
            quantity: 5,
            bought: false
        },
        {
            name: "melon",
            quantity: 1,
            bought: false
        },
        {
            name: "toilet paper",
            quantity: 1000000,
            bought: true
        },
        {
            name: "hand sanitizer",
            quantity: 1000000,
            bought: true
        }

    ],

    getList: function () {
        let result = "<ol>";
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {
            if (!this.list[i].bought) {
                result += `<li>Product name: ${this.list[i].name}<br> quantity: ${this.list[i].quantity}<br> bought: No</li>`;
            }
        }
        for (let i = 0; i < listLength; i++) {
            if (this.list[i].bought) {
                result += `<li>Product name: ${this.list[i].name}<br> quantity: ${this.list[i].quantity}<br> bought: Yes</li>`;
            }
        }
        result += "</ol>";
        return result;
    },

    addItem: function (_name, _quantity) {
        let i = this.list.findIndex(j => j.name == _name);

        if (i > 0) {
            this.list[i].quantity += Number(_quantity);
        }
        else {
            this.list.push({ name: _name, quantity: _quantity, bought: false });
        }
    },

    setBought: function (_name) {
        let i = this.list.findIndex(j => j.name == _name);

        if (i > 0) {
            this.list[i].bought = true;
            return true;
        }
        else {
            return false;
        }

    }
};



// -----------------------------
// Shopping Check Implementation
// -----------------------------
let ShoppingCheck = {
    list: [
        {
            name: "potato",
            quantity: 10,
            price: 5.25
        },
        {
            name: "tomato",
            quantity: 5,
            price: 7
        },
        {
            name: "apple",
            quantity: 10,
            price: 5.25
        },
        {
            name: "premium apple",
            quantity: 1,
            price: 999.99
        },
        {
            name: "toilet paper",
            quantity: 1000000,
            price: 2999.99
        },
        {
            name: "hand sanitizer",
            quantity: 1000000,
            price: 750.5
        }
    ],

    getCheck: function () {
        let result = "<ol>";
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {

            result += `<li>Product name: ${this.list[i].name}<br> quantity: ${this.list[i].quantity}<br> price: ${this.list[i].price}`;

        }
        result += "</ol>";
        return result;
    },

    getTotalPrice: function () {
        let result = 0;
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {
            result += this.list[i].price * this.list[i].quantity;
        }
        return result;

    },

    getMostExpensive: function () {
        let maxIndex, max = 0;
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {
            if (this.list[i].price > max) {
                max = this.list[i].price;
                maxIndex = i;
            }
        }
        return this.list[maxIndex];

    },

    getAvgPrice: function () {
        let listLength = this.list.length;
        let total = 0;
        for (let i = 0; i < listLength; i++) {
            total += this.list[i].price;

        }
        return total / listLength;
    }

};



// ---------------------------
// Styles Array Implementation
// ---------------------------
let styles = [
    {
        name: "font-size",
        value: "16px"
    },
    {
        name: "color",
        value: "#aaaaaa"
    },
    {
        name: "text-align",
        value: "center"
    },
    {
        name: "text-decoration",
        value: "underline"
    }
];
function addText(text, style) {
    let output = '<p style="'

    for (let i = 0; i < style.length; i++) {
        output += `${style[i].name}: ${style[i].value};`;
    }
    output += '">' + text + "</p>";
    return output;
}



// --------------------------------
// Academy Audiences Implementation
// --------------------------------
let AcademyAudiences = {
    list: [
        {
            name: "Room made of cheese",
            maxPeople: 4, //max mice: 30
            faculty: "Faculty of Mice and Men"
        },
        {
            name: "Ordinary room",
            maxPeople: 15,
            faculty: "Gryffindor"
        },
        {
            name: "Magically enlarged room",
            maxPeople: 500,
            faculty: "Gryffindor"
        },
        {
            name: "404",
            maxPeople: null,
            faculty: "Faculty of Not Found Pages"
        }
    ],
    getAudiences: function () {
        let result = "<ol>";
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {

            result += `<li>Audience name: ${this.list[i].name}<br> Max number of people: ${this.list[i].maxPeople}<br> Faculty: ${this.list[i].faculty}`;

        }
        result += "</ol>";
        return result;

    },

    getAudByFaculty: function (_faculty) {
        let result = "<ol>";
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {
            if (this.list[i].faculty == _faculty) {
                result += `<li>Audience name: ${this.list[i].name}<br> Max number of people: ${this.list[i].maxPeople}<br> Faculty: ${this.list[i].faculty}`;
            }
        }
        result += "</ol>";
        return result;
    },

    getAudForGroup: function (_group) {
        let result = "<ol>";
        let listLength = this.list.length;

        for (let i = 0; i < listLength; i++) {
            if ((this.list[i].faculty == _group.faculty) && (this.list[i].maxPeople >= _group.peopleCount)) {
                result += `<li>Audience name: ${this.list[i].name}<br> Max number of people: ${this.list[i].maxPeople}<br> Faculty: ${this.list[i].faculty}`;
            }
        }
        result += "</ol>";
        return result;
    },

    sortByName: function () {
        function compare(a, b) {
            const bandA = a.name.toUpperCase();
            const bandB = b.name.toUpperCase();

            let comparison = 0;
            if (bandA > bandB) {
                comparison = 1;
            } else if (bandA < bandB) {
                comparison = -1;
            }
            return comparison;
        }

        this.list.sort(compare);
    },

    sortByMaxPeople: function () {
        function compare(a, b) {

            let comparison = 0;
            if (a.maxPeople > b.maxPeople) {
                comparison = 1;
            } else if (a.maxPeople < b.maxPeople) {
                comparison = -1;
            }
            return comparison;
        }

        this.list.sort(compare);

    }

};
let StudentGroups = [
    {
        name: "group1",
        peopleCount: 10,
        faculty: "Gryffindor"
    },
    {
        name: "group2",
        peopleCount: 400,
        faculty: "Gryffindor"
    }

];













let PL_out = document.getElementById("pl_out");
let SC_out = document.getElementById("sc_out");
let ST_out = document.getElementById("st_out")
let AA_out = document.getElementById("aa_out");

// -------------------------
// Product List UI Functions
// -------------------------
function printPLList() {
    PL_out.innerHTML = ProductList.getList();
}

function AddToPL() {
    let name = document.getElementById("pl_add_name").value;
    let quantity = document.getElementById("pl_add_quantity").value;
    ProductList.addItem(name, quantity);
    printPLList();
}

function setBoughtPL() {
    let name = document.getElementById("pl_name_bought").value;
    ProductList.setBought(name);
    printPLList();
}




// ---------------------------
// Shopping Check UI Functions
// ---------------------------
function printSCList() {
    SC_out.innerHTML = ShoppingCheck.getCheck();
}

function SCgetTotalPrice() {
    SC_out.innerHTML = "Total price of items: " + ShoppingCheck.getTotalPrice();
}

function SCMostExpensive() {
    let item = ShoppingCheck.getMostExpensive();
    SC_out.innerHTML = `The most expensive item is: ${item.name} for ${item.price}$`;
}

function SCAvg() {
    SC_out.innerHTML = "Average price of items: " + ShoppingCheck.getAvgPrice() + "$";
}




// -------------------------
// Styles Array UI Functions
// -------------------------

function printStyle() {
    let input = document.getElementById("st_in").value;
    ST_out.innerHTML = addText(input, styles);

}




// ------------------------------
// Academy Audiences UI Functions
// ------------------------------

function printAA() {
    AA_out.innerHTML = AcademyAudiences.getAudiences();
}

function AAByFaculty() {
    let faculty = document.getElementById("aa_select_faculty").value;

    AA_out.innerHTML = AcademyAudiences.getAudByFaculty(faculty);
}

function AAForGroup() {
    let group = document.getElementById("aa_select_group").value;
    let groupindex;

    if (group == "Large") {
        groupindex = 1;
    }
    else {
        groupindex = 0;
    }

    AA_out.innerHTML = AcademyAudiences.getAudForGroup(StudentGroups[groupindex]);
}

function AASortName() {
    AcademyAudiences.sortByName();
    printAA();
}

function AASortMaxPeople() {
    AcademyAudiences.sortByMaxPeople();
    printAA();
}
