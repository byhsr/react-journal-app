 function ResetButton({handleReset, handleClick, className}){

    return(
        <>
        <button className={className} onClick={handleReset} >  Reset
        </button>
        <button className={className} onClick={handleClick}>Add</button>
            
        

        </> 
    )
}



export default ResetButton 