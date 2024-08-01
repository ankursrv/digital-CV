import { MdOutlineCalendarMonth } from "react-icons/md";

const experienceCard = [
    {
        experienceDate: "March 2021-Present",
        experienceJobTitle: "Web Designer-",
        experienceCompany: "QualitasIT Pvt Ltd",
        experiencePlace: "Maharashtra, Pune"
    },
    {
        experienceDate: "February 2020-2021",
        experienceJobTitle: "Web Designer-",
        experienceCompany: "Rwaltz Software Pvt Ltd",
        experiencePlace: "Maharashtra, Nashik"
    },
    {
        experienceDate: "January 2017-2020",
        experienceJobTitle: "HTML Developer-",
        experienceCompany: "Mindtricks Software",
        experiencePlace: "Maharashtra, Nashik"
    }
]

const WorkExperienceCard = ({ experienceDate, experienceTitle, experiencePlace }) => {
    return (
        <>
            {
                experienceCard.map((experienceItems, index) => (
                    <div key={index} className="shadow-shadowFouth p-6 rounded-md">
                        <div className="flex items-center gap-2">
                            <MdOutlineCalendarMonth className="text-blue text-lg" />
                            <label className="text-graySecondary font-normal text-base">
                                {experienceItems.experienceDate}
                            </label>
                        </div>
                        <h4 className="text-lg font-medium mt-2 mb-1">
                            <span className="text-blue">{experienceItems.experienceJobTitle}</span>
                            {experienceItems.experienceCompany}
                        </h4>
                        <h5 className="text-graySecondary font-normal text-base">
                            {experienceItems.experiencePlace}
                        </h5>
                    </div>
                ))
            }
        </>
    )
}
export default WorkExperienceCard