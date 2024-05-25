import React from "react";
import "./home.css";
import Image17 from "../images/img-17.jpg"
 
const MSCares = () => {
    return (
        <div
            style={{
                // height: "100vh",
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
        <div
            style={{
                padding: "1rem"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}>
            <img src={Image17} className = "banner" alt="pic" width = "1440" length = "0" />

        </div>
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "centre",
                textAlign: "center",
                paddingTop: "3rem"
                // height: "100vh",
            }}>
            <h1>
                MS Care Support Group
            </h1>
        </div>
        <div
            style={{
                padding: "3rem",
                paddingLeft: "8rem",
                paddingRight: "8rem"
                // lineHeight: "200%",
                // marginLeft: "470px"
            }}> <p1> A support group is available for people with MS. The aim of this support group is to provide peer support, education and health management tips. People with MS are also involved in various activities and exercises, and encouraged to share their personal experiences. </p1>

            <p1> Volunteers in MS Care provide a support network for MS patients and caregivers by befriending them and providing relevant assistance. For more information, contact MS Care at 9825 6015. </p1> </div>
        </div>
    );
};
 
export default MSCares;

