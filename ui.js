"ui";

var xhs = require('小红书.js')
ui.layout(
    <vertical>
       <appbar>
            <toolbar bg="#4EBFDD" layout_height="70" margin="-2" id="toolbar" title="自动刷视频" />
        </appbar>
        <ScrollView>
             <vertical marginTop="5">
               <text id="info" text="本软件仅供学习参考，不得用作商业行为" layout_gravity="center"  textColor="red" w="auto" textStyle="bold" />
               
                //无障碍，悬浮窗设置
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <linear>
                                <Switch margin="12 0" layout_weight="1"  id="autoService"   text="无障碍服务"   textSize="15sp" checked="{{auto.service != null}}" />
                                <Switch margin="12 0" layout_weight="1"  id="floatyService" text="悬浮窗权限"   textSize="15sp" checked="false" />
                            </linear>
                        </vertical>
                        <View bg="#4EBFDD" h="*" w="5" />
                </card>

                //注册码
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                        <vertical padding="18 8" h="auto">
                            <linear>
                                <text text="注册码:"   textColor="black" w="auto" textStyle="bold" />
                                <input id = "输入框_注册码"  color="#666666" paddingLeft="5" w="*"/>
                            </linear>
                        </vertical>
                        <View bg="#4EBFDD" h="*" w="5" />
                </card>

                //脚本选择
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" h="auto">
                        <text text="选择脚本:"  marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
                        <radiogroup orientation="horizontal" >
                            <checkbox id="抖音" text="抖音   "  textColor="black" />
                            <checkbox id="快手" text="快手"  textColor="black" />
                        </radiogroup>
                        <linear>
                            <checkbox id="小红书" text="小红书"  textColor="black" checked='true'/>
                            <checkbox id="123424" text="123424"  textColor="black" checked='true'/>
                        </linear>
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>

                //脚本运行时间
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" marginBottom="2" h="auto">
                        <text text="[设置脚本运行时间]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
                        <horizontal>
                            <text text="脚本运行时间:  "  textStyle="bold" textSize="15sp"/>
                            <input id="time" text="300" color="#666666" w="60"/>
                            <text text="秒"  textStyle="bold" textSize="15sp"/>
                        </horizontal>
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>

                //话术
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <vertical padding="18 8" marginBottom="2" h="auto">
                        <text text="[添加话术]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
                        <horizontal>
                            <text text="搜索内容:  "  textStyle="bold" textSize="15sp"/>
                            <input id="name" text="装搭" color="#666666" w="60"/>
                        </horizontal>
                        <horizontal>
                            <text text="话术:"  textStyle="bold" textSize="15sp"/>
                            <input id="comment" text="然后呢，所以呢，你想表达什么？#爱过，保大 ，写你名，你好看，救我妈#是什么风把你吹来了,是timi赢了吗?" color="#666666" w="*"/>
                        </horizontal>
                        <text text=" 多条用#分割,随机选择一条发送" color="#D2B48C"  textStyle="bold" textSize="12sp"/>
                    </vertical>
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>

                //运行按钮
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <button id="runs" h="auto" text="开 始 运 行" textSize="17"  textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <button id="stop" h="auto" text="关 闭 脚 本" textSize="17"  textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
                   <View bg="#4EBFDD" h="*" w="5" />
                </card>
                <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                    <button id="log" h="auto" text="运 行 日 志" textSize="17"  textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
                    <View bg="#4EBFDD" h="*" w="5" />
                </card>
                </vertical>
        </ScrollView>
    </vertical>
);

// 屏蔽音量键调节声音
events.setKeyInterceptionEnabled("volume_up", true);

//启用按键监听
events.observeKey();

//监听音量键按下
events.onKeyDown("volume_up", () => {
    toastLog('按音量键停止');
    exit();
});

// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
ui.autoService.on("check", function(checked) {
    if(checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if(!checked && auto.service != null){
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    ui.autoService.checked = auto.service != null;
});

//程序开始运行之前判断无障碍服务
if (auto.service == null) {
    toastLog("请先开启无障碍服务！")
};

ui.runs.click(function(){
    var time = ui.time.getText();
    var name = ui.name.getText();
    var comment = ui.comment.getText();
    console.log(time);
    console.log(name);
    console.log(comment);
    engines.myEngine().forceStop();
    //threads.start(xhs.main())
});

ui.stop.click(function(){
    console.log("脚本终止");
    toast("脚本终止")
    engines.stopAll()
});

ui.log.click(function(){
    toast("打开日志")
     app.startActivity("console");
});