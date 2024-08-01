import { useState } from "react";
import RoundedButton from "../RoundedButton";
const collectionData = [
    {
        work: "WebMobile",
        linkImg: './images/ambar.jpg',
    },

    {
        work: "WebDesign",
        linkImg: './images/bidnwin.jpg',
    },

    {
        work: "WebDesign",
        linkImg: './images/lotanchain.jpg',
    },

    {
        work: "WebMobile",
        linkImg: './images/lynkube.jpg',
    },

    {
        work: "WebMockup",
        linkImg: './images/rejoiz.jpg',
    },

    {
        work: "WebMockup",
        linkImg: './images/trainer.jpg',
    },
    {
        work: "WebDesign",
        linkImg: './images/we3.jpg',
    }
];

const navButton =[
    {
        value : "All",
        btnName: "All Work",
    },
    {
        value : "WebDesign",
        btnName: "Web Design",
    },
    {
        value : "WebMockup",
        btnName:"Web Mockup Design",
    },
    {
        value : "WebMobile",
        btnName:"Mobile App Design",
    }
]


const NavTab = () => {
    const [category, setCategory] = useState(collectionData);
    const [activeButton, setActiveButton] = useState('All');    //TaB button color change Active
    const handleBtns = (e) => {
        let word = e.target.value;

        setActiveButton(e.target.value);    //TaB button color change Active

        if (word === "All") {
            setCategory(collectionData)
        }
        else if (word === "WebDesign") {
            const filtered = collectionData.filter(item => item.work === "WebDesign");
            setCategory(filtered)
        }
        else if (word === "WebMockup") {
            const filtered = collectionData.filter(item => item.work === "WebMockup");
            setCategory(filtered)
        }
        else if (word === "WebMobile") {
            const filtered = collectionData.filter(item => item.work === "WebMobile");
            setCategory(filtered)
        }
    }
    return (
        <section>
            <div>
                <div className="flex gap-8 justify-center mb-[50px]">
                    {
                        navButton.map((btnItems, btnIndex)=>(
                            <RoundedButton 
                            key={btnIndex}
                            onClick={handleBtns}
                            btnValue={btnItems.value}
                            className={activeButton === btnItems.value ? 'bg-blue text-white' : 'bg-gray-200 text-black'}
                            btnText={btnItems.btnName}
                            />
                        ))
                    }
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        category.map((item, index) => (
                            <div key={index}>
                                <div>
                                    <img src={item.linkImg} alt="portfolio image" className="h-[350px] rounded-xl w-full shadow-shadowFouth" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default NavTab