var finish = 0
var storage = storages.create("text");
var time= storage.get("time").toString()
var content1= storage.get("content1").toString()
var content2= storage.get("content2").toString()
content2 =content2.split("#");

//主函数
function main1() {
    var sh = device.height
    var sw = device.width
    console.show()
    console.log("屏幕分辨率为%s * %s", sw, sh)
    var d1 = new Date().getTime();
    main()
    while (finish != 200) {
        xuhuan();
        sleep(10000)
        var d2 = new Date().getTime();
        if (d2 - d1 >= time *1000)  {
            finish == 200
        }
    }
    console.log("运行结束,共耗时" + (parseInt(d2 - d1)) / 1000 + "秒");
    home();
    console.hide()
    recents();sleep(9000)
    click(600,1100)
}

function main() {
    auto.waitFor();
    delay(2);
}

//定义延时函数
function delay(seconds) {
    var random1 = Math.floor(Math.random() * 5) + 1;
    log('休息' + random1.toString() + '秒')
    sleep(random1 * seconds * 1000);//sleep函数参数单位为毫秒所以乘1000
}

//随机行动
function xuhuan() {
    start_app();
    index = random(1,5);
    log(index)
    h_move();
    if (index == 2) {
        lick_click();
        sleep(1000)
        log("点赞完成");
    }
    else if (index == 4) {
        follow_with_interest();
        sleep(1000)
        log("关注完成");
    }
    else if (index == 3) {
        reply();
        sleep(1000)
        log("评论完成")
    } else if (index == 5) {
        zhibo()
        sleep(1000)
    }
}

//启动app
function start_app() {
    console.log("启动快手");
    launch("com.smile.gifmaker")
    sleep(3000);
}

//滑动视频
function h_move() {
    var sh = device.height
    var sw = device.width
    swipe(sw / 2, sh / 2, sw / 2, sh / 3, 10);
    delay(1);
    log("滑动")
}

//点赞
function lick_click() {
    let user_avatar = className("android.widget.FrameLayout").drawingOrder(5).visibleToUser().clickable(true).findOnce()
    if (user_avatar) {
        log('点赞')
        user_avatar.click()
    }
    delay(2);
}
//点加号关注
function follow_with_interest() {
    let guanggao = className("android.widget.TextView").indexInParent(2).visibleToUser().findOnce()
    if (guanggao) {
        log('跳过广告')
    } else {
        let user_jiahao = className("android.widget.ImageView").drawingOrder(2).clickable(true).visibleToUser().findOnce()
        if (user_jiahao) {
            log('关注')
            let user_jiahao_pos = user_jiahao.bounds()
            click(user_jiahao_pos.centerX(), user_jiahao_pos.centerY())
        } else {
            log('没找到关注')
        }
    }
}

//评论
function reply() {
    let guanggao = className("android.widget.TextView").indexInParent(2).visibleToUser().findOnce()
    if (guanggao) {
        log('跳过广告')
    } else {
        let pinglun = className("android.widget.FrameLayout").drawingOrder(6).clickable(true).visibleToUser().findOnce()
        if (pinglun) {
            log('评论找到')
            let pinglun_pos = pinglun.bounds()
            click(pinglun_pos.centerX(), pinglun_pos.centerY())
            delay(1)
            let fapinglun = className("android.widget.TextView").text("发条有爱评论~").clickable(true).visibleToUser().findOnce()
            if (fapinglun) {
                log('评论找到')
                fapinglun.click()
                delay(1)
                var i = random(0,content2.length-1)
                setText(content2[i])
                delay(1)
                let fashong = className("android.widget.RelativeLayout").clickable(true).drawingOrder(4).visibleToUser().findOnce()
                if (fashong) {
                    log('评论找到')
                    let fashong_pos = fashong.bounds()
                    click(fashong_pos.centerX(), fashong_pos.centerY())
                    delay(1)
                    back()
                } else {
                    log('评论没找到')
                }
            } else {
                log('评论没找到')
            }
        } else {
            log('评论没找到')
        }
    }
}

//直播间
function zhibo() {
    var sh = device.height
    var sw = device.width
    index1 = random(1, 2);
    let zhibozhong = className("android.widget.ImageView").drawingOrder(3).visibleToUser().findOnce()
    if (zhibozhong) {
        log('进入直播间')
        zhibozhong.click()
        delay(2)
        if (index1 == 1) {
            let pingluan = className("android.widget.TextView").text("说点什么...").visibleToUser().findOnce()
            if (pingluan) {
                log('打开评论')
                let pingluan_pos = pingluan.bounds()
                click(pingluan_pos.centerX(), pingluan_pos.centerY())
                delay(1)
                var i = random(0,content2.length-1)
                setText(content2[i])
                delay(1)
                let fashong = className("android.widget.Button").clickable(true).desc("发送").visibleToUser().findOnce()
                if (fashong) {
                    log('发送')
                    fashong.click()
                    delay(1)
                    back()
                }
            }
            let pingluan1 = className("android.widget.TextView").drawingOrder(1).text("聊一聊").visibleToUser().findOnce()
            if (pingluan1) {
                log('打开评论')
                let pingluan1_pos = pingluan1.bounds()
                click(pingluan1_pos.centerX(), pingluan1_pos.centerY())
                delay(1)
                var i = random(0,content2.length-1)
                setText(content2[i])
                delay(1)
                let fashong = className("android.widget.Button").clickable(true).desc("发送").visibleToUser().findOnce()
                if (fashong) {
                    log('发送')
                    fashong.click()
                    delay(1)
                    back()
                }
            }
        }
        if (index1 == 2) {
            click(sw / 2, sh / 2)
            sleep(50)
            click(sw / 2, sh / 2)
            delay(2)
            log('点击')
            back()
        }
    }
}

main1() 