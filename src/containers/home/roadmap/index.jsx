import React from "react";
import RoadmapContent from "../../../components/RoadmapContent";
import RoadmapData from "../../../data/roadmap.json";

const RoadmapContainer = () => {
    return (
        <div className="container">
            <div className="row">
                {/* {RoadmapData &&
                    RoadmapData.map((single, key) => {
                        return (
                            <div key={key} className="col-12 text-center">
                                <RoadmapContent key={key} data={single} />
                            </div>
                        );
                    })} */}
                <RoadmapContent />
            </div>
        </div>
    );
};

export default RoadmapContainer;

// import React from "react";
// import RoadmapContent from "../../../components/RoadmapContent";
// import HomeData from "../../../data/home.json";

// const RoadmapContainer = () => {
//     return (
//         <div className="section position-relative">
//             <div className="hero-shape1">
//                 <img
//                     src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`}
//                     alt="shape"
//                 />
//             </div>
//             <div className="hero-shape2">
//                 <img
//                     src={`${process.env.PUBLIC_URL}/images/slider/shape/shape2.png`}
//                     alt="shape"
//                 />
//             </div>
//             {/* <RoadmapContent data={HomeData[7].roadmapdata[0]} /> */}
//             <RoadmapContent />
//         </div>
//     );
// };

// export default RoadmapContainer;
