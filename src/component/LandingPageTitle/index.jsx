const LandingPageTitle = ({landingPageText, landingPageTitle}) => {
    return (
        <div className="flex flex-col items-center mb-6">
            <small className="font-medium text-lg text-blue">{landingPageText}</small>
            <h2 className="text-[32px] font-medium">{landingPageTitle}</h2>
        </div>
    )
}
export default LandingPageTitle