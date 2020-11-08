var td =document.getElementsByTagName("td");
var time;

    function randomNum(){
        return Math.round(Math.random() * 15);
    }

    function randomColor(){
        var str = "";
        for(var i=0;i<6;i++){//六位数的随机颜色值
            var num = randomNum();//十进制
            var res = num.toString(16);//转十六进制
            str += res;
        }
        return "#" + str;
    }

    /* 伪代码
if 第一个选中的格子==第二个选中的格子||第二个选中的格子==第三个选中的格子||第三个选中的格子==第一个选中的格子
(分情况)if 第一个选中的格子==第二个选中的格子
       do 第一个选中的格子=随机值
       else if第二个选中的格子==第三个选中的格子
       do 第二个选中的格子=随机值
       else if第二个选中的格子==第三个选中的格子
       do 第三个选中的格子=随机值
       else
       do 重新再随机三个值，直到满足三个随机值均不相等为止
else(三个随机值均不相等时，上3种随机颜色)
do 上随机色
    */

    function begin(i,j,k){
        var i,j,k;
        if(i==j||j==k|k==i){
            if(i==j){
                i = Math.floor(Math.random()*td.length);
            }else if(j==k){
                j = Math.floor(Math.random()*td.length);
            }else if(k==i){
                k = Math.floor(Math.random()*td.length);
            }
            begin(i,j,k)
        }
        /*随机3个格子出现3种随机颜色*/
        else{
        td.item(i).style.backgroundColor=randomColor();
        td.item(j).style.backgroundColor=randomColor();
        td.item(k).style.backgroundColor=randomColor();
        }
    }

    function run(){
        clearInterval(time);
        time=setInterval(function(){
            for(var x = 0; x < td.length; x++){
                td.item(x).style.backgroundColor = '';
            }
            var i = Math.floor(Math.random()*td.length);
            var j = Math.floor(Math.random()*td.length);
            var k = Math.floor(Math.random()*td.length);
            begin(i,j,k);

        },800);
    }

    function stop(){
        clearInterval(time);
        for(var i=0;i<td.length;i++){
            td.item(i).style.backgroundColor='';
        }
    }