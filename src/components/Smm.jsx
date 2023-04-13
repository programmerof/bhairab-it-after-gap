import React from 'react';

function Fb_marketing() {
  const title1 = "Instagram";
  const image1 = "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg";
  const details1 = "Instagram marketing is how brands use the app to make connections with their target audience. It’s commonly used to market products and services and build brand awareness and loyalty. Its popularity has grown as marketers understand the power of visual content. You may be wondering if paying an agency to strategically position your brand on the platform is worth it. Because there are so many features and possibilities, using a professional instagram marketing service is well worth the investment.";
  const go1 = "Learn More";

  const title2 = "FACEBOOK MARKETING";
  const image2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Facebook_F_icon.svg/640px-Facebook_F_icon.svg.png";
  const details2 = "Facebook marketing is one of the most cost effective social media marketing strategies. 1.5 billion people use Facebook multiple times in a single day. It allows you to reach a lot of people. Facebook features are easy and user-friendly which includes group, pages, and ads that help your business to reach broader. Optimising the Facebook Business page helps to maximise the clients in business.";
  const go2 = "Learn More";

  const title3 = "TWITTER MARKETING";
  const image3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU";
  const details3 = "Twitter assets include millions of active users, which offers huge opportunities for your brands to get connected with your targeted audiences. A professionally executed Twitter campaign can bring wonder for your brand. One of the major benefits of twitter marketing is that your business gets classified and branded with a unique identity. Twitter boasts over 300 million unique visitors every month. If you want to take advantage of all those visitors, Bhairab ICT Solution is the place to be.";
  const go3 = "Get Started";

  const title4 = "TIKTOK MARKETING";
  const image4 = "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png";
  const details4 = "Tiktok has been making moves in the social media world for the last couple of years. Tiktok has over 720 million active users every day. As the fastest growing social platform, young people are actively joining Tiktok and be part of a community that relates to their beliefs. If you are a brand and are not yet on Tiktok, you will miss out on a wide range of benefits. To resonate with the platform’s massive audience, our team conducts extensive research and training specific to TikTok optimization so your content connects with potential customers through every stage of the funnel.";
  const go4 = "Get Started";

  const title5 = "LINKEDIN MARKETING";
  const image5 = "https://is2-ssl.mzstatic.com/image/thumb/Purple126/v4/60/07/6c/60076ca1-8f9b-e85e-bd58-eeed411e14ed/AppIcon-0-1x_U007emarketing-0-7-0-85-220.png/1200x600wa.png";
  const details5 = "LinkedIn marketing has amassed 500 million users and is growing at the rate of 2 new users every second. It has become the best platform to connect with potential clients, and build never-ending relationships with them. Having a handsome number of people using it may be a sign of the times to start including Linkedln marketing in your digital marketing plan.";
  const go5 = "Get Started";


  return (
    <>
    <div className="flex flex-col items-center justify-center">
    <h4 className="text-center text-4xl md:mr-12 md:pb-6">Social media marketing service</h4>
  </div>
<div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
  
  <div className="flex flex-col md:flex-row">
    <div className="flex flex-col items-center mb-10 md:mb-0 md:ml-4 text-center">
      <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
      <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title1}</h3>
      </p>
      <img
        src={image1}
        alt="portfolio"
        className="object-contain w-full h-full md:h-48 cursor-pointer"
      />
      <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details1}</p>
      <a href="/Form">
        <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
          {go1}
        </button>
      </a>
    </div>
  

 
          <div className="mb-10 ml-4 text-center">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title2}</h3>
            </p>
            {/* image */}
            <img
              src={image2}
              alt="portfolio"
              className="object-contain w-full h-full md:h-48 md:h-48 cursor-pointer"
            />
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details2}</p>
            <a href="/Form">
              <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                {go2}
              </button>
            </a>
          </div>

          <div className="mb-10 ml-4 text-center">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title3}</h3>
            </p>
            {/* image */}
            <img
              src={image3}
              alt="portfolio"
              className="object-contain w-full h-full md:h-48 md:h-48 cursor-pointer"
            />
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details3}</p>
            <a href="/Form">
              <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                {go3}
              </button>
            </a>
          </div>

          <div className="mb-10 ml-4 text-center">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title4}</h3>
            </p>
            {/* image */}
            <img
              src={image4}
              alt="portfolio"
              className="object-contain w-full h-full md:h-48 md:h-48 cursor-pointer"
            />
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details4}</p>
            <a href="/Form">
              <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                {go4}
              </button>
            </a>
          </div>

          <div className="mb-10 ml-4 text-center">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
              <h3 className="text-lg font-semibold text-stone-900 dark:text-white">{title5}</h3>
            </p>
            {/* image */}
            <img
              src={image5}
              alt="portfolio"
              className="object-contain w-full h-full md:h-48 md:h-48 cursor-pointer"
            />
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">{details5}</p>
            <a href="/Form">
              <button className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                {go5}
              </button>
            </a>
          </div>

        </div>
      </div>

    </>
  );
}

export default Fb_marketing;
