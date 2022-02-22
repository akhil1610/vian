import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import RoadMap from "../containers/home/roadmap1";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const CareerPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Contact" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Join Us"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/career/1.png"
                    />
                    {/* <RoadMap /> */}
                    {/* <ContactContainer />
                    <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default CareerPage;
