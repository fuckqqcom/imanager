import JsonP from "jsonp"
export default class Axios{
    static jsonp(options){
        return new Promise( (resolve,reject)=>{
            JsonP(options.url,{
                param:"callback"
            },function(err,resp){
                if (resp.status === "success"){
                    resolve(resp)
                }else{
                    reject(resp.message)
                }
            })
        })
    }
    
}