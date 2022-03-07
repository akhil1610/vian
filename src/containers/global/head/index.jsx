import React from "react";
import SectionTitle from "../../../components/section-title";

const HeadTitle = () => {
    return (
        <div className="news-letter-section section-pt">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-xl-6 mx-auto">
                        <SectionTitle
                            classOption="title-section text-center"
                            // subTitle="Head ONe"
                            title="Board of <span class='text-primary'>Directors </span>"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadTitle;
