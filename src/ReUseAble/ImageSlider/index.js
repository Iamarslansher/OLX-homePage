// import Carousel from "react-bootstrap/Carousel";

// function ImageSlider(props) {
//   const { images = [] } = props;
//   return (
//     <Carousel>
//       {/* {images.map((image) => {
//         return ( */}
//       <Carousel.Item>
//         <img className="d-block w-100" src={images[0]} alt="First slidek" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={images[1]} alt="First slidej" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img className="d-block w-100" src={images[2]} alt="First slidel" />
//       </Carousel.Item>
//       {/* );
//       })} */}
//     </Carousel>
//   );
// }

// export default ImageSlider;

import Carousel from "react-bootstrap/Carousel";

function ImageSlider(props) {
  const { images = [] } = props;
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={images[0]} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images[1]} alt="Second slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={images[2]} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;
