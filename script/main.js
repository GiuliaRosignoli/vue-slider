// console.log("Vue: ", Vue);

// Vue Slider

const app = new Vue ({
    el: "#app",
    data: {
        photos: [
            "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg",
            "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg",
            "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg",
        ],
        indexPhoto: 0, // Current image position
        intervalId: 0,

    },
    created(){
        console.log("created");
        this.startLoop();
    },

    methods: {
        prevPhoto(){
            this.indexPhoto -= 1;
            
            if(this.indexPhoto < 0) {
                this.indexPhoto = this.photos.length - 1
        }
    },
        nextPhoto() {
            //console.log("Click next")
            this.indexPhoto += 1;

            if(this.indexPhoto > (this.photos.length - 1) ) {
                this.indexPhoto = 0;
            }
        },
        setPhoto(index) {
            console.log(index);
            this.indexPhoto = index;
        },
        startLoop(){
            this.intervalId = setInterval(() =>{
                this.nextPhoto();
            }, 3000);
        },
        stopLoop(){
            clearInterval(this.intervalId);
        }
    } 
});