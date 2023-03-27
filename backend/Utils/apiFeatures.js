
class ApiFeatures {

    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    // to show keyword on url
search() {
        const keyword=this.queryStr.keyword ?
        {

            title:{
                    $regex:this.queryStr.keyword,  // regex use to search all word maching to realated word
                    $options:"i" // use to convert capital letter to small letter 
            }
        }:{ };

      this.query= this.query.find({...keyword})
        return this;
    }

    filter(){
        const queryCopy={...this.queryStr};
        console.log(queryCopy)

        // removing some field of category
         const removeFields=["keyboard", "page","limit"];
         removeFields.forEach((key)=>delete queryCopy[key])

         let queryStr=JSON.stringify(queryCopy);
         queryStr=queryStr.replace(/\b(gt | gte | lt | lte)\b/g,key=>`$${key}`)
       
         this.query=this.query.find(JSON.parse(queryStr))
         console.log(queryStr)
         return this;
         
    }
    // pagination(perpage){
     
    //     const currentPage=Number(this.queryStr.page) || 1;

    //     const skip=perpage*(currentPage-1)

    //     this.query=this.query.limit(perpage).skip(skip);
        
    //     return this;
    // }
}

module.exports=ApiFeatures;