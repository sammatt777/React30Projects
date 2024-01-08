

export let SubmitNow =(inpValue)=>{

    return{
    type:'AddValues',
    payLoad:inpValue
 }
}

export let deleteHandle = (deleteIndex)=>{
    return{
        type:'delete',
        payLoad:deleteIndex
    }
}

export let editHandle =(inpValue,deleteIndex)=>{
    return{
        type:'edit',
      payLoad:inpValue,
    DeleteIndex:deleteIndex
    }
}

export let UpHandle =(index)=>{
    console.log(index,'inde');
    return{
        type:'up',
        upIndex:index
    }
    
};

export let downHandle =(index)=>{

return{
    type:'down',
    downIndex:index,
}

}

