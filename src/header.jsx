import React from "react";
import Logo from "../src/images/mssslogowhite.jpeg"

function Header() {
    return (
     <>
      <div
        style={{  // same as if we had made a header.css file
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '15vh',
          color: '#FEA02F',
          textAlign: 'center',
          margin: 'auto',
          // marginTop: '0',
          // marginBottom: '0',
          //   marginRight: '10',
          // width: '50%',
        }}
      >
        {/* <p> Multiple Sclerosis Society Singapore   </p> */}
        <img style={{
          marginLeft: '10px',
          display:'flex',
          marginBottom: '20px',
          // padding: '2rem'
        }} src={Logo} alt="logo" width="275" length="275" />
      </div>
      {/* <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh',
            color: '#FEA02F',
            textAlign: 'center',
            margin: 'auto',
            marginTop: '0',
            marginBottom: '0',
            // width: '50%',
            }}>
        <img src="https://w7.pngwing.com/pngs/892/138/png-transparent-triangle-shape-shapes-s-angle-orange-color-triangle.png" alt="logo" width="50" length="50" />
      </div> */}
      </>
    );
  };
   
  export default Header;
