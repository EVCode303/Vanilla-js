export default class SliderCreator{
    constructor(slider, dots, btns){
        this.slider = slider;
        this.dots = dots;
        this.btns = btns;
    }

    createSlider(){
        const [prev, next] = this.btns;

        new Glider(this.slider, {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: this.dots,
            draggable: true,
            arrows: {
                prev,
                next
            }
        })
    }
}