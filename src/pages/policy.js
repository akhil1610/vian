import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
// import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
// import Roadmap from "../containers/home/roadmap1";
// import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const PolicyPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Team" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Policy Guidelines"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/policy/Guidelines1.png"
                    />
                    {/* <Roadmap /> */}
                    {/* <TeampPageContainer /> */}
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default PolicyPage;
