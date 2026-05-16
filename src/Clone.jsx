
import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

const Clone = ({ bannerData, cardData , imgData , bikeData , seperateCards ,fourthCrausal, fifthCrausal }) => {   

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div style={{ backgroundColor: "#d9d9d9", minHeight: "100vh" }}>
    <div
      style={{
    width: "80%",
    margin: "0 auto"
  }}
    >
      <Carousel activeIndex={index} onSelect={handleSelect}>

        {bannerData.map((item) => (
          <Carousel.Item key={item.id}>
            <div 
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                // width: "80%",
                height: "650px",
                position: "relative",
                justifyContent:"center",
                alignItems:"center",
                margin:"0 auto",
                paddingBottom:"10px"
              }}
            >

              <Row className="h-50 align-items-center" style={{position:"relative",justifyContent:"center",alignItems:"center",margin:"0 auto", paddingBottom:"10px"}}>
                <Col md={6} style={{paddingLeft:"400px"}}>
                  <h5>{item.subtitle}</h5>
                  <h1>{item.title}</h1>
                  <br /><br />
                  <h4>{item.brand}</h4>
                </Col>

                <Col md={6} className="text-center" style={{paddingRight:"300px"}}>
                  <img src={item.image} alt="product" style={{height:"200px", width:"60%"}}/>
                </Col>
              </Row>

            </div>
          </Carousel.Item>
        ))}

      </Carousel>
      </div>
  <Row 
  className="justify-content-center g-2" 
  style={{ 
    marginTop: "-350px",
    width: "85%",          
    marginLeft: "auto",
    marginRight: "auto"
  }}
>
  {cardData.map((item) => (
    <Col 
      key={item.id} 
      md={3} 
      className="d-flex justify-content-center"
      style={{ padding: "1px" }}   
    >
      
      <Card 
        style={{ 
          width: "100%",
          maxWidth: "310px", 
          height: "400px"
        }}
      >
        <Card.Body style={{ padding: "10px" }}>
          <Card.Title style={{ fontWeight:"bold", marginBottom:"5px" }}>
            {item.title}
          </Card.Title>

          <Row>
            <Col xs={6}>
              <img src={item.img1} style={{ width: "100%", height:"95px", objectFit:"cover" }} />
              <p>{item.name1}</p>
            </Col>

            <Col xs={6}>
              <img src={item.img2} style={{ width: "100%", height:"95px", objectFit:"cover" }} />
              <p>{item.name2}</p>
            </Col>
          </Row>

          <Row>
            <Col xs={6}>
              <img src={item.img3} style={{ width: "100%", height:"95px", objectFit:"cover" }} />
              <p>{item.name3}</p>
            </Col>

            <Col xs={6}>
              <img src={item.img4} style={{ width: "100%", height:"95px", objectFit:"cover" }} />
              <p>{item.name4}</p>
            </Col>
          </Row>

          <a href="#">See more</a>
        </Card.Body>
      </Card>

    </Col>
  ))}
</Row>
 <div
   style={{
    width: "80%",
    margin: "5px auto",
    padding:"10px"
  }}
 >
  <Carousel indicators={false}>
  {imgData.map((slide, index) => (
    <Carousel.Item key={index}>
      <div
        style={{
          backgroundColor: "white",
          // width: "80%",
          height: "260px",          
          margin: "5px auto",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h4 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Up to 40% off | Big savings on electronics & accessories
        </h4>

        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "5px",
            margin: 0,
            padding: 0,
          }}
        >
          {[slide.img1, slide.img2, slide.img3, slide.img4, slide.img5, slide.img6, slide.img7, slide.img8].map((img, i) => (
            <Col
              key={i}
              style={{
                flex: "0 0 16.66%",
                maxWidth: "16.66%",
                padding: 0
              }}
            >
              <Image
                src={img}
                style={{
                  height: "190px",
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto"   
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
</div>

<div
  style={{
    width: "80%",
    margin: "5px auto",
    padding:"10px"
  }}
>
<Carousel indicators={false}>
  {bikeData.map((slide, index) => (
    <Carousel.Item key={index}>
      <div
        style={{
          backgroundColor: "white",
          // width: "80%",
          height: "270px",         
          margin: "5px auto",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h4 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Starting ₹70,348 | Engineered for the road
        </h4>

        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "5px",
            margin: 0,
            padding: 0,
          }}
        >
          {[slide.img1, slide.img2, slide.img3, slide.img4, slide.img5, slide.img6, slide.img7, slide.img8].map((img, i) => (
            <Col
              key={i}
              style={{
                flex: "0 0 25%",
                maxWidth: "25%",
                padding: 0
              }}
            >
              <Image
                src={img}
                style={{
                  height: "200px",
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto"
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
</div>

  <Row 
  className="justify-content-center " 
  style={{ 
    marginTop: "10px",
    width: "85%",          
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius:"none"
  }}
>
  {seperateCards.map((item) => (
    <Col 
      key={item.id} 
      md={3} 
      className="d-flex justify-content-center"
      style={{ padding: "4px" }}   
    >
      
      <Card 
        style={{  
          width:"80%",
          height: "430px"
          
        }}
      >
        <Card.Body style={{ padding: "10px" }}>
          <Card.Title style={{ fontWeight:"bold", marginBottom:"20px" }}>
            {item.title}
          </Card.Title>

          <Row>
            <Col xs={6}>
              <img src={item.img1} style={{ width: "100%", height:"150px", objectFit:"contain" }} />
            </Col>

            <Col xs={6}>
              <img src={item.img2} style={{ width: "100%", height:"150px", objectFit:"contain" }} />
            </Col>
          </Row>

          <Row style={{paddingTop:"20px"}}>
            <Col xs={6}>
              <img src={item.img3} style={{ width: "100%", height:"150px", objectFit:"contain" }} />
            </Col>

            <Col xs={6}>
              <img src={item.img4} style={{ width: "100%", height:"150px", objectFit:"contain" }} />
            </Col>
          </Row>

          <a href="">See more</a>
        </Card.Body>
      </Card>

    </Col>
  ))}
</Row>

<div
  style={{
    width: "80%",
    margin: "5px auto",
    padding:"10px"
  }}
>
  <Carousel indicators={false}>
  {fourthCrausal.map((slide, index) => (
    <Carousel.Item key={index}>
      <div
        style={{
          backgroundColor: "white",
          // width: "80%",
          height: "260px",          
          margin: "5px auto",
          padding: "10px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h4 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Min.35% off | Best selling products from Small Businesses
        </h4>

        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "2px",
            margin: 0,
            padding: 0,
          }}
        >
          {[slide.img1, slide.img2, slide.img3, slide.img4, slide.img5, slide.img6, slide.img7, slide.img8].map((img, i) => (
            <Col
              key={i}
              style={{
                flex: "0 0 13.66%",
                maxWidth: "13.66%",
                padding: 0
              }}
            >
              <Image
                src={img}
                style={{
                  height: "170px",
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                  margin: "10px",
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
</div>

<div
  style={{
    width: "80%",
    margin: "5px auto",
    paddingTop:"10px"
  }}
>
  <Carousel indicators={false}>
  {fifthCrausal.map((slide, index) => (
    <Carousel.Item key={index}>
      <div
        style={{
          backgroundColor: "white",
          // width: "80%",
          height: "260px",          
          margin: "5px auto",
          padding: "5px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h4 style={{ marginBottom: "10px", fontWeight: "bold" }}>
          Up to 60% off | Cookware, kitchen tool & more | Amazon Launchpad
        </h4>

        <Row
          style={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "2px",
            margin: 0,
            padding: 0,
          }}
        >
          {[slide.img1, slide.img2, slide.img3, slide.img4, slide.img5, slide.img6, slide.img7, slide.img8].map((img, i) => (
            <Col
              key={i}
              style={{
                flex: "0 0 13.66%",
                maxWidth: "13.66%",
                padding: 0
              }}
            >
              <Image
                src={img}
                style={{
                  height: "170px",
                  width: "100%",
                  objectFit: "contain",
                  display: "block",
                  margin: "10px",
                }}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Carousel.Item>
  ))}
</Carousel>
</div>
          
    </div>
    </>
  );
};

export default Clone;

