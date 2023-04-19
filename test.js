i=0

while(i<100){
    var a =random(1,3)
console.log(a);
}

// var test = {};
 
// /** 去空格符 */ 
// myUtils.myTrim = function(x) {
//     return x.replace(/\s+/g,'');
// }
 
// /** 发送群聊名称 */
// myUtils.isEmpty = function(txt){
//     if(txt==""||txt==null||txt==undefined){
//        return true;
//     }else{
//         return false;
//     }
// }
 
// module.exports = test;


// "ui";
// function 主脚本(){
//   toast("启动成功")
// }
// ui.layout(
//     <vertical>
//         <appbar>
//             <toolbar title="悬浮窗权限无障碍服务"/>
//         </appbar>
//         <horizontal>
//             <Switch id="无障碍服务" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
//          </horizontal>
//         <button id="启动" text="开始运行"/>
//     </vertical>
// );
// ui.无障碍服务.on("check", function(checked) {
//     // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
//     if (checked && auto.service == null) {
//         // app.startActivity({
//         //     //action: "android.settings.ACCESSIBILITY_SETTINGS"
//         // });
//     }
//     if (!checked && auto.service != null) {
//         auto.service.disableSelf();
//     }
// });



// "ui";
// importClass(android.view.View);
// var scriptName = 'xx全自动接单'
// var version = '1.8.9'
// var themeColor = '#4EBFDD'
// var scriptTitle = scriptName+' v'+version
// var APPVersion = 'xx陪玩 3.2.6'
// password = '9999'


// var ScriptUIAllStr = ScriptUI.toString()
// var ScriptUIStr = ScriptUIAllStr.slice(ScriptUIAllStr.indexOf('{'),ScriptUIAllStr.lastIndexOf('}')).slice(1,-2).replace(/项目标题/g,scriptTitle).replace(/#4EBFDD/g,themeColor)
// configIDArr = ScriptUIStr.match(/ id( )?=( )?["|'].*?["|']/g).map(item => item.replace(/ id( )?=( )?["|']|"|'/g,''))
// ui.statusBarColor(themeColor);
// ui.layout(ScriptUIStr);

// function ScriptUI(){
//     <vertical>
//         <appbar>
//             <toolbar bg="#4EBFDD" layout_height="70" margin="-2" id="toolbar" title="项目标题" />
//         </appbar>
//         <ScrollView>
//             <vertical marginTop="5">
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" h="auto">
//                         <linear>
//                             <Switch margin="12 0" layout_weight="1"  id="autoService"   text="无障碍服务"   textSize="15sp" checked="{{auto.service != null}}" />
//                             <Switch margin="12 0" layout_weight="1"  id="floatyService" text="悬浮窗权限"   textSize="15sp" checked="false" />
//                         </linear>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <text id="info" text="QQ号：1906507927" layout_gravity="center"  textColor="red" w="auto" textStyle="bold" />
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" h="auto">
//                         <linear>
//                             <text text="注册码:"   textColor="black" w="auto" textStyle="bold" />
//                             <input id = "输入框_注册码"  color="#666666" paddingLeft="5" w="*"/>
//                         </linear>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" h="auto">
//                         <text text="功能选择:"  marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
//                         <radiogroup orientation="horizontal" >
//                             <checkbox id="选择框_是否发现boss" text="发现boss"  textColor="black" />
//                             <checkbox id="选择框_是否浏览陪玩" text="浏览陪玩"  textColor="black" />
//                         </radiogroup>
//                         <linear>
//                             <checkbox id="选择框_是否私信访客" text="监听新访客"  textColor="black" checked='true'/>
//                             <checkbox id="选择框_是否监听抢单" text="监听抢单"  textColor="black" checked='true'/>
//                         </linear>

//                         <text text="全局设置:"  marginLeft="5" w="auto" textStyle="bold" textColor='black'/>
//                         <checkbox id="选择框_是否添加符号" text="话术添加随机符号"  textColor="black" checked='true'/>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <button id="startScript" h="auto" text="开 始 运 行" textSize="17"  textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" marginBottom="2" h="auto">
//                         <text text="[发现boss设置]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
//                         <horizontal>
//                             <text text="私信次数:"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_私信次数" text="0" color="#666666" w="*"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="私信boss间隔(秒):"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_私信boss间隔" text="2" color="#666666" w="*"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="进入发现boss页面等待时间(秒):"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_进入发现boss页面等待时间" text="1" color="#666666" w="*"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="话术:"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_boss话术" text="你好#hello#在嘛" color="#666666" w="*"/>
//                         </horizontal>
//                         <text text="多条用#分割,随机选择一条发送" color="#D2B48C"  textStyle="bold" textSize="12sp"/>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" marginBottom="2" h="auto">
//                         <text text="[私信访客设置]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
//                         <horizontal>
//                             <text text="话术:"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_visitor话术" text="你好#hello#在嘛" color="#666666" w="*"/>
//                         </horizontal>
//                         <text text="多条用#分割,随机选择一条发送" color="#D2B48C"  textStyle="bold" textSize="12sp"/>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" marginBottom="2" h="auto">
//                         <text text="[抢单设置]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
//                         <horizontal>
//                             <text text="每次抢单概率(%):"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_每次抢单概率" text="30" color="#666666" w="*"/>
//                         </horizontal>
//                         <text text="(此功能概率根据个人要求设置，封号与本脚本无关)" color="#D2B48C"  textStyle="bold" textSize="12sp"/>
//                         <horizontal>
//                             <text text="抢单总次数:"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_抢单总次数" text="0" color="#666666" w="*"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="抢单延时(毫秒):"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_抢单延时小" text="600" color="#666666" w="80"/>
//                             <text text=" - "  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_抢单延时大" text="2000" color="#666666" w="80"/>
//                         </horizontal>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//                 <card id="showHide_func4" w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
//                     <vertical padding="18 8" marginBottom="2" h="auto">
//                         <text text="[浏览设置]" color="#FFA500"  textStyle="bold" textSize="15sp"/>
//                         <radiogroup orientation="horizontal" >
//                             <text text="性别选择:"  w="auto" textStyle="bold" />
//                             <radio id="单选框_是否不限" text="不限" checked="true" marginLeft='5'/>
//                             <radio id="单选框_是否男" text="男" marginLeft='5'/>
//                             <radio id="单选框_是否女" text="女" marginLeft='5'/>
//                         </radiogroup>
//                         <horizontal>
//                             <text text="浏览轮数:"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_浏览轮数" text="10" color="#666666" w="*"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="浏览前多少个:"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_浏览前多少个" text="20" color="#666666" w="*"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="查看停留时间(秒):"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_查看停留时间小" text="1" color="#666666" w="80"/>
//                             <text text=" - "  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_查看停留时间大" text="2" color="#666666" w="80"/>
//                         </horizontal>
//                         <horizontal>
//                             <text text="每轮间隔(秒):"  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_每轮间隔小" text="10" color="#666666" w="80"/>
//                             <text text=" - "  textStyle="bold" textSize="15sp"/>
//                             <input id="输入框_每轮间隔大" text="20" color="#666666" w="80"/>
//                         </horizontal>
//                     </vertical>
//                     <View bg="#4EBFDD" h="*" w="5" />
//                 </card>
//             </vertical>
//         </ScrollView>
//     </vertical>
// }