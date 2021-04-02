##cordova-plugin-ezcPlugin

这个插件是做什么的？
当你想问这个问题的时候，你就记住！你别用就对了！

Demo


###打开推送设置页demo

cordova.plugins.ezcPlugin.openNoticeSetting(
    function(data){
        alert(data)
})

###检测是否允许了APP推送

cordova.plugins.ezcPlugin.IfcanPush(
    function(data){
        alert(data)
})