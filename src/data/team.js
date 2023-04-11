export default [
    {
        name: 'Sajag Pokharel',
        imgUrl: '/assets/people/sajag_pokharel.jpeg',
        introduction: 'As a CEO, Sajag would be the highest-ranking executive in a company, responsible for making strategic decisions and leading the organization to success. Sajags primary duties would include setting the companys overall strategy, overseeing daily operations, managing finances, and making major business decisions. Sajag would be the face of the company, representing it to investors, partners, and the public.'
    },
    {
        name: 'Rupesh Oli',
        imgUrl: '/assets/people/rupesh.jpg',
        introduction: 'Rupesh is responsible for managing and directing the organizations day-to-day operations. He would be accountable for implementing the companys overall strategy, achieving financial goals, and ensuring that the company is meeting its objectives.',
        role: 'Co-Founder'
    },
    {
        name: 'Saugat Adhikari',
        imgUrl: '/assets/people/saugat_adhikari.jpeg',
        introduction: 'Saugat is responsible for creating, improving and maintaining content to achieve business goals. He collaborates with marketing and design teams to plan and develop site content, style and layout. He is tasked with writing blog posts, updating existing web pages, and creating new ones based on current events or trends. He promotes the company\'s work through social media channels like Facebook pages, Instagram pages, Twitter & Tiktok handles.',
        role: 'Graphic Designer'
    },
    {
        name: 'Selina Budhatholi',
        imgUrl: '/assets/people/selina.jpeg',
        introduction: 'Selina oversees Bhairab ICT Solution’s Project Management, Consulting and Promotions & Engagement teams, working with clients and Bhairab’s internal content marketing experts to ensure operational excellence across the business. Her main responsibilities include providing company leading consultancy and integration to Bhairab’s clients.',
        role: 'President of Services'
    },
    {
        name: 'Nishant Dahal',
        imgUrl: '/assets/people/nishant_dahal.jpg',
        introduction: 'Nishant is responsible for creating, improving and maintaining content to achieve business goals. He collaborates with marketing and design teams to plan and develop site content, style and layout. He is tasked with writing blog posts, updating existing web pages, and creating new ones based on current events or trends. He promotes the company\'s work through social media channels like Facebook pages, Instagram pages, Twitter & Tiktok handles.',
        role: 'Content Executive'
    },
    {
        name: 'Bishal Khadka',
        imgUrl: '/assets/people/bishal_khadka.jpg',
        introduction: 'Bishal is responsible for creating visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers. He would work on various design projects, including websites, logos, branding, packaging, and advertising materials.',
        role: ''
    },
    {
        name: 'Rakshyak KC',
        imgUrl: '/assets/people/rakshyak_kc.jpeg',
        introduction: 'Rakshyak creates visual concepts to communicate information which includes everything from posters to billboards, logos, marketing materials and more. He communicates with clients and consumers to develop designs that portray an intended message. He also collaborates with other graphic designers, marketers, business analysts, writers, and programmers to create successful products, campaigns and websites.',
        role: 'Graphic Designer'
    },
    {
        name: 'Sakar Khatiwada',
        imgUrl: '/assets/people/sakar.jpg',
        introduction: 'As a Web Developer, Sakar is responsible for the coding, design, and layout of a website according to a company’s specifications. He’s in charge of a site’s overall look and feel. He meets with clients to discuss their website design and requirements.',
        role: 'Web Developer'
    },
    {
        name: 'Prakash',
        imgUrl: '/assets/people/prakash.jpeg',
        introduction: 'Prakash would use their technical skills, creativity, and artistic vision to produce high-quality photographs that tell a story, evoke emotions, or showcase the beauty of a subject or scene.',
        role: ''
    },
      {
        name: 'Nitika Kharel',
        imgUrl: '/assets/people/nitika.jpeg',
        introduction: 'Nitika someone who creates and publishes original content across various media channels such as social media platforms, blogs, websites, podcasts, or video sharing platforms. She is responsible for coming up with unique and engaging ideas, researching and gathering information, creating and editing content, and promoting it to their target audience. The content she  create could take various forms, including written articles, photos, videos, podcasts, and more.',
        role: ''
    },
    {
        name: 'Asmeeta Khanal',
        imgUrl: '/assets/people/asmeeta_khanal.jpeg',
        introduction: 'Asmeeta is responsible for all creative design output and to determine the best way to visually represent an idea and produce high level concepts for design projects and branding. In addition, he also oversees a creative staff team that produces art and designs to support that vision. He chooses, approves and manages photographs, artwork, graphics and designs.',
        role: 'Creative Director'
    },
    

    
].map((person) => {
    return {
        ...person,
        imgUrl: person.imgUrl.replace(/\.[^.]+$/, ".webp")
    };
});