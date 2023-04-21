"ui"
auto.waitFor();
console.show()
//全局变量
let width = device.width;
let height = device.height;
var startTime = new Date().getTime();

var storage = storages.create("text");
var time = storage.get("time");
var content2 = storage.get("content2").toString();
content2 = content2.split("#");

/**
 * Obtain phone resolution
 */
function nextVideo() {
    swipe(width / 2, height / 2, width / 2, height / 3, 10);
};

/**
 * give the thumbs-up 2.0
 */
function randomHeart1() {
    descContains("未点赞").find().click();
}


/**
 * follow with interest
 */
function randomFollow() {
    try {
        index = random(1, 5);
        if (index == 1) {
            let followMes = className("android.widget.Button").desc("关注").find();
            sleep(1000);
            if (followMes.length > 0) {
                followMes[followMes.length - 1].click();
            }
        }
    } catch (error) {
        console.error(error);
    }
}
//评论
function comment() {
    clickBtnInView(descContains("评论"));
    sleep(1000);

    var i = random(0, content2.length - 1)
    setText(content2[i]);
    sleep(1000);

    var num = text("发送").findOne().bounds();
    click(num.centerX(), num.centerY());

    sleep(2000);
    back();
}

//随机读取一条评论
function randomCommnet() {
    var arr = ["好好看", "这个真好看", "这个非常好看", "这个特别好看"]
    return arr[random(0, arr.length - 1)]
}
//点击视图
function clickBtnInView(handler) {
    var sum = handler.clickable().filter(function (w) {
        var y = w.bounds().centerY();
        // console.log(y);
        return y > 0 && y < device.height;
    }).find();
    if (sum.length > 0) {
        sum[0].click();
        sleep(100);
    }
}

//收藏
function collect() {
    descContains("未选中").find().click();
}

//直播间
function liveStreaming() {
    var sc = className("android.widget.FrameLayout").packageName("com.ss.android.ugc.aweme").checkable(false).clickable(true).depth(1).find();
    // console.log(sc);
    sleep(100);
    sc.click();

    sleep(2000);
    clickBtnRandom = random(1, 10);
    if (clickBtnRandom == 1) {
        clickBtnInView1(desc("说点什么..."));
        // console.log("说点");
        sleep(100);
        setText(liveStreamingCommnet());
        sleep(100);
        var num = text("发送").findOne().bounds();
        click(num.centerX(), num.centerY());
        // console.log(text("发送").find().length);
        // console.log("正在进行点赞");
        click(width / 3, height / 3);
        sleep(100)
        click(width / 3, height / 3);
    }

    sleep(10000);
    className("android.widget.Button").desc("关闭").find().click();

    // 防止误点主页
    className("android.widget.ImageView").desc("返回").find().click();
}

//直播间:随机读取一条评论
function liveStreamingCommnet() {
    var arr = ["好好看", "这个真好看", "这个非常好看", "这个特别好看"]
    return arr[random(0, arr.length - 1)]
}
//View
function clickBtnInView1(handler2) {
    var result = handler2.clickable().filter(function (w) {
        var x = w.bounds().centerX();
        // console.log(x);
        return x > 0 && x < device.height;
    }).find();
    if (result.length > 0) {
        result[0].click();
        sleep(1000);
    }
}

function randNum(minnum, maxnum) {
    return Math.floor(minnum + Math.random() * (maxnum - minnum));
};

function runApp(appName) {
    var launchResult = launchApp(appName);
    sleep(3000);
    if (!launchResult) {
        toast('你还没有安装' + appName);
        back();
        sleep(100);
    }
    randomHeartIndex = random(1, 10);
    console.log("点赞的索引是" + randomHeartIndex + "不点赞");
    sleep(5000)
    if (randomHeartIndex == 1) {
        console.log("点赞的索引是" + randomHeartIndex + "进行点赞");
        randomHeart1();
    }
    randomFollowIndex = random(1, 10);
    console.log("关注的索引是" + randomFollowIndex + "不关注");
    sleep(5000)
    if (randomHeartIndex == 2) {
        console.log("关注的索引是" + randomFollowIndex + "进行关注");
        randomFollow();
    }

    sleep(5000);
    commnetIndex = random(1, 10);
    console.log("评论的索引是" + commnetIndex + "不评论");
    if (commnetIndex == 3) {
        console.log("评论的索引是" + commnetIndex + "评论");
        comment();
    }
    sleep(5000)
    collectIndex = random(1, 10);
    console.log("收藏的索引是" + collectIndex + "不收藏");
    if (collectIndex == 4) {
        console.log("收藏的索引是" + collectIndex + "收藏");
        collect();
    }
    let delayTime = random(8000, 12000);
    sleep(delayTime);
    nextVideo();
};

run = function () {
    runApp("抖音");
};

while (true) {
    var thread = threads.start(function () {
        LiveCommnetIndex = random(1, 10);
        console.log("直播间的索引是" + LiveCommnetIndex + "不进直播间");
        if (LiveCommnetIndex == 1) {
            console.log("直播间的索引是" + LiveCommnetIndex + "进直播间");
            liveStreaming();
        }
    });
    thread.join();
    var threadStatus = thread.isAlive();
    if (threadStatus == false) {
        run();
    }
    var endTime = new Date().getTime();
    if (endTime - startTime >= time * 1000) {
        toast("脚本结束了")
        console.hide();
        engines.myEngine().forceStop();
        recents(); sleep(9000);
        click(600, 1100);
    }
};

function popUp() {
    // 有青少年模式弹框处理
    let teenager = text('青少年模式').findOnce()
    if (teenager) {
        text('我知道了').findOnce().click()
    }

    //检测到更新弹框处理
    let updateMessage = text('检测到更新').findOnce();
    if (updateMessage) {
        text('以后再说').findOnce().click();
    }

    //对方已关注你弹窗关闭
    let deleteMessage = text('对方关注了你').findOnce();
    if (deleteMessage) {
        desc('关闭').findOnce().click();
    }
    let findF = text("发现同学录朋友").findOnce();
    if (findF) {
        text('拒绝').findOnce().click();
    }
}

/**
 * 软件仅供学习参考,不得用作商业用途
 */