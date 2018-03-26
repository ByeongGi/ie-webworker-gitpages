//  브라우저 버전 체크
if (window.Worker){  // 브라우져에서 워커를 지원 여부 확인
    
    var browserInfo = Util.browserCheck();

    if ( browserInfo == 'ie10' ){
        alert(browserInfo);
        
        // Util.initWebWoker();           // 이 함수만 IE 10.0.9200.17492 에서 돌아감 
        Util.initWorkerFallback();     // IE 10.0.9200.17492 에서 URL.createObjectURL=> SCRIPT5022: SecurityError 에러가 발생하여 사용 불가  
        // Util.initWorkerFallback2();   // IE 10.0.9200.17492 안됨  URL.createObjectURL=> SCRIPT5022: SecurityError 에러가 발생하여 사용 불가  
    } else if (browserInfo == 'ie11') {
        alert(browserInfo); 
        // Util.initWebWoker();          //  IE10 11.0.9600.188860 에서 돌아감 
        Util.initWorkerFallback();    //  IE 11 동작 여부 확인함 
        // Util.initWorkerFallback2();   //  IE 11 동작 여부 확인함 
    } else {
        // Util.initWebWoker();          //  크롬,엣지 동작 확인
        Util.initWorkerFallback();   
        // Util.initWorkerFallback2();   
    }

} 

