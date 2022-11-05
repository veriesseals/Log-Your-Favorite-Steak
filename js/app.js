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
        let inputImage = document.getElementById('inputImage').value;


        this.favChoice = {
            fName: firstName,
            lName: lastName,
            email: steakLoversEmail,
            restuarant:restuarant,
            steak:steak,
            image: inputImage
        }

        console.log(this.favChoice);

        let steakCardDisplay = document.getElementById('steakCardDisplay');
        steakCardDisplay.innerHTML += `
                    <div class="card mb-3">
                            <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${this.favChoice.image}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h2 class="card-title">${this.favChoice.steak}</h2>
                                <p class="card-text">${'First Name: ' + this.favChoice.fName}</p>
                                <p class="card-text">${'Last Name: ' + this.favChoice.lName}</p>
                                <p class="card-text">${'Email: ' + this.favChoice.email}</p>
                                <p class="card-text">${this.favChoice.restuarant + ' is my favorite Top 10 Steak Restuarant!'}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                `
    }


}

let action = new FavRestuaraunt();
action.button();



