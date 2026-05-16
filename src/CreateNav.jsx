
// import Nav from 'react-bootstrap/Nav';
// import { Navbar, Container, DropdownButton, Dropdown, Form, Button, NavDropdown } from 'react-bootstrap';
// import { FaSearch, FaMapMarkerAlt, FaShoppingCart } from "react-icons/fa";
// import { useState } from 'react';
// import SignUp from './SignUp';

// const CreateNav = () => {
//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(true);
//   const handleClose = () => setShow(false);

//   return (
//     <>
//       <Navbar bg="dark" variant="dark" className="px-3">
//         <Container fluid>
//           <div className="d-flex align-items-center w-100">

            
//             <Navbar.Brand href="#" className="d-flex align-items-center">
//               <img 
//                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtwaGBV0-kyQBfx6nFO_JHhuXKLCB7_Hb7lg&s' 
//                 style={{ width: "100px" }} 
//                 alt="logo"
//               />

//               <div className="text-white ms-2 d-flex flex-column" style={{ fontSize: "13px" }}>
//                 <span><FaMapMarkerAlt /> Delivering to Pune</span>
//                 <strong>Update location</strong>
//               </div>
//             </Navbar.Brand>

            
//             <DropdownButton variant="secondary" title="All">
//               <Dropdown.Item>Electronics</Dropdown.Item>
//               <Dropdown.Item>Fashion</Dropdown.Item>
//               <Dropdown.Item>Clothes</Dropdown.Item>
//               <Dropdown.Item>Home Decor</Dropdown.Item>
//             </DropdownButton>

            
//             <Form className="d-flex" style={{ width: "900px" }}>
//               <Form.Control type="search" placeholder="Search Amazon.in" />
//               <Button variant="warning"><FaSearch /></Button>
//             </Form>

           
//             <Nav className='ms-5'>
//               <NavDropdown title={<span style={{ color: "white" }}>EN</span>}>
//                 <NavDropdown.Item>Hindi</NavDropdown.Item>
//                 <NavDropdown.Item>Marathi</NavDropdown.Item>
//                 <NavDropdown.Item>Tamil</NavDropdown.Item>
//               </NavDropdown>
//             </Nav>

            
//             <div className="ms-4">
//               <NavDropdown
//                 align="end"
//                 onMouseEnter={(e) => e.currentTarget.click()}
//                 title={
//                   <div style={{ color: "white", fontSize: "13px" }}>
//                     <div>Hello, sign in</div>
//                     <div><b>Account & Lists</b></div>
//                   </div>
//                 }
//               >
//                 <div className="px-3 py-2">
//                   <Button onClick={handleShow} variant="warning" className="w-100">
//                     Sign In
//                   </Button>
//                 </div>

//                 <NavDropdown.Divider />
//                 <NavDropdown.Item>Your Orders</NavDropdown.Item>
//                 <NavDropdown.Item>Your Account</NavDropdown.Item>
//               </NavDropdown>
//             </div>

//             <div className="text-white ms-4 d-flex flex-column" style={{ fontSize: "13px" }}>
//               <span>Returns</span>
//               <strong>& Orders</strong>
//             </div>

//             <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "16px", color: "white" }}>
//               <FaShoppingCart size={30} />
//               <span style={{ fontWeight: "700", fontSize: "14px" }}>Cart</span>
//             </div>

//           </div>
//         </Container>
//       </Navbar>

//       {show && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0,0,0,0.6)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 999
//           }}
//         >
//           <SignUp onClose={handleClose} />
//         </div>
//       )}
//     </>
//   );
// };

// export default CreateNav;

import Nav from 'react-bootstrap/Nav';
import { Navbar, Container, Dropdown, Form, Button, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaBars } from "react-icons/fa";
import { useState } from 'react';
import SignUp from './SignUp';

const CreateNav = () => {
  const [show, setShow] = useState(false);
  const [cartCount] = useState(2);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <Navbar expand="lg" style={{ backgroundColor: "#131921", padding: "6px 10px" }}>
        <Container fluid className="d-flex align-items-center justify-content-between">

          {/* LEFT */}
          <div className="d-flex align-items-center">

            {/* MENU (MOBILE) */}
            <FaBars className="text-white me-2 d-lg-none" size={20} />

            {/* LOGO */}
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              style={{ width: "90px", cursor: "pointer" }}
              alt="logo"
            />

            {/* LOCATION */}
            <div className="text-white ms-3 d-none d-md-flex flex-column" style={{ fontSize: "12px", lineHeight: "14px" }}>
              <span><FaMapMarkerAlt /> Delivering to Pune</span>
              <strong>Update location</strong>
            </div>
          </div>

          {/* SEARCH BAR (FIXED LIKE AMAZON) */}
          <div className="d-flex flex-grow-1 mx-3" style={{ maxWidth: "800px" }}>

            {/* CATEGORY */}
            <select
              style={{
                padding: "6px",
                border: "none",
                background: "#e6e6e6",
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px"
              }}
            >
              <option>All</option>
              <option>Electronics</option>
              <option>Fashion</option>
            </select>

            {/* INPUT */}
            <input
              type="text"
              placeholder="Search Amazon.in"
              style={{
                width: "100%",
                border: "none",
                padding: "6px"
              }}
            />

            {/* SEARCH BUTTON */}
            <button
              style={{
                background: "#febd69",
                border: "none",
                padding: "0 12px",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px"
              }}
            >
              <FaSearch />
            </button>

          </div>

          {/* RIGHT */}
          <div className="d-flex align-items-center text-white">

            {/* LANGUAGE FIXED */}
            <div className="me-3 d-flex align-items-center" style={{ cursor: "pointer" }}>
              <img
                src="https://flagcdn.com/w20/in.png"
                alt="flag"
                style={{ width: "18px", marginRight: "4px" }}
              />
              <span style={{ fontWeight: "bold", fontSize: "14px" }}>EN</span>
            </div>

            {/* ACCOUNT */}
            <div className="me-3">
              <NavDropdown
                align="end"
                title={
                  <div style={{ fontSize: "12px", color: "white" }}>
                    <div>Hello, sign in</div>
                    <div><b>Account & Lists</b></div>
                  </div>
                }
              >
                <div className="px-3 py-2">
                  <Button onClick={handleShow} variant="warning" className="w-100">
                    Sign In
                  </Button>
                </div>
                <NavDropdown.Divider />
                <NavDropdown.Item>Your Orders</NavDropdown.Item>
              </NavDropdown>
            </div>

            {/* RETURNS */}
            <div className="me-3 d-none d-md-flex flex-column" style={{ fontSize: "12px" }}>
              <span>Returns</span>
              <strong>& Orders</strong>
            </div>

            {/* CART WITH BADGE */}
            <div className="position-relative d-flex align-items-center">
              <FaShoppingCart size={26} />
              <span className="ms-1 fw-bold">Cart</span>

              <span
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "-10px",
                  background: "#f08804",
                  color: "black",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                {cartCount}
              </span>
            </div>

          </div>
        </Container>
      </Navbar>

      {/* BOTTOM NAVBAR */}
      <div style={{ backgroundColor: "#232f3e", color: "white", fontSize: "14px" }}>
        <Container fluid className="d-flex align-items-center py-2 flex-wrap">

          <div className="me-4 d-flex align-items-center">
            <FaBars />
            <span className="ms-2 fw-bold">All</span>
          </div>

          <div className="me-4">Today's Deals</div>
          <div className="me-4">Customer Service</div>
          <div className="me-4">Registry</div>
          <div className="me-4">Gift Cards</div>
          <div className="me-4">Sell</div>

        </Container>
      </div>

      {/* MODAL */}
      {show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <SignUp onClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default CreateNav;