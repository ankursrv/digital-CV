import Button from "../Button"
const personInfo = [
    {
        perInfoTitle: 'Name:',
        perInfoText: 'Ankur Srivastava'
    },
    {
        perInfoTitle: 'Nationality:',
        perInfoText: 'Indian'
    },
    {
        perInfoTitle: 'Email:',
        perInfoText: 'ankursrv1091@gmail.com'
    },
    {
        perInfoTitle: 'Address:',
        perInfoText: 'Plot No. 7, Yashoda nagar, Kanpur nagar, Uttar Pradesh'
    },
    {
        perInfoTitle: 'Contact:',
        perInfoText: '7071779807'
    },
    {
        perInfoTitle: 'Skype:',
        perInfoText: 'live:.cid.63e89773ac485e7f'
    },
]

const PersonalInfo = ({ infoImg }) => {
    return (
        <div className="grid md:grid-cols-2 gap-12">
            <div>
                <img src={infoImg} alt="info image" />
            </div>
            <div className="md:px-3">
                <small className="font-medium text-lg text-blue">Personal Info</small>
                <h2 className="text-[32px] font-medium mb-4 md:mb-12">Know Me More</h2>
                <p className="text-base text-graySecondary mb-4">I’m with broad technical skill-set, very strong attention to detail, and 3 years of experience in front-end web development. Able to multitask and juggle multiple pressing projects simultaneously. On top of the latest trends and technologies. Ability to improvise, troubleshoot, take ownership, and most importantly learn new skills on the job.</p>
                <div className="grid sm:grid-cols-2 gap-2 text-graySecondary mb-10">
                    {
                        personInfo.map((infoItem, index) => (
                            <div key={index}>
                                <h5 className="font-medium text-base text-black">{infoItem.perInfoTitle}</h5>
                                <p className="leading-[26px]">{infoItem.perInfoText}</p>
                            </div>

                        ))
                    }

                </div>
                <Button
                    primary
                    type='button'
                >
                    Download CV
                </Button>

            </div>

        </div>
    )
}
export default PersonalInfo