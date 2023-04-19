var xhs ={}

auto()
var end =0
var aTmer = new Date().getTime() 
//console.log(aTmer);
round = 

appRun = function(){
    launch("com.xingin.xhs");sleep(3000)
    var eTmer = new Date().getTime() 
    a = eTmer - aTmer
    if ( eTmer - aTmer >6 * 60000){
        console.log("脚本结束");
         engines.stopAll()
   }
} 
//滑动
slide = function(){
    auto();
    x=device.width;
    y=device.height;
    swipe(x/2,y/2,x/2,y/4,2000);
}

 //搜索
 search = function(){
    var open = className("android.widget.TextView").text("立即打开").findOnce()
    if(open){
        toast("立即打开")
        open.parent().click();
    }

    var open1 = className("android.widget.TextView").text("开心收下").findOnce()
    if(open1){
        toast("开心收下")
        open1.parent().click();
    }

    var search1 = className("android.widget.ImageView").clickable(true).depth(4).findOnce()
    if(search1){
        toast("进入搜索")
        search1.click();sleep(3000)
    }

    var search2 = className("android.widget.EditText").clickable(true).depth(2).findOnce()
    var search3 = text("搜索").depth(1).findOnce()
    if(search3){
        if(search2){
            toast("输入搜索内容")
            search2.click();sleep(2000)
            setText("风景");sleep(2000)
            search3.click();sleep(2000)
        }
    }

    var screen = className("android.widget.TextView").text("筛选").depth(3).findOnce()
    if( screen){
        toast("筛选")
        click(screen.bounds().centerX(),screen.bounds().centerY());sleep(2000)
    }

    var screen1 = className("android.widget.TextView").text("完成").findOnce()
    var screen2 = className("android.widget.TextView").text("图文").findOnce()
    if( screen1){
        if(screen2){
            toast("图文")
            screen2.click();sleep(2000);
            screen1.click();sleep(3000)
        }
    }
 }

 
works = function(){

    var work1 = className("android.widget.TextView").text("综合").findOnce()
    var work2 = className("android.view.View").id("com.xingin.xhs:id/dgj").findOnce()
    if( work1){
        if(work2){
            toast("随机选视频");work2.click()
            sleep(3000);slide()
        }
    }  

    var slide1 = className("android.widget.TextView").text("关注").findOnce()
    var likes = className("android.widget.LinearLayout").clickable(true).indexInParent(1).drawingOrder(4).findOnce()
    var collect = className("android.widget.LinearLayout").clickable(true).indexInParent(2).drawingOrder(5).findOnce()
    var comment = className("android.widget.TextView").text("说点什么...").findOnce()
    if(slide1){
        slide()
        var round =random(1,3)
        if(round == 1){
            if(likes){
                toast("点赞,");sleep(1000)
                likes.click();sleep(3000)
            }
        }

        if(round == 2){
            if(collect){
                toast("收藏");sleep(1000)
                collect.click();sleep(3000)
            }
        }
        if(round == 3){
            if(comment){
                toast("评论");sleep(1000)
                comment.click();sleep(2000)
                setText("风景真好!a");sleep(3000)
            }
        }
    }

    var comment1 = className("android.widget.EditText").indexInParent(1).drawingOrder(4).findOnce()
    var comment2 = className("android.widget.TextView").text("发送").findOnce()
    if(comment1){
        if(comment2){
            toast("发送");sleep(1000)
            comment2.click();sleep(3000)
            back();sleep(2000)
            slide();sleep(1000)
            slide();sleep(1000)
        }else{
            toast("输入评论");sleep(1000)
            setText("爱过，保大 ，写你名");sleep(2000) 
        }
    } 
    
}

main = function(){
    while (end != 200 ) {
        appRun()
        search()
        works()
    }
}
main()
module.exports = xhs;