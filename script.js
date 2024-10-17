const displayContent=(content)=>{

    output.value+=content
}
const showoutput=()=>{

    try{
        output.value=eval(output.value)
    }

    catch{
        console.log("try block");
        
        output.value=""
        output.placeholder="invalid expression"
    }

    finally{
        console.log("finally block,task completed");
        
    }

//   output.value=eval(output.value)
}

clearAll=()=>{
    output.value=null
}

remove=()=>{
    output.value=output.value.slice(0,-1)
}