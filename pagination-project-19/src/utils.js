


const paginate = (followers) => {
    

  const itemsPerPage = 10

  const numberOfPages = Math.ceil(followers.length / 10)
  
  const newFollowers = Array.from(  { length: numberOfPages } , (_, index) => {
  
    const start = index * 10
    
    return followers.slice(start, start + 10)

  })

  let arc = Array.from( {length:10} , (index)=>{
    return
  } )
      
  console.log(arc);

    return newFollowers
    

}



export default paginate
