export default class MyCookies{
    static setCookie(cname,cvalue,exdays,path){
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 1000));
        var expires = "expires =" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";" + path;
    }
    static getCookie(cname){
        var name = cname + "=";
        var cookieArray = document.cookie.split(';');
        for(let i = 0; i < cookieArray.length;i++){
            let str = cookieArray[i].trim();
            if(str.indexOf(name) === 0){
                return str.substring(name.length,str.length);
            }
        }
        return "";
    }
};