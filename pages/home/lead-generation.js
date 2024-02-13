import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-13/Header";
import Hero from "../../components/home-page/home-13/hero";
import About from "../../components/home-page/home-5/about";
import Feedback from "../../components/home-page/home-13/Feedback";
import Feature from "../../components/home-page/home-13/Feature";
import Features2 from "../../components/home-page/home-7/Features2";
import Leads from "../../components/home-page/home-13/Leads";
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import FeaturesBlock from "../../components/home-page/home-13/FeaturesBlock";
import Counter from "../../components/home-page/home-13/Counter";
import SuccessStory from "../../components/home-page/home-13/SuccessStory";
import Portfolio from "../../components/home-page/home-12/Portfolio";
import Testimonial from "../../components/home-page/home-13/Testimonial";
import Faq from "../../components/home-page/home-13/Faq";
import Link from "next/link";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import CopyrightFooter from "../../components/home-page/home-13/CopyrightFooter";
import Image from "next/image";

import IntroAbout from "../../components/home-page/home-1/IntroAbout";
import AppBanner from "../../components/home-page/home-1/AppBanner";
import FeatureBlock2 from "../../components/home-page/home-3/FeatureBlock2";

const LeadGeneration = () => {
  return (
    <>
      <Seo pageTitle="MyProBuddy" />
      {/* <!-- 
      =============================================
    Theme Default Menu
     ============================================== 	
    --> */}
      <Header />
      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <Hero />
      <div className="fancy-feature-thirtyFive mt-90 md-mt-70">
        <div className="container" data-aos="fade-up">
          
          {/* /.top-banner */}
        </div>
        {/* End .container */}

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.hero-banner-nine */}
      <br/><br/><br/><br/>
      <div className="fancy-feature-thirtyNine position-relative zn2 pt-90 pb-50 lg-pt-50 lg-pb-10">
        <div className="container">
          <div className="row gx-xxl-5">
            <FeatureBlock />
          </div>
        </div>
        <img
          src="/images/shape/shape_148.svg"
          alt="shape"
          className="shapes shape-one lazy-img"
        />
        <img
          src="/images/shape/shape_149.svg"
          alt="shape"
          className="shapes shape-two lazy-img"
        />
        <img
          src="/images/shape/shape_150.svg"
          alt="shape"
          className="shapes shape-three lazy-img"
        />
        <img
          src="/images/shape/shape_151.svg"
          alt="shape"
          className="shapes shape-four lazy-img"
        />
      </div>

      <div className="fancy-feature-thirtyEight mt-140 lg-mt-100">
        <div className="container">
          <AppBanner />
        </div>
        {/* /.container */}
      </div>
      {/*
        =====================================================
        Feedback Section Eight
        =====================================================
        */}
      <div className="wrapper mt-90 lg-mt-30">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </div>
      {/* <Feedback /> */}
      {/* <div className="fancy-feature-eight position-relative mt-225 xl-mt-150 md-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7 ms-auto order-lg-last">
              <Features2 />
            </div>
          </div>
        </div>
        </div> */}
      {/* /.feedback-section-eight */}
      {/*  
        =============================================
        Feature Section Thirty
        ============================================== 
      */}
      
      <Feature />
      {/* <FeatureBlock2/>
       */}
      {/* /.fancy-feature-thirty */}

      {/* 
        =============================================
        Feature Section Thirty One
        ============================================== 
        */}
      <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 pb-140 lg-pt-100 lg-pb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Get
                  <span className="position-relative">
                    {" "}
                    Quality
                    <img src="/images/shape/shape_122.svg" alt="icon shape" />
                  </span>
                  Leads
                </h2>
                <p className="fs-20 mt-20">
                  Our digital advertising approach focuses on capturing the
                  essential information you need to be able to generate a real
                  ROI.
                </p>
              </div>
              
              {/* /.title-style-ten */}
            </div>
          </div>
           <div className="portfolio-gallery-two pt-0 lg-pt-0">
        <div className="container">
          <div className="wrapper">
            <div id="isotop-gallery-wrapper">
              <Portfolio />
            </div>
            {/* /#isotop-gallery-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
      </div>


        <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>

          {/* End .row */}

          {/* <div className="row">
            <Leads />
          </div> */}
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_124.svg"
          alt="icon shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_125.svg"
          alt="icon shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.fancy-feature-thirtyOne */}

      {/* 
        =============================================
        Feature Section Thirty Two
        ============================================== 
        */}
      <div className="fancy-feature-thirtyTwo mt-190 lg-mt-120">
        <div className="container">
          <div className="row">
            <FeaturesBlock />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        {/* /.wrapper */}
      </div>
      {/* /.fancy-feature-thirtyTwo */}
      {/*
			=====================================================
				Feedback Section Nine
			=====================================================
			*/}
      <div className="feedback-section-nine position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 ms-lg-auto" data-aos="fade-left">
              <div className="title-style-ten">
                <div className="sc-title">SUCCESS STORIES</div>
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  See success{" "}
                  <span className="position-relative">
                    stories <img src="/images/shape/shape_122.svg" alt="img" />
                  </span>
                  of our customers.
                </h2>
              </div>
              {/* /.title-style-ten */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <SuccessStory />
        {/* /.wrapper */}
      </div>
      {/* /.feedback-section-nine */}

      {/* 
			=============================================
				Feedback Section Ten
			============================================== 
			*/}
      <div className="feedback-section-ten position-relative pt-200 lg-pt-150">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="title-style-ten text-center text-lg-start"
                  data-aos="fade-right"
                >
                  <div className="sc-title">FEEDBACK</div>
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    What
                    <span className="position-relative">
                      {" "}
                      client <img src="/images/shape/shape_129.svg" alt="" />
                    </span>
                    think about us.
                  </h2>
                </div>
                {/* /.title-style-ten */}
              </div>
            </div>
            {/* End .row */}
            <Testimonial />
          </div>
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_130.svg"
          alt=""
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_131.svg"
          alt=""
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.feedback-section-ten */}

      {/* 
        =============================================
        Feature Section Thirty Three
        ============================================== 
        */}
      <div className="fancy-feature-thirtyThree mt-180 lg-mt-120">
        <div className="container">
          <div className="title-style-ten text-center" aos="fade-up">
            <div className="sc-title">FAQ</div>
            <h2 className="main-title font-recoleta fw-normal tx-dark">
              Questions &amp;{" "}
              <span className="position-relative">
                Answers{" "}
                <Image
                  width={219}
                  height={7}
                  src="/images/shape/shape_132.svg"
                  alt=""
                />
              </span>
            </h2>
          </div>
          {/* /.title-style-ten */}

          <div
            className="bg-wrapper position-relative mt-80 lg-mt-40"
            aos="fade-up"
          >
            <Faq />
            <Image
              width={65}
              height={66}
              src="/images/shape/shape_133.svg"
              alt="shape"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-feature-thirtyThree */}

      {/*
        =====================================================
        Fancy Short Banner Twelve
        =====================================================
        */}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Have Any Project? <br />
                  <span className="position-relative">
                    Let’s Talk{" "}
                    <Image
                      width={221}
                      height={7}
                      src="/images/shape/shape_132.svg"
                      alt=""
                    />
                  </span>
                  &amp; Grow your Business
                </h2>
              </div>
              {/* /.title-style-ten */}
              <p
                className="text-lg mt-45 mb-55 lg-mb-30 lg-mt-40"
                aos="fade-up"
                aos-delay="200"
              >
                We’r ready to help you. Our expert is here, just send a message.
              </p>
              <Link
                href="/contact"
                className="btn-twenty fw-500 tran3s"
                data-aos-delay="300"
                data-aos="fade-up"
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
        <div className="shapes shape-one" />
      </div>
      {/* /.fancy-short-banner-twelve */}
      {/*
        =====================================================
        Footer
        =====================================================
        */}
      <div className="footer-style-nine theme-basic-footer zn2 position-relative">
        <div className="bg-wrapper">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/logo_06.png"
                      alt="logo"
                      width={76}
                      height={27}
                    />
                  </Link>
                </div>
              </div>
              <FooterContent />

              <div className="col-lg-4 mb-30 form-widget">
                <h5 className="footer-title fw-normal">Newslettert</h5>
                <h6 className="pt-15 pb-20 text-white">Join our newsletter</h6>
                <Subscribe />
                <div className="fs-14 mt-10 text-white opacity-50">
                  We only send interesting and relevant emails.
                </div>
              </div>
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.bg-wrapper */}

        <CopyrightFooter />

        <div className="shapes shape-one" />
        <Image
          width={84}
          height={104}
          src="/images/shape/shape_134.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>
      {/* /.footer-style-nine */}
    </>
  );
};

export default LeadGeneration;
