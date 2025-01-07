var storyContent = {"inkVersion":21,"root":[["ev",{"VAR?":"peoples"},"/ev",{"VAR=":"here","re":true},"^有六个人要过河，他们分别是","ev",{"VAR?":"here"},"out","/ev","^。","\n","^规则如下：","\n","^妈妈恋童，父亲不在会侵犯哥哥。","\n","^爸爸鬼父，母亲不在会侵犯妹妹。","\n","^哥哥妹妹骨科，父母不在时会互相侵犯。","\n","^魅魔会在猎魔人不在时侵犯所有人。","\n","^猎魔人对裤裆里那点事不感兴趣，也不在意别人的家事。","\n","^只有一艘船每次只能坐两个人，船不会自己回来过去要有人开回来。","\n","^会开船的只有父亲、母亲和猎魔人。","\n","^<b>如何在不发生任何性行为的前提下，让六个人成功到河对岸？</b>","\n","ev","str","^开始游戏","/str","/ev",{"*":"0.c-0","flg":4},{"c-0":["\n",{"->":"go"},{"->":"0.g-0"},{"#f":5}],"g-0":["done",{"#f":5}]}],"done",{"go":[["^选择过河时开船的人：","\n",["ev","str","^父亲","/str",{"VAR?":"here"},{"VAR?":"父亲"},"?","/ev",{"*":".^.c-0","flg":5},"ev","str","^母亲","/str",{"VAR?":"here"},{"VAR?":"母亲"},"?","/ev",{"*":".^.c-1","flg":5},"ev","str","^猎魔人","/str",{"VAR?":"here"},{"VAR?":"猎魔人"},"?","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n","ev",{"VAR?":"there"},{"VAR?":"父亲"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"父亲"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"父亲"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-0"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"there"},{"VAR?":"母亲"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"母亲"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"母亲"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-0"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"there"},{"VAR?":"猎魔人"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"猎魔人"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"猎魔人"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-0"},{"#f":5}],"#f":5,"#n":"first_choice"}],{"g-0":["^选择了【","ev",{"VAR?":"boat"},"out","/ev","^】开船。","\n","^选择乘客：","\n",{"->":".^.second_choice"},["ev","str","^父亲","/str",{"VAR?":"here"},{"VAR?":"父亲"},"?","/ev",{"*":".^.c-3","flg":5},"ev","str","^母亲","/str",{"VAR?":"here"},{"VAR?":"母亲"},"?","/ev",{"*":".^.c-4","flg":5},"ev","str","^猎魔人","/str",{"VAR?":"here"},{"VAR?":"猎魔人"},"?","/ev",{"*":".^.c-5","flg":5},"ev","str","^哥哥","/str",{"VAR?":"here"},{"VAR?":"哥哥"},"?","/ev",{"*":".^.c-6","flg":5},"ev","str","^妹妹","/str",{"VAR?":"here"},{"VAR?":"妹妹"},"?","/ev",{"*":".^.c-7","flg":5},"ev","str","^魅魔","/str",{"VAR?":"here"},{"VAR?":"魅魔"},"?","/ev",{"*":".^.c-8","flg":5},{"c-3":["\n","ev",{"VAR?":"there"},{"VAR?":"父亲"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"父亲"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"父亲"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-1"},{"#f":5}],"c-4":["\n","ev",{"VAR?":"there"},{"VAR?":"母亲"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"母亲"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"母亲"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-1"},{"#f":5}],"c-5":["\n","ev",{"VAR?":"there"},{"VAR?":"猎魔人"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"猎魔人"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"猎魔人"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-1"},{"#f":5}],"c-6":["\n","ev",{"VAR?":"there"},{"VAR?":"哥哥"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"哥哥"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"哥哥"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-1"},{"#f":5}],"c-7":["\n","ev",{"VAR?":"there"},{"VAR?":"妹妹"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"妹妹"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"妹妹"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-1"},{"#f":5}],"c-8":["\n","ev",{"VAR?":"there"},{"VAR?":"魅魔"},"+",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"魅魔"},"-",{"VAR=":"here","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"魅魔"},"+",{"VAR=":"boat","re":true},"/ev",{"->":"go.0.g-1"},{"#f":5}],"#f":5,"#n":"second_choice"}],{"#f":5}],"g-1":["ev",{"VAR?":"boat"},"out","/ev","^ 过了河。","\n","^<hr>","\n",{"->t->":"judge"},{"->t->":"boat_clear"},{"->":"back"},{"#f":5}]}],{"#f":1}],"back":[["^选择返回时开船的人：","\n",["ev","str","^父亲","/str",{"VAR?":"there"},{"VAR?":"父亲"},"?","/ev",{"*":".^.c-0","flg":5},"ev","str","^母亲","/str",{"VAR?":"there"},{"VAR?":"母亲"},"?","/ev",{"*":".^.c-1","flg":5},"ev","str","^猎魔人","/str",{"VAR?":"there"},{"VAR?":"猎魔人"},"?","/ev",{"*":".^.c-2","flg":5},{"c-0":["\n","ev",{"VAR?":"there"},{"VAR?":"父亲"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"父亲"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"父亲"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-0"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"there"},{"VAR?":"母亲"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"母亲"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"母亲"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-0"},{"#f":5}],"c-2":["\n","ev",{"VAR?":"there"},{"VAR?":"猎魔人"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"猎魔人"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"猎魔人"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-0"},{"#f":5}],"#f":5,"#n":"there_first_choice"}],{"g-0":["^选择了【","ev",{"VAR?":"boat"},"out","/ev","^】开船。","\n","^选择乘客：","\n",{"->":".^.there_second_choice"},["ev","str","^父亲","/str",{"VAR?":"there"},{"VAR?":"父亲"},"?","/ev",{"*":".^.c-3","flg":5},"ev","str","^母亲","/str",{"VAR?":"there"},{"VAR?":"母亲"},"?","/ev",{"*":".^.c-4","flg":5},"ev","str","^猎魔人","/str",{"VAR?":"there"},{"VAR?":"猎魔人"},"?","/ev",{"*":".^.c-5","flg":5},"ev","str","^哥哥","/str",{"VAR?":"there"},{"VAR?":"哥哥"},"?","/ev",{"*":".^.c-6","flg":5},"ev","str","^妹妹","/str",{"VAR?":"there"},{"VAR?":"妹妹"},"?","/ev",{"*":".^.c-7","flg":5},"ev","str","^魅魔","/str",{"VAR?":"there"},{"VAR?":"魅魔"},"?","/ev",{"*":".^.c-8","flg":5},"ev","str","^不选了","/str","/ev",{"*":".^.c-9","flg":4},{"c-3":["\n","ev",{"VAR?":"there"},{"VAR?":"父亲"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"父亲"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"父亲"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-1"},{"#f":5}],"c-4":["\n","ev",{"VAR?":"there"},{"VAR?":"母亲"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"母亲"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"母亲"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-1"},{"#f":5}],"c-5":["\n","ev",{"VAR?":"there"},{"VAR?":"猎魔人"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"猎魔人"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"猎魔人"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-1"},{"#f":5}],"c-6":["\n","ev",{"VAR?":"there"},{"VAR?":"哥哥"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"哥哥"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"哥哥"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-1"},{"#f":5}],"c-7":["\n","ev",{"VAR?":"there"},{"VAR?":"妹妹"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"妹妹"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"妹妹"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-1"},{"#f":5}],"c-8":["\n","ev",{"VAR?":"there"},{"VAR?":"魅魔"},"-",{"VAR=":"there","re":true},"/ev","ev",{"VAR?":"boat"},{"VAR?":"魅魔"},"+",{"VAR=":"boat","re":true},"/ev","ev",{"VAR?":"here"},{"VAR?":"魅魔"},"+",{"VAR=":"here","re":true},"/ev",{"->":"back.0.g-1"},{"#f":5}],"c-9":["\n",{"->":"back.0.g-1"},{"#f":5}],"#f":5,"#n":"there_second_choice"}],{"#f":5}],"g-1":["ev",{"VAR?":"boat"},"out","/ev","^ 过了河。","\n","^<hr>","\n","^此时留在河边的人是：","ev",{"VAR?":"here"},"out","/ev","^。","\n","^河对岸的人是：","ev",{"VAR?":"there"},"out","/ev","^。","\n",{"->t->":"judge"},{"->t->":"boat_clear"},{"->":"go"},{"#f":5}]}],{"#f":1}],"judge":[["ev",{"VAR?":"here"},{"list":{"peoples.母亲":2,"peoples.哥哥":3}},"?",{"VAR?":"here"},{"VAR?":"父亲"},"!?","&&",{"VAR?":"there"},{"list":{"peoples.母亲":2,"peoples.哥哥":3}},"?",{"VAR?":"there"},{"VAR?":"父亲"},"!?","&&","||","/ev",{"->":".^.b","c":true},{"b":["\n","^妈妈侵犯了哥哥。","\n",{"->":"end"},{"->":"judge.6"},null]}],["ev",{"VAR?":"here"},{"list":{"peoples.父亲":1,"peoples.妹妹":4}},"?",{"VAR?":"here"},{"VAR?":"母亲"},"!?","&&",{"VAR?":"there"},{"list":{"peoples.父亲":1,"peoples.妹妹":4}},"?",{"VAR?":"there"},{"VAR?":"母亲"},"!?","&&","||","/ev",{"->":".^.b","c":true},{"b":["\n","^父亲侵犯了妹妹。","\n",{"->":"end"},{"->":"judge.6"},null]}],["ev",{"VAR?":"here"},{"list":{"peoples.哥哥":3,"peoples.妹妹":4}},"?",{"VAR?":"here"},{"list":{"peoples.父亲":1,"peoples.母亲":2}},"!?","&&",{"VAR?":"there"},{"list":{"peoples.哥哥":3,"peoples.妹妹":4}},"?",{"VAR?":"there"},{"list":{"peoples.父亲":1,"peoples.母亲":2}},"!?","&&","||","/ev",{"->":".^.b","c":true},{"b":["\n","^哥哥和妹妹搞在了一起。","\n",{"->":"end"},{"->":"judge.6"},null]}],["ev",{"VAR?":"here"},{"VAR?":"魅魔"},"?",{"VAR?":"here"},"LIST_COUNT",1,">","&&",{"VAR?":"here"},{"VAR?":"猎魔人"},"!?","&&",{"VAR?":"there"},{"VAR?":"魅魔"},"?",{"VAR?":"there"},"LIST_COUNT",1,">","&&",{"VAR?":"there"},{"VAR?":"猎魔人"},"!?","&&","||","/ev",{"->":".^.b","c":true},{"b":["\n","^在场的人在魅魔影响下开起了银趴。","\n",{"->":"end"},{"->":"judge.6"},null]}],["ev",{"VAR?":"there"},{"VAR?":"peoples"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","^全部人成功过到了河对岸。","\n",{"->":"end"},{"->":"judge.6"},null]}],[{"->":".^.b"},{"b":["\n","ev","void","/ev","->->",{"->":"judge.6"},null]}],"nop","\n",{"#f":1}],"boat_clear":["ev",{"list":{}},"/ev",{"VAR=":"boat","re":true},"ev","void","/ev","->->",{"#f":1}],"end":["^游戏结束！ ","#","^CLASS: end","/#","\n","end",{"#f":1}],"global decl":["ev",{"list":{"peoples.父亲":1,"peoples.母亲":2,"peoples.哥哥":3,"peoples.妹妹":4,"peoples.魅魔":5,"peoples.猎魔人":6}},{"VAR=":"peoples"},{"list":{}},{"VAR=":"here"},{"list":{}},{"VAR=":"there"},{"list":{}},{"VAR=":"boat"},"/ev","end",null],"#f":1}],"listDefs":{"peoples":{"父亲":1,"母亲":2,"哥哥":3,"妹妹":4,"魅魔":5,"猎魔人":6}}};