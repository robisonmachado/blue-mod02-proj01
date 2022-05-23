
function App(imageClass, imageCaptionClass, descriptionClass, controlButtonId) {
    this.imageClass             = imageClass;
    this.imageCaptionClass      = imageCaptionClass;
    this.descriptionClass       = descriptionClass;
    this.controlButtonId        = controlButtonId;

    this.controlButton          = undefined;
    this.imageElement           = undefined;
    this.captionElement         = undefined;
    this.descriptionElement     = undefined;
    this.selectedType           = undefined;

    this.init = function(){
        this.controlButton      = document.getElementById(this.controlButtonId);
        let that = this;

        this.controlButton.addEventListener("click", function(){
            that.nextDeveloperType()
        });

        this.imageElement       = document.getElementsByClassName(this.imageClass)[0];
        this.captionElement     = document.getElementsByClassName(this.imageCaptionClass)[0];
        this.descriptionElement = document.getElementsByClassName(this.descriptionClass)[0];

        this.selectedType = 0;
        this.showDevSelected();
    }

    this.showDevSelected = function(){
        if(this.developersTypes.length < (this.selectedType+1)) this.selectedType = 0;

        console.log("length >>> ", this.developersTypes.length, " <> selected >>> ", this.selectedType);
        let dev                             = this.developersTypes[this.selectedType];
        console.log("showDevSelected >>> ", dev);

        if((this.selectedType +1) === this.developersTypes.length){
            this.controlButton.textContent = "VOLTAR AO INÍCIO"
        }else{
            this.controlButton.textContent = "EVOLUIR NA CARREIRA"
        }

        this.imageElement.src               = dev.image;
        this.imageElement.alt               = `imagem ${dev.title}`;

        this.captionElement.innerText       = dev.title;
        this.descriptionElement.innerText   = dev.description;
        


    }

    this.nextDeveloperType = function(){
        console.log("next developer type function called: ", this);
        this.selectedType++;
        if(this.developersTypes.length < (this.selectedType+1)) this.selectedType = 0;
        this.showDevSelected();

    }

    this.developersTypes    = [
        {
            title: "Desenvolvedor Júnior",
            description: "Aquele que precisa de muita ajuda",
            image: "images/dev-junior2.png"
        },
        {
            title: "Desenvolvedor Pleno",
            description: "Aquele que dá conta do recado",
            image: "images/dev-pleno.png"
        },
        {
            title: "Desenvolvedor Sênior",
            description: "Aquele que ensina e ajuda",
            image: "images/dev-senior.png"
        },
    ];


}

const app = new App("info__image", "info__image__caption", "info__description", "control-button");
console.log(app);

app.init()
