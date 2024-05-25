import React from "react";
import "./home.css";
import AboutMSSSPic from "../images/img-4.jpg";
 
const AboutMSSS = () => {
    return (
        <div
            style={{
                // height: "100vh"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
        <div
            style={{
                // padding: "2rem"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
            <img src={AboutMSSSPic} className = "banner" alt="pic" width = "1440" length = "0" />

        </div>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "centre",
                textAlign: "center",
                paddingTop: "2rem",
                paddingBottom: "1rem"
                // height: "100vh",
            }}
        >
            <h1>
                About Multiple Sclerosis Society Singapore
            </h1>
        </div>
        <div
            style={{
                paddingTop: "1rem",
                paddingRight: "7rem",
                paddingLeft: "7rem",
                paddingBottom: "2rem"

                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
            <p1>
            Multiple Sclerosis Society Singapore (MSSS) is a non-profit organisation dedicated to improving the quality of life of people with Multiple Sclerosis (MS) and their caregivers through various support services.

            We provide information, education, and resources to enhance the knowledge of MS, its management and coping strategies. We also offer emotional and practical support to those affected by MS in Singapore. Our team of volunteers and staff work tirelessly to promote public awareness of MS and raise funds to support the society's programmes and services.
            </p1>
        </div>
        <div
            style={{
                    padding: "2rem"
                    // lineHeight: "200%",
                    // marginLeft: "470px"
                }}> 
            <h1> Mission: </h1> <p1> To empower MS Warriors and advocate for people living with MS in Singapore. To educate MS patients and public. </p1> 
        </div>
        <div
            style={{
                padding: "1rem"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
            <h1> Vision: </h1> <p1> A world where individuals affected by multiple sclerosis can live their lives to the fullest, free from the limitations imposed by the disease. </p1>
        </div>
        <div
            style={{
                padding: "2rem"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
            <h1> Goals: </h1> <p1> 1. For MS to be recognised in Singapore and engage policy makers to make subsidised treatment available to all MS patients. 2. To help new patients. 3. To support family members. 4. To connect with other MS Societies from different countries.</p1>
        </div>
        <div
            style={{
                padding: "3rem"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}> 
            <h1> Empower, Advocate, Educate </h1>
        </div>
        </div>
    );
};
 
export default AboutMSSS;
