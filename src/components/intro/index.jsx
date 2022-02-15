import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../button";
import Parallax from "parallax-js";
import Typewriter from "typewriter-effect";

const Intro = ({ data }) => {
    const sceneEl = useRef(null);

    useEffect(() => {
        const parallaxInstance = new Parallax(sceneEl.current, {
            relativeInput: true,
        });

        parallaxInstance.enable();

        return () => parallaxInstance.disable();
    }, []);
    return (
        <div className="hero-slider">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-slide-content">
                            <div className="">
                                {/* <h2
                                    className="title animated"
                                    dangerouslySetInnerHTML={{
                                        __html: data.title,
                                    }}
                                >
                                    {/* <span>
                                        <Typewriter
                                            className="title"
                                            options={{
                                                strings: [
                                                    "Growth Capital",
                                                    "Insurance",
                                                    "investments",
                                                    "Linkage ",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                            }}
                                        />
                                    </span> 
                                </h2> */}
                                <h2 className="title animated">
                                    Nurturing Entrepreneurship with
                                    <div className="buti">
                                        <Typewriter
                                            options={{
                                                strings: [
                                                    "Growth Capital",
                                                    "Insurance",
                                                    "Investments",
                                                    "Linkage ",
                                                ],
                                                autoStart: true,
                                                loop: true,
                                                delay: 40,
                                            }}
                                        />
                                    </div>
                                </h2>
                            </div>
                            <Button
                                classOption="btn btn-lg animated delay1 btn-dark btn-hover-dark me-4 mb-3 mb-sm-0"
                                text="Get Started"
                                path="/about"
                            />
                            <Button
                                classOption="btn btn-lg animated delay2 btn-secondary btn-hover-secondary mb-3 mb-sm-0"
                                text="Book a Meeting"
                                path="/contact"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="hero-img scene mt-10 mt-lg-0"
                            id="scene"
                            ref={sceneEl}
                        >
                            <div data-depth="0.2">
                                <img
                                    className="animated"
                                    src={`${process.env.PUBLIC_URL}/${data.image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

Intro.propTypes = {
    data: PropTypes.object,
};

export default Intro;
