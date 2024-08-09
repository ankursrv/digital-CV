
const Button = ({ primary, secondary, onClick, btnValue, tertary, children }) => {
    return (
        <button
            onClick={onClick}
            value={btnValue}
            className={`py-2.5 px-[30px] font-normal text-base rounded-md border border-blue duration-200 
         ${primary && "bg-blue text-white hover:bg-white hover:text-blue"}
         ${secondary && "bg-white text-black hover:bg-blue hover:text-white"}
         ${tertary && ""} `}>
            {children}
        </button>
    )
}
export default Button 