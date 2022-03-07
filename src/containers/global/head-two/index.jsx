import React from "react";
import SectionTitle from "../../../components/section-title";

const HeadTitle = () => {
    return (
        <div className="news-letter-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                        <SectionTitle
                            classOption="title-section text-center"
                            // subTitle="Heas two"
                            title="Management <span class='text-primary'>Team</span>"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadTitle;
