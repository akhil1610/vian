import PropTypes from "prop-types";
import SectionTitle from "../section-title";

const Intro = () => {
    return (
        <div className="about-us position-relative">
            <div className="service-section position-relative">
                <div className="row ">
                    <div className="col-xl-6 col-md-6 my-eb-5 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={"Show ur interest"}
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 my-e-5">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/11.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-lg-6 my-e-5">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/22.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 my-eb-5 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={"We will reach you"}
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bckimg-1 d-lazy">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/large-dot.png`}
                        alt="shape"
                    />
                </div>
            </div>
            <div className="service-section position-relative">
                <div className="row ">
                    <div className="col-xl-6 col-md-6 my-eb-5 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={"Onboard & train you"}
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 my-eb-5">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/33.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-lg-6 my-e-5">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/44.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 my-eb-5 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={
                                    "Start offering VIAN products to your neighborhood"
                                }
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 my-eb-5 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={"Steady income for you and family"}
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 my-e-5">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/55.png`}
                            alt="img"
                        />
                    </div>
                </div>
                <div className="bckimg-2 d-lazy">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/large-dot.png`}
                        alt="shape"
                    />
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
