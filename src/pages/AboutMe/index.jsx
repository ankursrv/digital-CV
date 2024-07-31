import SkillCard from "../../component/SkillsCard"

const testImg =['responsive.svg', 'responsive.svg']

const AboutMe = ()=>{
    return(
        <h1>About Me
            <SkillCard 
            skillImages={
                
                testImg.map((itemImg,index)=>(
                    `./images/${itemImg}`
                ))
            }
            
            skillTitle="ReuseAble Component"
            />
        </h1>
    )
}
export default AboutMe