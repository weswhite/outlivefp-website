import React from "react";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Why I built this product section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-medium mb-4">Why I built this product</p>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-16">
            To help you stop waiting for "Someday"
          </h2>
        </div>
      </section>

      {/* But what if later never comes section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-left mb-20">
          <p className="text-accent text-sm font-medium mb-4">You've been told to sacrifice now and live later</p>
          <h2 className="text-3xl md:text-4xl font-light text-primary">
            But what if later never comes?
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="max-w-6xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Time Keeps Slipping */}
            <div className="bg-gray-100 p-6 rounded-lg h-48">
              <div className="w-12 h-0.5 bg-primary mb-6"></div>
              <div className="mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.90375 20H16.0962V17C16.0962 15.8615 15.6982 14.8877 14.902 14.0787C14.1058 13.2697 13.1385 12.8652 12 12.8652C10.8615 12.8652 9.89417 13.2697 9.098 14.0787C8.30183 14.8877 7.90375 15.8615 7.90375 17V20ZM12 11.1348C13.1385 11.1348 14.1058 10.7302 14.902 9.92125C15.6982 9.11225 16.0962 8.1385 16.0962 7V4H7.90375V7C7.90375 8.1385 8.30183 9.11225 9.098 9.92125C9.89417 10.7302 10.8615 11.1348 12 11.1348ZM4.5 21.5V20H6.404V17C6.404 15.8743 6.712 14.8497 7.328 13.926C7.944 13.0022 8.76033 12.3602 9.777 12C8.76033 11.6333 7.944 10.9898 7.328 10.0693C6.712 9.14875 6.404 8.12567 6.404 7V4H4.5V2.5H19.5V4H17.596V7C17.596 8.12567 17.288 9.14875 16.672 10.0693C16.056 10.9898 15.2397 11.6333 14.223 12C15.2397 12.3602 16.056 13.0022 16.672 13.926C17.288 14.8497 17.596 15.8743 17.596 17V20H19.5V21.5H4.5Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-4 leading-tight">Time Keeps Slipping</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                You're waiting for "someday" to enjoy your life—until it slips away.
              </p>
            </div>

            {/* Disconnection from purpose */}
            <div className="bg-gray-100 p-6 rounded-lg h-48">
              <div className="w-12 h-0.5 bg-primary mb-6"></div>
              <div className="mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.025 21.3C10.0097 19.2743 8.37958 17.6083 7.13475 16.302C5.88975 14.9955 4.92467 13.8888 4.2395 12.9818C3.55417 12.0748 3.09292 11.2882 2.85575 10.622C2.61858 9.956 2.5 9.24867 2.5 8.5C2.5 7.03633 3.00908 5.79542 4.02725 4.77725C5.04542 3.75908 6.28633 3.25 7.75 3.25C8.44417 3.25 9.11517 3.37308 9.763 3.61925C10.4107 3.86542 10.9935 4.22117 11.5115 4.6865L9.9135 10.25H12.9423L12.1405 18.4713L15.0962 8.75H12.077L13.7078 3.873C14.0934 3.66533 14.4985 3.50958 14.923 3.40575C15.3473 3.30192 15.7832 3.25 16.2308 3.25C17.6944 3.25 18.9353 3.75908 19.9535 4.77725C20.9717 5.79542 21.4807 7.03633 21.4807 8.5C21.4807 9.25517 21.3547 9.97567 21.1028 10.6615C20.8509 11.3475 20.3766 12.1513 19.6798 13.073C18.9829 13.9948 18.0195 15.1032 16.7895 16.398C15.5593 17.6928 13.9712 19.3268 12.025 21.3ZM10.7213 17.8423L11.304 11.75H7.927L9.773 5.29025C9.4615 5.13142 9.1345 5.00167 8.792 4.901C8.44967 4.80033 8.10233 4.75 7.75 4.75C6.71433 4.75 5.83042 5.11608 5.09825 5.84825C4.36608 6.58042 4 7.46433 4 8.5C4 9.0295 4.10542 9.56858 4.31625 10.1173C4.52725 10.6661 4.89108 11.2953 5.40775 12.0048C5.92442 12.7144 6.61575 13.5372 7.48175 14.473C8.34775 15.409 9.42758 16.5321 10.7213 17.8423ZM14.123 17.0175C16.2807 14.8072 17.7964 13.0812 18.6702 11.8395C19.5439 10.5978 19.9807 9.48467 19.9807 8.5C19.9807 7.46433 19.6147 6.58042 18.8825 5.84825C18.1503 5.11608 17.2664 4.75 16.2308 4.75C16.0089 4.75 15.7903 4.7705 15.575 4.8115C15.3597 4.8525 15.1443 4.90958 14.9288 4.98275L14.1845 7.25H17.0943L14.123 17.0175Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-4 leading-tight">Disconnection from purpose</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                You're drifting from the purpose that once drove you.
              </p>
            </div>

            {/* Success Without Fulfillment */}
            <div className="bg-gray-100 p-6 rounded-lg h-48">
              <div className="w-12 h-0.5 bg-primary mb-6"></div>
              <div className="mb-6">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 17.5481V16.0481H18.9655L13.352 10.5038L9.352 14.5038L2.5 7.6021L3.55375 6.5481L9.352 12.3463L13.352 8.34635L20 14.9943V12.0481H21.5V17.5481H16Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-4 leading-tight">Success Without Fulfillment</h3>
              <p className="text-primary/70 text-sm leading-relaxed">
                Looks good on paper, but doesn't feel right inside.
              </p>
            </div>

            {/* Call-out box */}
            <div className="bg-primary text-white p-6 rounded-lg h-48 flex flex-col justify-center relative">
              <img 
                src="/images/3e56a2659e62ed782670829113d966303f78f728.png" 
                alt="Outlive icon" 
                className="w-8 h-8 mb-4"
              />
              <p className="text-sm leading-relaxed">
                I believe your finances should support your purpose, and your future. <strong>Because life is too short to delay what matters most.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Meet Zach Rodriguez section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-accent text-sm font-medium mb-4">Your Financial Guide</p>
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-12">
            Meet Zach Rodriguez
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="flex justify-center">
              <div className="aspect-square w-full max-w-sm">
                <img 
                  src="/images/meet-zach.jpg" 
                  alt="Zach Rodriguez" 
                  className="w-full h-full object-cover object-center rounded-lg"
                />
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <p className="text-primary/70 mb-6">
                After navigating personal trials and professional transitions, <strong>Zach founded Outlive Financial Planning</strong>, a Registered Investment Adviser, to help people live with more clarity, confidence, and intention.
              </p>
              <p className="text-primary/70 mb-8">
                As a values-based, fee-only advisor, he brings a rare combination of strategic insight, <strong>transparency</strong>, and deep empathy.
              </p>
              
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 mr-4 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.625 9.1875C5.625 12.6938 8.49375 15.5625 12 15.5625C15.5063 15.5625 18.375 12.6938 18.375 9.1875C18.375 5.68125 15.5063 2.8125 12 2.8125C8.49375 2.8125 5.625 5.68125 5.625 9.1875ZM16.875 9.1875C16.875 11.8687 14.6812 14.0625 12 14.0625C9.31875 14.0625 7.125 11.8687 7.125 9.1875C7.125 6.50625 9.31875 4.3125 12 4.3125C14.6812 4.3125 16.875 6.50625 16.875 9.1875Z" fill="#9CA3AF"/>
                    <path d="M4.5751 22.3875C6.5626 20.4 9.1876 19.3125 12.0001 19.3125C14.8126 19.3125 17.4376 20.4 19.4251 22.3875L20.4938 21.3187C18.2251 19.0687 15.2063 17.8125 12.0001 17.8125C8.79385 17.8125 5.7751 19.0687 3.50635 21.3187L4.5751 22.3875Z" fill="#9CA3AF"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary mb-1">Zach Rodriguez</p>
                  <p className="text-xs text-primary/60 mb-3">
                    Founder & Lead Planner, Outlive Financial Planning
                  </p>
                  <p className="text-sm text-primary/70 italic">
                    "My <strong>mission</strong> is to help you stop outsourcing joy to 'someday'—and start building a life you don't want to retire from."
                  </p>
                </div>
              </div>
              
              <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-all duration-300">
                Zach's Story →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Outlive Process section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <div className="w-12 h-0.5 bg-primary mb-6"></div>
            <p className="text-accent text-sm font-medium mb-4">The Outlive Process</p>
            <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
              In just three steps
            </h2>
            <p className="text-primary/70 text-lg max-w-lg">
              A simple plan for designing your financial life with purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.8462 12.6923L11.8884 8.8635C11.4102 8.402 11.008 7.88825 10.6817 7.32225C10.3553 6.75625 10.1922 6.13983 10.1922 5.473C10.1922 4.64717 10.4812 3.94525 11.0594 3.36725C11.6374 2.78908 12.3393 2.5 13.1652 2.5C13.705 2.5 14.2034 2.63017 14.6604 2.8905C15.1176 3.15067 15.5128 3.48208 15.8462 3.88475C16.1795 3.48208 16.5747 3.15067 17.0317 2.8905C17.4887 2.63017 17.9871 2.5 18.5269 2.5C19.3527 2.5 20.0547 2.78908 20.6327 3.36725C21.2108 3.94525 21.4999 4.64717 21.4999 5.473C21.4999 6.13983 21.3393 6.75625 21.0182 7.32225C20.697 7.88825 20.2973 8.402 19.8192 8.8635L15.8462 12.6923ZM15.8462 10.604L18.7057 7.83275C19.0415 7.50325 19.3412 7.14492 19.6047 6.75775C19.8682 6.37058 19.9999 5.94233 19.9999 5.473C19.9999 5.0615 19.8572 4.71317 19.5719 4.428C19.2867 4.14267 18.9384 4 18.5269 4C18.2102 4 17.9205 4.08267 17.6577 4.248C17.3948 4.4135 17.1627 4.62317 16.9614 4.877L15.8462 6.2345L14.7307 4.877C14.5293 4.62317 14.2972 4.4135 14.0344 4.248C13.7717 4.08267 13.482 4 13.1652 4C12.7537 4 12.4053 4.14267 12.1202 4.428C11.8348 4.71317 11.6922 5.0615 11.6922 5.473C11.6922 5.94233 11.8239 6.37058 12.0874 6.75775C12.3509 7.14492 12.6506 7.50325 12.9864 7.83275L15.8462 10.604ZM6.7019 18.577L13.9594 20.6308L19.9287 18.7808C19.8775 18.5539 19.7717 18.3799 19.6114 18.2587C19.4511 18.1376 19.2697 18.077 19.0672 18.077H14.1699C13.7336 18.077 13.3628 18.0603 13.0577 18.027C12.7525 17.9937 12.439 17.9206 12.1172 17.8077L9.85965 17.0615L10.3037 15.5922L12.3287 16.2962C12.6313 16.3987 12.9807 16.4686 13.3769 16.5057C13.7731 16.5429 14.3365 16.5667 15.0672 16.577C15.0672 16.3295 15.0114 16.116 14.8999 15.9365C14.7884 15.757 14.6416 15.6358 14.4594 15.573L8.65765 13.4423C8.63832 13.4359 8.62065 13.4312 8.60465 13.428C8.58865 13.4247 8.57107 13.423 8.5519 13.423H6.7019V18.577ZM1.7019 21.5V11.9233H8.5404C8.6454 11.9233 8.75174 11.9347 8.8594 11.9578C8.96724 11.9809 9.06724 12.0078 9.1594 12.0385L14.9864 14.1848C15.4402 14.3526 15.8172 14.6497 16.1172 15.076C16.4172 15.5023 16.5672 16.0027 16.5672 16.577H19.0672C19.7852 16.577 20.3701 16.8088 20.8219 17.2723C21.2739 17.7356 21.4999 18.3372 21.4999 19.077V19.8845L14.0094 22.2115L6.7019 20.127V21.5H1.7019ZM3.2019 20H5.2019V13.423H3.2019V20Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-4">Clarify What Matters Most</h3>
              <p className="text-primary/70 text-sm">
                Uncover your values, priorities, and long-term vision.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.2923 18.8078H12.6578V17.5962C13.4334 17.4911 14.1357 17.1997 14.7645 16.722C15.3933 16.2445 15.7078 15.5205 15.7078 14.55C15.7078 13.85 15.5013 13.2308 15.0885 12.6923C14.6757 12.1539 13.8693 11.6681 12.6692 11.2348C11.6179 10.8758 10.9198 10.5648 10.575 10.302C10.2302 10.0392 10.0578 9.67183 10.0578 9.2C10.0578 8.72817 10.2343 8.34483 10.5875 8.05C10.9407 7.75517 11.4282 7.60775 12.05 7.60775C12.5705 7.60775 12.9903 7.7305 13.3095 7.976C13.6288 8.2215 13.8744 8.5295 14.0462 8.9L15.2807 8.40375C15.0717 7.87175 14.7311 7.41633 14.2587 7.0375C13.7862 6.65867 13.2692 6.44742 12.7078 6.40375V5.19225H11.3422V6.40375C10.4898 6.56792 9.835 6.91375 9.378 7.44125C8.92083 7.96892 8.69225 8.55517 8.69225 9.2C8.69225 9.95133 8.91983 10.5558 9.375 11.0135C9.83017 11.4712 10.5718 11.8846 11.6 12.2537C12.6628 12.6436 13.3888 12.9933 13.778 13.303C14.167 13.6125 14.3615 14.0282 14.3615 14.55C14.3615 15.177 14.1353 15.6324 13.6827 15.9163C13.2301 16.2003 12.7192 16.3422 12.15 16.3422C11.5872 16.3422 11.0837 16.1731 10.6395 15.8348C10.1952 15.4963 9.85375 15.0013 9.61525 14.35L8.35 14.8655C8.609 15.6077 8.98108 16.1973 9.46625 16.6345C9.95158 17.0717 10.5603 17.3756 11.2923 17.5462V18.8078ZM12 21.5C10.6872 21.5 9.45292 21.2503 8.29725 20.751C7.14142 20.2517 6.13592 19.5744 5.28075 18.7193C4.42558 17.8641 3.74833 16.8586 3.249 15.7028C2.74967 14.5471 2.5 13.3128 2.5 12C2.5 10.6872 2.74967 9.45292 3.249 8.29725C3.74833 7.14142 4.42558 6.13592 5.28075 5.28075C6.13592 4.42558 7.14142 3.74833 8.29725 3.249C9.45292 2.74967 10.6872 2.5 12 2.5C13.3128 2.5 14.5471 2.74967 15.7028 3.249C16.8586 3.74833 17.8641 4.42558 18.7193 5.28075C19.5744 6.13592 20.2517 7.14142 20.751 8.29725C21.2503 9.45292 21.5 10.6872 21.5 12C21.5 13.3128 21.2503 14.5471 20.751 15.7028C20.2517 16.8586 19.5744 17.8641 18.7193 18.7193C17.8641 19.5744 16.8586 20.2517 15.7028 20.751C14.5471 21.2503 13.3128 21.5 12 21.5ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-4">Organize Your Financial Life</h3>
              <p className="text-primary/70 text-sm">
                Build a financial plan aligned with your life—not just your income.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="mb-6">
                <svg className="w-8 h-8 text-primary/40 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.25 5.21154V1.51929H12.75V5.21154H11.25ZM17.323 7.73079L16.2943 6.70204L18.873 4.03854L19.9365 5.11729L17.323 7.73079ZM18.7885 12.75V11.25H22.4808V12.75H18.7885ZM11.25 22.4808V18.798H12.75V22.4808H11.25ZM6.69629 7.69054L4.03854 5.12704L5.12704 4.07304L7.74054 6.67704L6.69629 7.69054ZM18.8578 19.9615L16.2943 17.298L17.3078 16.2943L19.927 18.8423L18.8578 19.9615ZM1.51929 12.75V11.25H5.21154V12.75H1.51929ZM5.11729 19.9615L4.07304 18.873L6.65204 16.2943L7.19429 16.8058L7.74629 17.3328L5.11729 19.9615ZM12.0023 17.5C10.4751 17.5 9.17629 16.9655 8.10579 15.8965C7.03529 14.8275 6.50004 13.5295 6.50004 12.0023C6.50004 10.4751 7.03454 9.17629 8.10354 8.10579C9.17254 7.03529 10.4706 6.50004 11.9978 6.50004C13.525 6.50004 14.8238 7.03454 15.8943 8.10354C16.9648 9.17254 17.5 10.4706 17.5 11.9978C17.5 13.525 16.9655 14.8238 15.8965 15.8943C14.8275 16.9648 13.5295 17.5 12.0023 17.5ZM12 16C13.1 16 14.0417 15.6084 14.825 14.825C15.6084 14.0417 16 13.1 16 12C16 10.9 15.6084 9.95837 14.825 9.17504C14.0417 8.3917 13.1 8.00004 12 8.00004C10.9 8.00004 9.95837 8.3917 9.17504 9.17504C8.3917 9.95837 8.00004 10.9 8.00004 12C8.00004 13.1 8.3917 14.0417 9.17504 14.825C9.95837 15.6084 10.9 16 12 16Z"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-4">Start Living Intentionally</h3>
              <p className="text-primary/70 text-sm">
                Make decisions with clarity and confidence—starting today.
              </p>
            </div>
          </div>

          <div>
            <button className="bg-accent text-white px-6 py-3 rounded-full font-medium hover:bg-accent/90 transition-all duration-300 inline-flex items-center">
              How Outlive is Different →
            </button>
          </div>
        </div>
      </section>

      {/* How We Can Work Together section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">
                How We Can Work Together
              </h2>
              <p className="text-primary/70 text-lg mb-8 leading-relaxed">
                A range of practical, personalized solutions to help you feel confident and clear—whether you're looking for a long-term planning relationship or a one-time check-in.
              </p>
              <button className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:bg-accent/90 transition-all duration-300 inline-flex items-center">
                See Our Services →
              </button>
            </div>
            
            <div className="space-y-4">
              {/* Most Popular - Ongoing Financial Planning */}
              <div className="relative overflow-hidden">
                {/* Gold background - rectangular with rounded corners */}
                <div className="w-full h-32 bg-accent rounded-2xl"></div>
                {/* Blue overlapping circle - larger than container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5/6 bg-primary rounded-full flex flex-col items-center justify-center text-white text-center p-4" style={{ height: '11.5rem' }}>
                    <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full mb-2">
                      MOST POPULAR
                    </span>
                    <h3 className="text-lg font-semibold mb-1">Ongoing Financial Planning</h3>
                    <p className="text-white/90 text-xs">
                      Purpose-driven holistic financial<br/>planning partnership
                    </p>
                  </div>
                </div>
              </div>

              {/* Investment Management */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-medium text-primary mb-2">Investment Management</h3>
                <p className="text-primary/70 text-sm">
                  Custom portfolios built for transparency,<br/>tax efficiency, and control
                </p>
              </div>

              {/* Estate Planning */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-medium text-primary mb-2">Estate Planning</h3>
                <p className="text-primary/70 text-sm">
                  Guide you through the process of<br/>creating a personalized Estate Plan
                </p>
              </div>

              {/* One-Time Financial Plans */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-medium text-primary mb-2">One-Time Financial Plans</h3>
                <p className="text-primary/70 text-sm">
                  A holistic, one-time plan for<br/>DIYers ready to optimize
                </p>
              </div>

              {/* Advisory Services */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-medium text-primary mb-2">Advisory Services</h3>
                <p className="text-primary/70 text-sm">
                  Hourly or project-based help for life's big decisions<br/>— from military bonuses to business transitions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
