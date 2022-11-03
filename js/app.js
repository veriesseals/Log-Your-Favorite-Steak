// -------------------------------------------------------------
// First method for the Prototype Constructor

// Favorite restuarants
class FavRestuaraunt {
    constructor() {
        this.favChoice = {
            fName: '',
            lName: '',
            email: '',
            restuarant:'',
            steak:'',
            image:''
            
            
        }
        

    }

// ----------------------------------------------------------
// Submit Button

button(){
    let button = document.getElementById('submitBtn');
    button.addEventListener('click', this.displayData);
    // button.addEventListener('click', () => console.log('clicked'));
    
};


displayData(e){
    e.preventDefault();
        let firstName = document.getElementById('firstName').value;
        let lastName = document.getElementById('lastName').value;
        let steakLoversEmail = document.getElementById('steakLoversEmail').value;
        let restuarant = document.getElementById('restuarant').value;
        let steak = document.getElementById('steak').value;
        let inputImage = document.getElementById('image').value;


        this.favChoice = {
            fName: firstName,
            lName: lastName,
            email: steakLoversEmail,
            restuarant:restuarant,
            steak:steak,
            image: inputImage
        }

        console.log(this.favChoice);

    }

}

let action = new FavRestuaraunt();
action.button();



