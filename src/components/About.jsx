import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        // eslint-disable-next-line react/no-unknown-property
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I am a backend developer with experience in various technologies and frameworks. I graduated from Yerevan State University and have since gained 3+ years of professional experience in the field.
        During my time at Addevice, I worked as a backend developer, utilizing a range of technologies including Node.js, Java, MongoDB, AWS, React.js, and Express.js. I was involved in developing and maintaining backend systems, handling data storage and retrieval, and implementing various APIs.
        In addition to my full-time role, I also took on freelance projects where I had the opportunity to work on diverse projects. Two notable projects I worked on were Imperial Capital Group and World Crypto Exchanger. These projects allowed me to further expand my skills and work with different technologies and client requirements.
        Currently, I am working at BeeWeb as a backend developer for approximately 8 months. In this role, I primarily work with Node.js, GraphQL, MySQL, NestJS, and Typescript. I contribute to developing scalable and efficient backend solutions, implementing GraphQL APIs, and managing database operations.
        Throughout my career, I have gained strong expertise in backend development, database management, API integration, and working with various technologies and frameworks. I am passionate about leveraging my skills and knowledge to deliver high-quality solutions and contribute to the success of projects and teams.
      </motion.p>

      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, 'about');
