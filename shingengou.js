﻿const team = [
// 2133.10.30 mod_start
// scp-**-** による歴史改変対応
// '██','██',
'令','和',
// 2133.10.30 mod_end
'平','成',
'昭','和',
'大','正',
'明','治',
'慶','応',
'元','治',
'文','久',
'万','延',
'安','政',
'嘉','永',
'弘','化',
'天','保',
'文','政',
'文','化',
'享','和',
'寛','政',
'天','明',
'安','永',
'明','和',
'宝','暦',
'寛','延',
'延','享',
'寛','保',
'元','文',
'享','保',
'正','徳',
'宝','永',
'元','禄',
'貞','享',
'天','和',
'延','宝',
'寛','文',
'万','治',
'明','暦',
'承','応',
'慶','安',
'正','保',
'寛','永',
'元','和',
'慶','長',
'文','禄',
'天','正',
'元','亀',
'永','禄',
'弘','治',
'天','文',
'享','禄',
'大','永',
'永','正',
'文','亀',
'明','応',
'延','徳',
'長','享',
'文','明',
'応','仁',
'文','正',
'寛','正',
'長','禄',
'康','正',
'享','徳',
'宝','徳',
'文','安',
'嘉','吉',
'永','享',
'正','長',
'応','永',
'明','徳',
'康','応',
'嘉','慶',
'至','徳',
'永','徳',
'康','暦',
'永','和',
'応','安',
'貞','治',
'康','安',
'延','文',
'文','和',
'観','応',
'貞','和',
'康','永',
'暦','応',
'元','中',
'弘','和',
'天','授',
'文','中',
'建','徳',
'正','平',
'興','国',
'延','元',
'建','武',
'正','慶',
'元','弘',
'元','徳',
'嘉','暦',
'正','中',
'元','亨',
'元','応',
'文','保',
'正','和',
'応','長',
'延','慶',
'徳','治',
'嘉','元',
'乾','元',
'正','安',
'永','仁',
'正','応',
'弘','安',
'建','治',
'文','永',
'弘','長',
'文','応',
'正','元',
'正','嘉',
'康','元',
'建','長',
'宝','治',
'寛','元',
'仁','治',
'延','応',
'暦','仁',
'嘉','禎',
'文','暦',
'天','福',
'貞','永',
'寛','喜',
'安','貞',
'嘉','禄',
'元','仁',
'貞','応',
'承','久',
'建','保',
'建','暦',
'承','元',
'建','永',
'元','久',
'建','仁',
'正','治',
'建','久',
'文','治',
'元','暦',
'寿','永',
'養','和',
'治','承',
'安','元',
'承','安',
'嘉','応',
'仁','安',
'永','万',
'長','寛',
'応','保',
'永','暦',
'平','治',
'保','元',
'久','寿',
'仁','平',
'久','安',
'天','養',
'康','治',
'永','治',
'保','延',
'長','承',
'天','承',
'大','治',
'天','治',
'保','安',
'元','永',
'永','久',
'天','永',
'天','仁',
'嘉','承',
'長','治',
'康','和',
'承','徳',
'永','長',
'嘉','保',
'寛','治',
'応','徳',
'永','保',
'承','暦',
'承','保',
'延','久',
'治','暦',
'康','平',
'天','喜',
'永','承',
'寛','徳',
'長','久',
'長','暦',
'長','元',
'万','寿',
'治','安',
'寛','仁',
'長','和',
'寛','弘',
'長','保',
'長','徳',
'正','暦',
'永','祚',
'永','延',
'寛','和',
'永','観',
'天','元',
'貞','元',
'天','延',
'天','禄',
'安','和',
'康','保',
'応','和',
'天','徳',
'天','暦',
'天','慶',
'承','平',
'延','長',
'延','喜',
'昌','泰',
'寛','平',
'仁','和',
'元','慶',
'貞','観',
'天','安',
'斉','衡',
'仁','寿',
'嘉','祥',
'承','和',
'天','長',
'弘','仁',
'大','同',
'延','暦',
'天','応',
'宝','亀',
'神','護','景','雲',
'天','平','神','護',
'天','平','宝','字',
'天','平','勝','宝',
'天','平','感','宝',
'天','平',
'神','亀',
'養','老',
'霊','亀',
'和','銅',
'慶','雲',
'大','宝',
'朱','鳥',
'白','雉',
'大','化',
];

// ↓この辺最高に汚い
const aart = '\
　　　　　　　　　　　　　　　　　　　　　　　　　-------　､　ｒへ------､ <br>\
　　　　　　　　　　　　　　　　　　 ＿__､+\'\'"~　八 　　　　　~\'\'＜ つ　　　＼ <br>\
　　　　　　　　　　　　　　 _､+\'\'"~　 ./ ,:　　　　＾ 　 丶　　　　　ヽく＿＿　∧ <br>\
　　　　　　 , -r-　　　　 / 　 　 　 / / -､　　　　\'´￣!＼‘,　‘:,　 |　　　 ＼/ <br>\
　　　　　／ .∧　　 ＼..ﾞ|/＿,,.｡*\'/ /|,\/＼＿_／^ヽ /,,_　`! 　 \',　| <br>\
　　　 ／　　　∧　　　 ＼　.〈〉...█████████████████<br>\
　　 〈　　　　　 ∧ 平成 .∨....　████令████和██████<br>\
　　　∨ 　 　 　 ∧　　　　∨..　█████████████████<br>\
.　　　 ∨ 　 　 　 ∧　　　　∨....∨（.＾ 　　 ､_,､_, \`　　　,.ｨ^!./＿　　\', <br>\
　　　　 ∨　　 ／三ﾐメ、　　∨　冫≧=‐------‐ｧ=≦/ .|/　　 } 　 ! <br>\
.　　　 　 ∨三三三三圦__.＼＼/　＼|ｲ `\'\'＜:＼/:::::／　　|　　（＿__） <br>\
　　　 〈〉　　 ノ　ゞ三ｼ.　＼　＼;　　 { /　　　 ｀¨ﾍ⌒こフ　.∨ 〔､､､_） <br>\
　　　　　　　）　　　 　 　 　 ＼八　　`^i､_ __　　　 ＼＼　　 .∨ ｀¨´ <br>\
　　　　 ＜ﾍ＿/三＼＿／｜＼､.＼　/::/　 ）　　　　 `\'´　＿ ,∨､ <br>\
　　　　|＼三三三三:／　　|.　　＼/^ゞク≦---‐=≦::::::「:::::::::|::::/ <br>\
　　　　　　　　 　 　 　 　 　 　 　 /:::::::/:::::::/:::::::::;′:::::::::|::::::::::|:人<br>\
&lt;/achieving peace&gt;<br>\
&lt;beautiful harmony&gt;\n\
';

function shingengou(){
    var era = document.getElementById('era');
    era.textContent = '';
    var popuko = document.getElementById('popuko');
    popuko.textContent = '';
    var exe_btn = document.getElementById('bkb');
    exe_btn.disabled = true;  // 処理中はボタンを非アクティブにする
    var pop = setInterval(function(){
        era.textContent += team[getRandomInt(0, 503)];
        if(era.textContent.endsWith('令和')){
            clearInterval(pop);
            popuko.innerHTML = aart;
            exe_btn.disabled = false;
        }
        // 最下部にスクロールする
        document.documentElement.scrollTop = document.body.scrollHeight;
    }, 10);
}

function getRandomInt(min, max){
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

document.getElementById('bkb').addEventListener('click', shingengou);

