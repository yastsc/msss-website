import React from "react";
import {
    Row,
    Column,
    CircularImage,
    EXCOmembers
} from "./msssmembersStyles";
import "./HomeMedia.css";
import Image1 from "../images/img-1.jpg";
import Image2 from "../images/img-2.jpg";
import Image3 from "../images/img-3.jpg";
import ImageCheryl from "../images/img-cheryl.jpg";
import ImageKerYih from "../images/img-keryih.jpg";
import ImageMichael from "../images/img-michael.jpg";
import ImageMolly from "../images/img-molly.jpg";
import ImageRatnah from "../images/img-ratnah.jpg";
import ImageShannon from "../images/img-shannon.jpg";
import ImageJanis from "../images/img-janis.jpeg";

const MSSSMembers = () => {
    return (
        <div> 
            <div>
                <h1 className="members" style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: "10vh",
                }}> EXCO Members of MSSS </h1>
                 {/* <EXCOmembers className="EXCOmembers"> EXCO </EXCOmembers> */}
            </div>
            <Row>
                {/* <div style={{ paddingBottom: "4rem"}}> */}
                    <Column style={{ alignContent: "center"}}>
                        <div >
                        <CircularImage src={ImageShannon} alt="Ms Shannon Heo" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> President</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "4rem" }}> Ms Shannon Heo </b>
                        </div>
                    </Column>
                    <Column>
                        <CircularImage src={ImageKerYih} alt="Mr Harry Lee" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> Vice President, Head of Programme</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Mr Harry Lee </b>
                    </Column>
                    <Column>
                        <CircularImage src={ImageRatnah} alt="Ms Ratnah Hafizah" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> Vice President, Head of Communication</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Ms Ratnah Hafizah </b>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <CircularImage src={ImageMichael} alt="Mr Michael Boscoscuro" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> Treasurer</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Mr Michael Boscoscuro </b>
                    </Column>
                    <Column>
                        <CircularImage src={ImageJanis} alt="Ms Janis Tye Siew Noi" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> Secretary</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Ms Janis Tye Siew Noi </b>
                    </Column>
                    <Column>
                        <CircularImage src={ImageMolly} alt="Ms Molly Kruko" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> EXCO, Social Media</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Ms Molly Kruko </b>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <CircularImage src={Image3} alt="Dr Tan Kevin" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> EXCO, Medical Advisor</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Dr Tan Kevin </b>
                    </Column> 
                    <Column>
                        <CircularImage src={ImageCheryl} alt="Ms Tan Shi Ying, Cheryl" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> EXCO, Programme</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Ms Cheryl Tan </b>
                    </Column>
                    <Column>
                        <CircularImage src={Image3} alt="Dr Tan Kevin" />
                        <h1 style={{ paddingTop: "1rem", color: "#FD7121" }}> EXCO, Programme</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Ms Surabhi Devraj </b>
                    </Column> 
                </Row>
                {/* <div>
                    <EXCOmembers style={{
                        paddingTop: "1rem",
                        paddingBottom: "5rem",
                        }} > Members </EXCOmembers>
                </div> */}
                {/* <Row>
                    <Column>
                        <CircularImage src={Image3} alt="Tan Kevin" />
                        <h1 style={{ paddingTop: "1rem", color: "orange" }}> Medical Advisor</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Tan Kevin </b>
                    </Column>
                    <Column>
                        <CircularImage src={Image2} alt="Amelia Mok" />
                        <h1 style={{ paddingTop: "1rem", color: "orange" }}> MS Cares Contact</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Amelia Mok </b>
                    </Column>
                    <Column>
                        <CircularImage src={Image1} alt="Yeo Tian Rong" />
                        <h1 style={{ paddingTop: "1rem", color: "orange" }}> Member</h1> 
                        <b style={{ paddingTop: "1rem", paddingBottom: "2rem" }}> Yeo Tian Rong </b>
                    </Column>
                </Row> */}
        </div>
    );
};

export default MSSSMembers;
