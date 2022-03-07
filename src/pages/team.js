import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import DirectorPageContainer from "../containers/director";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import HeadTitle from "../containers/global/head";
import HeadTitleTwo from "../containers/global/head-two";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Team" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Team"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/team/5.png"
                    />
                    <HeadTitle />
                    <DirectorPageContainer />
                    <HeadTitleTwo />
                    <TeampPageContainer />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
