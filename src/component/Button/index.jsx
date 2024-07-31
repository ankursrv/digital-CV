
const Button =( {btnText, btnStyle} )=>{
    return (
        <button className={`bg-blue py-2.5 px-[30px] font-normal text-base rounded-md border border-blue duration-200 hover:bg-white hover:text-black ${btnStyle}`}>{btnText}</button>
    )
}
export default Button 