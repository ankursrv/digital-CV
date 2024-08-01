const RoundedButton =({btnText,onClick, btnValue,className})=>{
    return(
        <button onClick={onClick} value={btnValue} className={`px-[30px] py-[10px] rounded-full ${className}`}>
            {btnText}
        </button>
    )
}
export default RoundedButton