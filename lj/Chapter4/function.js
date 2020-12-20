const staff = [{firstname: "Nigel", lastname: "Richardson", sex: "M"}, 
               {firstname: "Cheryl", lastname: "Longford", sex: "F"},
               {firstname: "Terry", lastname: "Washington", sex: "M"}];

function displayStaff(staff){
    for (let s in staff){
        if (staff[s].sex == "F") {
            console.log("Name: " + staff[s].firstname + " " + staff[s].lastname);
        }

    }
}

// displayStaff(staff);

var newStaff = {
    setValue: function(props, value) {
        while (props.lastname){
            this[props.pop] = value;
        }
    }
};

newStaff =  [{firstname: "Nigel", lastname: "Richardson", sex: "M"}, 
            {firstname: "Cheryl", lastname: "Longford", sex: "F"},
            {firstname: "Terry", lastname: "Washington", sex: "M"}];
let gender;

function displayNewStaff(newStaff){
    for (let s in newStaff){
        switch (newStaff[s].sex){
            case "F":
                gender="Female";
                break;
            case "M":
                gender="Male";
        }
        
        console.log("Name: " + newStaff[s].firstname + " " + newStaff[s].lastname + " Sex: " + gender);
    }
}

displayNewStaff(newStaff);