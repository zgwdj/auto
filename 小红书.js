auto()
var finish = 0  
var numbe = 0  
var numbe1 = 0 
var numbe2 = 0 
var numbe3 = 0 
console.show()
var aTmer = new Date().getTime() 
var storage = storages.create("text");
var time= storage.get("time").toString()
var content1= storage.get("content1").toString()
var content2= storage.get("content2").toString()
content2 =content2.split("#"); 

//重新打开应用r
appRun = function(){
    launch("com.xingin.xhs");sleep(3000)
    var eTmer = new Date().getTime() 
    timer = eTmer - aTmer
    timer = timer / 1000
    if (time >0){
        if ( eTmer - aTmer >time * 1000){
            log("脚本结束!用时"+timer+"秒");
            find
            finish = 200
        }
    }
} 

//滑动
slide = function(){
    auto();
    x=device.width;
    y=device.height;
    x1 = x/2.3;y1 = y/1.3
    x2 = x/1.3;y2 = y/2.3
    swipe(x1,y1,x2,y2,2000);
}

 //搜索
 searchs = function(){
    var open = className("android.widget.TextView").text("立即打开").findOnce()
    if(open){
        log("点击立即打开")
        open.parent().click();
    }

    var open1 = className("android.widget.TextView").text("开心收下").findOnce()
    if(open1){
        log("点击开心收下")
        open1.parent().click();
    }

    var search1 = className("android.widget.ImageView").clickable(true).depth(4).findOnce()
    if(search1){
        log("点击进入搜索")
        search1.click();sleep(3000)
    }

    var search2 = className("android.widget.EditText").clickable(true).depth(2).findOnce()
    var search3 = className("android.widget.TextView").text("搜索").depth(1).findOnce()
    if(search3){
        if(search2){
            log("输入搜索内容: "+content1)
            search2.click();sleep(3000)
            setText(content1);sleep(3000)
            search3.click();sleep(3000)
        }
    }

    var screen = className("android.widget.TextView").text("筛选").depth(3).findOnce()
    if( screen){
        log("点击筛选")
        click(screen.bounds().centerX(),screen.bounds().centerY());sleep(3000)
    }

    var screen1 = className("android.widget.TextView").text("完成").findOnce()
    var screen2 = className("android.widget.TextView").text("图文").findOnce()
    if( screen1){
        if(screen2){
            log("选择图文")
            screen2.click();sleep(3000)
            screen1.click();sleep(3000)
        }
    }
 }

 
works = function(){

    var work2 = className("android.view.View").id("com.xingin.xhs:id/dgj").findOnce()
        if(work2){
            numbe = numbe +1
            log("随机刷视频: "+numbe+" 次");work2.click()
            sleep(3000);slide()
        }

    var slide1 = className("android.widget.TextView").text("关注").findOnce()
    var likes = className("android.widget.LinearLayout").clickable(true).indexInParent(1).drawingOrder(4).findOnce()
    var collect = className("android.widget.LinearLayout").clickable(true).indexInParent(2).drawingOrder(5).findOnce()
    var coment = className("android.widget.TextView").text("说点什么...").findOnce()
    if(slide1){
        slide();var round =random(0,3)
        //点赞
        if(round != 1){
            if(likes){
            numbe1 = numbe1 +1
            log("点赞视频："+ numbe1+" 次");sleep(3000)
            likes.click();sleep(3000)
            }
        }else{
            console.log("随机到1,不进行点赞");
        }
        //收藏
        if(round != 2){
            if(collect){
                numbe2 = numbe2 +1
                log("收藏视频: "+numbe2+" 次");sleep(3000)
                collect.click();sleep(3000)
            }
        }else{
            console.log("随机到2,不进行收藏");
        }
        //滑动
        if(round != 3){
            if(coment){
                numbe3 = numbe3 +1
                log("评论视频："+numbe3+" 次");sleep(3000)
                coment.click();sleep(3000)
            }
        }else{
            console.log("随机到3,不进行评论");
            sleep(3000);back()
            sleep(3000);slide()
            sleep(3000);slide()
        }
    }
            
    var send1 = className("android.widget.EditText").indexInParent(1).drawingOrder(4).findOnce()
    var send2 = className("android.widget.TextView").text("发送").findOnce()
    if(send1){
        if(send2){
            var i = random(0,content2.length-1)
            log("输入评论:"+content2[i]);sleep(3000)
            setText(content2[i]);sleep(2000) 
            send2.click();sleep(3000)
            back();sleep(2000)
            slide();sleep(1000)
            slide();sleep(1000)
        }
    } 
}
    
run = function(){
    while (finish != 200 ) {
        searchs()
        works()
        appRun()
    }
}
run()