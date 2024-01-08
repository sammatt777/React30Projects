


export let HandleCartAction=(obj)=>{
return{

type:'addtoCart',
detailsObj:obj

}

}


export let DataRender =()=>{

        return{
            type:'renderData',
        }

    }
