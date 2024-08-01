import React, { useRef, useState } from 'react';
import Button from "../../component/Button";
import PersonalInfo from "../../component/PersonalInfo";
import SkillCard from "../../component/SkillsCard";

import { Swiper, SwiperSlide } from 'swiper/react';     //Swiprer 
import { Navigation, Pagination } from 'swiper/modules';    //navigation
import 'swiper/css';        //Swiprer 
import 'swiper/css/navigation';     //navigation CSS

// Button Start 
const Buttons = [
    {
        buttonText: 'My Work',
        style: 'text-white focus:bg-blue focus:text-white'
    },
    {
        buttonText: 'My Skill',
        style: 'bg-white text-black hover:!bg-blue hover:text-white focus:bg-blue focus:text-white duration-200'
    },
]
// Button Start 

// Skills Card Start 
const skillsCards = [
    {
        skillCardImg: ['web-design.svg'],
        skillCardTitle: 'Web Mockup Design',
        skillTitle: 'ankur'
    },
    {
        skillCardImg: ['m-design.svg'],
        skillCardTitle: 'Web Mockup Design'
    },
    {
        skillCardImg: ['html-convert.svg'],
        skillCardTitle: 'Web Mockup Design'
    },
    {
        skillCardImg: ['responsive.svg'],
        skillCardTitle: 'Web Mockup Design'
    },
]
// Skills Card END  

// Technology Skills Card Start 
const techSkillCard = [
    {
        techSkillImg: ['html.svg'],
        techSkilltitle: 'HTML'
    },
    {
        techSkillImg: ['css.svg'],
        techSkilltitle: 'CSS'
    },
    {
        techSkillImg: ['bootstrap.svg'],
        techSkilltitle: 'Bootstrap'
    },
    {
        techSkillImg: ['sass.svg'],
        techSkilltitle: 'SASS'
    },
    {
        techSkillImg: ['photoshop.svg'],
        techSkilltitle: 'Photoshop'
    },
    {
        techSkillImg: ['xd.svg'],
        techSkilltitle: 'Adobe XD'
    },
    {
        techSkillImg: ['css.svg'],
        techSkilltitle: 'CSS'
    },
]
// Technology Skills Card END  

const Home = () => {
    return (
        <main className="">
            {/* Banner Start  */}
            <section className="pt-32 px-8 md:px-0 bg-gray">
                <div className="grid md:grid-cols-2 items-center gap-6 max-w-[1330px] mx-auto">
                    <div>
                        <h6 className="text-[22px] font-medium">Hello I'm</h6>
                        <h1 className="text-[70px] leading-[84px] font-bold my-1">Pramod Ganesh Dalal</h1>
                        <h5 className="text-2xl font-medium mb-12">UI Designer</h5>
                        <div className="flex gap-4">
                            {
                                Buttons.map((btnItem, index) => (
                                    <Button key={index}
                                        btnText={btnItem.buttonText}
                                        btnStyle={btnItem.style}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="md:mr-14 relative z-20">
                        <img className="animate-spin-slow absolute -z-10 -top-14 hidden md:block" src="./images/circle.svg" alt="circle image" />
                        <img src="./images/pramod.png" alt="banner image" />
                    </div>
                </div>
            </section>
            {/* Banner END   */}

            {/* Skills Card Start  */}
            <div className="max-w-[1330px] mx-auto grid xl:grid-cols-4 md:grid-cols-2 gap-5 xl:gap-0 p-6 bg-white shadow-shadowPrimary relative z-50 rounded-md -mt-12">
                {
                    skillsCards.map((skillsItem, index) => (
                        <SkillCard
                            key={index}
                            skillStyle="flex items-center gap-4 border-0 md:border-r md:border-borderGray mr-5 xl:last:border-none"
                            skillImages={
                                skillsItem.skillCardImg.map((skillsImage) => `./images/${skillsImage}`)
                            }
                            skillTitle={skillsItem.skillCardTitle}
                        />
                    ))
                }
            </div>
            {/* Skills Card Start  */}

            {/* Personal Info Start  */}
            <section className="mt-[100px] max-w-[1330px] mx-auto px-4 sm:px-8 md:px-0">
                <PersonalInfo
                    infoImg="./images/abt.png"
                    infoName="Ankur Srivastava"
                    infoEmail="ankursrv1091@gmail.com"
                    infoAddress="H.No.13 Yashoda nagar, kanpur nagar , Uttar Pradesh"
                    infoContact="7071779807"
                    infoSociLink="live:.cid.63e89773ac485e7f"
                />
            </section>
            {/* Personal Info END  */}

            {/* Technology Skill Start  */}
            <section className="mt-[100px] max-w-[1330px] mx-auto px-4 sm:px-8 md:px-0">
                <div className="flex flex-col items-center">
                    <small className="font-medium text-lg text-blue">Technology Stack</small>
                    <h2 className="text-[32px] font-medium">My Skills</h2>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    loop={true}
                    autoplay={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper !py-12 !px-8 md:!px-12"
                >
                    {
                        techSkillCard.map((techCardItem, index) => (
                            <SwiperSlide key={index} className=''>
                                <SkillCard
                                    skillStyle="flex flex-col items-center justify-center gap-4 shadow-shadowTertary p-6 rounded-md"
                                    styleImg="h-16 object-cover"
                                    skillImages={
                                        techCardItem.techSkillImg.map((techCardImg) => `./images/${techCardImg}`)
                                    }

                                    skillTitle={techCardItem.techSkilltitle}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </section>
            {/* Technology Skill END  */}

            {/* Work Experience Start  */}
            <section className="mt-[100px] max-w-[1330px] mx-auto px-4 sm:px-8 md:px-0">
                <div className="flex flex-col items-center">
                    <small className="font-medium text-lg text-blue">Our Journey</small>
                    <h2 className="text-[32px] font-medium">Work Experience</h2>
                </div>
            </section>
            {/* Work Experience END  */}
        </main>
    )
}
export default Home