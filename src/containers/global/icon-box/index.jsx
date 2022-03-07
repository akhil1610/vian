import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import IconBox from "../../../components/icon-box";
import SectionTitle from "../../../components/section-title";
import HomeData from "../../../data/home.json";

const IconBoxContainer = ({ classOption }) => {
    return (
        <div className={`feature-section position-relative ${classOption}`}>
            <img
                className="path-img"
                src={`${process.env.PUBLIC_URL}/images/feature/shape.png`}
                alt="images_not_found"
            />
            <div className="container custom-container">
                <div className="row g-0 align-items-center">
                    <div className="col-xl-9 col-lg-9 mx-auto mb-3 text-center">
                        <SectionTitle
                            classOption="title-section"
                            // subTitle="FEATURES"
                            // title="We are <span class='text-primary'>different</span> because..."
                            title="USD <span class='text-primary'>1</span> Billion disbursement by <span class='text-primary'>2026</span>, creating <span class='text-primary'>50,00,000</span> entrepreneurs"
                            excerptClassOption="mb-10"
                            excerpt="At VIAN, we research, identify and make available products and categories that suit the everyday financial needs of the Indian family. Our mission is to provide the best value possible for our customers, so that every rupee they allocate to us gives them more value for money than they would get anywhere else"
                        />
                        <Button
                            classOption="btn btn-lg btn-dark btn-hover-dark"
                            text="Get Started"
                            path="/about"
                        />
                    </div>

                    <div className="col-12">
                        <div id="grid" className="grid row mb-n7">
                            {HomeData[2].iconBox &&
                                HomeData[2].iconBox.map((single, key) => {
                                    return <IconBox key={key} data={single} />;
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

IconBoxContainer.propTypes = {
    classOption: PropTypes.string,
};

IconBoxContainer.defaultProps = {
    classOption: "section-pb",
};

export default IconBoxContainer;
