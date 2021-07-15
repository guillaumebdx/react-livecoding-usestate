import {useState} from "react";
import {LinearProgress} from "@material-ui/core";

const Slider = ({images, title}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClickPrevious = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide -1)
        }
    }

    const handleClickNext = () => {
        if (currentSlide < (images.length -1)) {
            setCurrentSlide(currentSlide +1)
        }
    }
    return (
        <>
            <h2>{title}</h2>
            <div>
                <div className="slider">
                    <div className="slides"
                         style={{width: images.length * 400, left: currentSlide * -400 }}
                    >
                        {images.map( (image) => (
                            <div className="slide" key={image.id}
                                 style={{backgroundImage: `url(${image.url})`}}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
            <button onClick={handleClickPrevious}>precedent</button>
            <button onClick={handleClickNext}>suivant</button>
            <LinearProgress variant="determinate" value={(currentSlide +1) / images.length *100} />
        </>
    )
};

export default Slider;
