const SkillCard = ({ skillImages, skillTitle, skillStyle, styleImg}) => {
    return (
        <div className={skillStyle}>
            <div>
                {
                    skillImages.map((img, index) => (
                        <img key={index} src={img} className={styleImg} />
                    ))
                }
            </div>
            <div className="font-medium text-lg">
                <h4>{skillTitle}</h4>
            </div>
        </div>
    )
}
export default SkillCard