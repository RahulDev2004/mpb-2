import React from "react";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-13/Header";
import Hero from "../../components/home-page/home-13/hero";
import About from "../../components/home-page/home-5/about";
import Partners from "../../components/home-page/home-12/Partners";
import CourseFeatured from "../../components/home-page/home-3/CourseFeatured";
import Feedback from "../../components/home-page/home-13/Feedback";
import CourseFilter from "../../components/home-page/home-3/CourseFilter";
import Feature from "../../components/home-page/home-13/Feature";
import Features2 from "../../components/home-page/home-7/Features2";
import Leads from "../../components/home-page/home-13/Leads";
import FeatureBlock from "../../components/home-page/home-3/FeatureBlock";
import FeaturesBlock from "../../components/home-page/home-13/FeaturesBlock";
import Counter from "../../components/home-page/home-13/Counter";
import SuccessStory from "../../components/home-page/home-13/SuccessStory";
import Portfolio from "../../components/home-page/home-12/Portfolio";
import Head from "../../components/home-page/home-12/Head";
import Testimonial from "../../components/home-page/home-13/Testimonial";
import Testi from "../../components/home-page/home-5/Testi";
import Faq from "../../components/home-page/home-13/Faq";
import Link from "next/link";
import FooterContent from "../../components/home-page/home-13/FooterContent";
import Subscribe from "../../components/home-page/home-13/Subscribe";
import CopyrightFooter from "../../components/home-page/home-13/CopyrightFooter";
import Image from "next/image";
import DefaulHeader from "../../components/header/DefaulHeader";
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
      {/* <Hero /> */}
    <div className="fancy-feature-thirtyOne position-relative zn2 pt-140 bg-black mb-140 lg-pt-100 lg-mb-70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-9 m-auto">
              <div
                className="title-style-ten text-center pb-40 lg-pb-20"
                data-aos="fade-up"
              >
                <h2 className="main-title font-recoleta fw-normal text-white">
                  Phygital
                  <span className="position-relative">
                    {" "}
                     Startup 
                    <img src="/images/shape/shape_122.svg" alt="icon shape" />
                  </span>
                  Accelerator
                </h2>
                {/* <p className="fs-20 mt-20">
                  Our digital advertising approach focuses on capturing the
                  essential information you need to be able to generate a real
                  ROI.
                </p> */}
              </div>
              
              {/* /.title-style-ten */}
            </div>
          </div>
           <div className="portfolio-gallery-two pt-0 lg-pt-0">
        <div className="container">
          <div className="wrapper">
            <div id="isotop-gallery-wrapper">
              <Head />
            </div>
            {/* /#isotop-gallery-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
      </div>
          {/* End .row */}
        
          {/* <div className="row">
            <Leads />
          </div> */}
        </div>
        {/* /.container */}

        {/* <img
          src="/images/shape/shape_124.svg"
          alt="icon shape"
          className="lazy-img shapes shape-one"
        /> */}
        <img
          src="/images/shape/shape_125.svg"
          alt="icon shape"
          className="lazy-img shapes shape-two"
        />
         <div className="partner-section-five position-relative mt-130 lg-mt-100">
        <div className="wrapper m-auto">
          <Partners />
        </div>
        {/* /.wrapper */}
      </div> 
      </div>
     
      {/* /.fancy-feature-thirtyOne */}
      
      <div className="fancy-feature-thirtyFive mt-0 md-mt-0">
        {/* <div className="container" data-aos="fade-up">
          
          {/* /.top-banner 
        </div> */}
        {/* End .container */}

        <div className="bg-wrapper mt-150 pt-100 lg-mt-80 lg-pt-70">
          <div className="container">
            <IntroAbout />
          </div>
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.hero-banner-nine */}
      {/* <br/><br/><br/><br/>
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
      </div> */}

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
      <div className="wrapper mt-90 mb-90 lg-mt-30 lg-mb-30">
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
                Customized 
                  <span className="position-relative">
                    {" "}
                    Action 
                    <img src="/images/shape/shape_122.svg" alt="icon shape" />
                  </span>
                  Plan
                </h2>
                <p className="fs-20 mt-20">
                You tell us what you want to achieve, we'll build a kick-ass plan to get it done fast. We'll customize your plan to take advantage of the playbooks of 1000 of startups before you.


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

      <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* /.container */}
      </div>



      <div className="partner-section-six mt-140 lg-mt-80" data-aso="fade-up">
        <div className="container">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <span className="lines" />
              <div className="title text-uppercase tx-dark text-center">
                JANO has been featured In
              </div>
              <span className="lines" />
            </div>
            {/* End d-flex */}

            <div className="partner_slider_one mt-65 lg-mt-40">
              <Partners />
            </div>
            {/* End partner_slide */}
          </div>
        </div>
      </div>
      {/* 
        =============================================
        Feature Section Thirty Two
        ============================================== 
        */}

<div className="fancy-feature-fortyTwo position-relative pt-130 pb-180 mt-180 lg-pt-80 lg-pb-80 xs-mt-120">
        <div className="rating-box">
          <img src="/images/shape/shape_154.svg" alt="media" />
          <div className="rate fw-500 tx-dark">
            A+ <br />
            <span>Courses</span>
          </div>
        </div>
        {/* End rating-box */}

        <div className="container">
          <div className="wrapper position-relative">
            
            <CourseFilter />
            {/* /.slider-wrapper */}
          </div>
          {/* /.wrapper */}
        </div>
        {/* End .container */}
      </div>

        
      <div className="fancy-feature-fortyOne position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 mt-100" data-aos="fade-right">
              <div className="title-style-one mb-40 pt-30 lg-pt-10 lg-mb-20">
                <div className="sc-title text-uppercase">Looking For Funding?</div>
                <h2 className="main-title fw-500 tx-dark m0">
                Raise Capital
                </h2>
              </div>
              {/* End title */}
              {/* <Faq /> */}
              <div className="fs-20">
              We've helped startups raise over $600 million in funding commitments. We can help you with every aspect of your fundraise from understanding how the process works to building your Pitch Deck to finding the perfect investors.
              </div>
              {/* /.accordion-style-six */}
              <a href="#" className="btn-one fw-500 mt-100 md-mt-40">
                Explorer All
              </a>
            </div>
            {/* End col-xl-5 */}

            <div
              className="col-xxl-6 col-xl-7 col-lg-6 ms-auto"
              data-aos="fade-left"
            >
              <div className="wrapper position-relative ps-sm-3 pe-sm-3 ps-xl-5 pe-xl-5 md-mt-70">
                <div className="row">
                  <CourseFeatured />
                </div>
                <img
                  src="/images/shape/shape_152.svg"
                  alt="shape"
                  className="lazy-img shapes shape-one"
                />
                <img
                  src="/images/shape/shape_153.svg"
                  alt="shape"
                  className="lazy-img shapes shape-two"
                />
              </div>
              {/* /.wrapper */}
            </div>
            {/* End col-xl-6 */}
          </div>
        </div>
      </div>
      {/* /.fancy-feature-thirtyTwo */}
      {/*
			=====================================================
				Feedback Section Nine
			=====================================================
			*/}
      {/* <div className="feedback-section-nine position-relative mt-200 lg-mt-120">
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
              {/* /.title-style-ten 
            </div>
          </div>
        </div>
        {/* /.container 

        <SuccessStory />
        {/* /.wrapper
      </div> */}
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
                  {/* <div className="sc-title">FEEDBACK</div> */}
                  <h2 className="main-title font-recoleta fw-normal tx-dark">
                    Recently
                    <span className="position-relative">
                      {" "}
                      Funded 
                      <img src="/images/shape/shape_129.svg" alt="" />
                    </span>
                
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

        {/* <img
          src="/images/shape/shape_130.svg"
          alt=""
          className="lazy-img shapes shape-one"
        /> */}
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
     <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">
                    Check our client lovely words.
                  </h2>
                </div>
                {/* /.title-style-five */}
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testi />
                  </div>
                  {/* /.feedback_slider_eleven */}
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div
                  className="img-holder position-relative mt-25"
                  data-aos="fade-left"
                >
                  <img
                    src="/images/media/img_84.jpg"
                    alt="shape"
                    className="lazy-img ms-auto"
                  />

                  <div className="rating-box bg-black text-white d-flex flex-column justify-content-center align-items-center">
                    <strong className="fw-500">4.8</strong>
                    <span>avg rating</span>
                  </div>
                  {/* /.rating-box */}

                  <img
                    src="/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /.line-bg-wrapper */}
        </div>
        {/* End .container */}

        <img
          src="/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
        <img
          src="/images/assets/sticker_03.png"
          alt="shape"
          className="lazy-img shapes shape-four"
          data-aos="fade-up"
        />
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
