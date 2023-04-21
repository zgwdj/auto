ui.runs.click(() => {
        var time = ui.time.getText().toString();
        var content1 = ui.content1.getText().toString();
        var content2 = ui.comment2.getText().toString();
        var storage = storages.create("text");
        console.log(time);
        var selectedScripts = [];
        if (ui.douyin.checked) {
            selectedScripts.push("抖音");
            if (time != '') {
                storage.put("time", time);
                if (content1 != '') {
                    storage.put("content1", content1);
                    if (content2 != '') {
                        storage.put("content2", content2);
                        engines.execScriptFile("123.js");
                    } else {
                        toast("请输入评论内容")
                    }
                } else {
                    toast("请输入搜索内容")
                }
            } else {
                toast("请输入脚本时间")
            }
        }
        if (ui.kuaishou.checked) {
            selectedScripts.push("快手");
            if (time != '') {
                storage.put("time", time);
                if (content1 != '') {
                    storage.put("content1", content1);
                    if (content2 != '') {
                        storage.put("content2", content2);
                        engines.execScriptFile("快手.js");
                    } else {
                        toast("请输入评论内容")
                    }
                } else {
                    toast("请输入搜索内容")
                }
            } else {
                toast("请输入脚本时间")
            }
        }
        if (ui.xiaohongshu.checked) {
            selectedScripts.push("小红书");
        }
        if (selectedScripts.length === 0) {
            toast("请至少选择一个脚本");
        } else {
            toast("您选择了" + selectedScripts.join("、"));
        }
    });