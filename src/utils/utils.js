export default {
    formateDate(time){
        if (!time) return ""
        let date = new Date(time)
        return date.getFullYear() + "-"+subZero(( date.getMonth() + 1)) +"-" + subZero(date.getDate()) + " "+ subZero(date.getHours()) + ":" 
        + subZero(date.getMinutes()) + ":" + subZero(date.getSeconds())
    },

   
}

var subZero = (data) => {
    if ( data.toString().length >= 2){
        return  data
    }else{
        return "0" + data
    }

}