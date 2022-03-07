import SectionTitle from "../../../components/section-title";

const Roadmap = () => {
    return (
        <div className="container about-us position-relative">
            <div className="service-section position-relative">
                <div className="row ">
                    <div className="col-xl-6 col-md-6 col-sm-12 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={
                                    "Show ur <span class='text-primary'>interest</span>"
                                }
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 my-e-5 d-flex justify-content-center del-img-767">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/11.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 mar-top-es d-flex justify-content-center del-img-767">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/22.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={
                                    "We will<span class='text-primary'> reach</span> you"
                                }
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="bckimg-1">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/left-dot.png`}
                            alt="shape"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={
                                    "Onboard & <span class='text-primary'>train</span> you"
                                }
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 mar-top-es d-flex justify-content-center del-img-767">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/33.png`}
                            alt="img"
                        />
                    </div>
                    <div className="bckimg-2">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/right-dot-2.png`}
                            alt="shape"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 mar-top-es d-flex justify-content-center del-img-767">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/44.png`}
                            alt="img"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={
                                    "Start offering VIAN products to your <span class='text-primary'>neighborhood</span>"
                                }
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="bckimg-3">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/left-dot-2.png`}
                            alt="shape"
                        />
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 align-items-center d-flex">
                        <div className="about-content">
                            <SectionTitle
                                classOption="title-section"
                                title={
                                    "Steady income for <span class='text-primary'>you and family</span>"
                                }
                            />
                            <p className="high-light mb-8">
                                Pleasure rationally encounter consequences that
                                are extremely painful. Nor again is there anyone
                                who loves or pursues or desires to obtain
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-6 col-sm-12 mar-top-es d-flex justify-content-center del-img-767">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/roadmap/55.png`}
                            alt="img"
                        />
                    </div>
                    <div className="bckimg-4">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/right-dot-3.png`}
                            alt="shape"
                        />
                    </div>
                </div>
                {/* <div className="bckimg-1 d-lazy">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/left-dot.png`}
                        alt="shape"
                    />
                </div>
                <div className="bckimg-2 d-lazy">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/right-dot.png`}
                        alt="shape"
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Roadmap;
