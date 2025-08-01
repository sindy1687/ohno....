const vocabData = {
  aries: [
    { zh: "我", en: "I" }, { zh: "你；你們", en: "you" }, { zh: "他", en: "he" }, { zh: "她", en: "she" },
    { zh: "牠；它", en: "it" }, { zh: "我們", en: "we" }, { zh: "他們", en: "they" }, { zh: "男孩", en: "boy" },
    { zh: "女孩", en: "girl" }, { zh: "嬰兒", en: "baby" }, { zh: "一個", en: "an" }, { zh: "這 那", en: "the" },
    { zh: "這", en: "this" }, { zh: "那", en: "that" }, { zh: "這些", en: "these" }, { zh: "那些", en: "those" },
    { zh: "是；成為", en: "be" }, { zh: "助動詞", en: "do" }, { zh: "爸爸", en: "father" }, { zh: "媽媽", en: "mother" }
  ],
  taurus: [
    { zh: "兒子", en: "son" }, { zh: "女兒", en: "daughter" }, { zh: "(外)祖母", en: "grandmother" }, { zh: "(外)祖父", en: "grandfather" },
    { zh: "哥哥；弟弟", en: "brother" }, { zh: "姊姊；妹妹", en: "sister" }, { zh: "零", en: "zero" }, { zh: "一", en: "one" },
    { zh: "二", en: "two" }, { zh: "三", en: "three" }, { zh: "四", en: "four" }, { zh: "五", en: "five" },
    { zh: "六", en: "six" }, { zh: "七", en: "seven" }, { zh: "八", en: "eight" }, { zh: "九", en: "nine" },
    { zh: "十", en: "ten" }, { zh: "十一", en: "eleven" }, { zh: "十二", en: "twelve" }, { zh: "學校", en: "school" }
  ],
  gemini: [
    { zh: "班級；課程", en: "class" }, { zh: "學生", en: "student" }, { zh: "老師", en: "teacher" }, { zh: "朋友", en: "friend" },
    { zh: "書", en: "book" }, { zh: "椅子", en: "chair" }, { zh: "書桌", en: "desk" }, { zh: "桌子", en: "table" },
    { zh: "筆", en: "pen" }, { zh: "鉛筆", en: "pencil" }, { zh: "尺", en: "ruler" }, { zh: "橡皮擦", en: "eraser" },
    { zh: "麥可筆", en: "marker" }, { zh: "盒子；箱子", en: "box" }, { zh: "鉛筆盒", en: "pencil box" }, { zh: "地圖", en: "map" },
    { zh: "顏色", en: "color" }, { zh: "紅色", en: "red" }, { zh: "綠色", en: "green" }, { zh: "藍色", en: "blue" }
  ],
  cancer: [
    { zh: "黃色", en: "yellow" }, { zh: "粉紅色", en: "pink" }, { zh: "黑色", en: "black" }, { zh: "白色", en: "white" },
    { zh: "臉", en: "face" }, { zh: "眼睛", en: "eye" }, { zh: "鼻子", en: "nose" }, { zh: "耳朵", en: "ear" },
    { zh: "嘴巴", en: "mouth" }, { zh: "頭", en: "head" }, { zh: "頭髮", en: "hair" }, { zh: "手", en: "hand" },
    { zh: "腿", en: "leg" }, { zh: "貓", en: "cat" }, { zh: "狗", en: "dog" }, { zh: "鳥", en: "bird" },
    { zh: "熊", en: "bear" }, { zh: "鴨", en: "duck" }, { zh: "雞", en: "chicken" }, { zh: "老鼠", en: "mouse" }
  ],
  leo: [
    { zh: "豬", en: "pig" }, { zh: "兔子", en: "rabbit" }, { zh: "狐狸", en: "fox" }, { zh: "獅子", en: "lion" },
    { zh: "老虎", en: "tiger" }, { zh: "羊", en: "sheep" }, { zh: "猴子", en: "monkey" }, { zh: "大象", en: "elephant" },
    { zh: "馬", en: "horse" }, { zh: "青蛙", en: "frog" }, { zh: "螞蟻", en: "ant" }, { zh: "蜜蜂", en: "bee" },
    { zh: "蛇", en: "snake" }, { zh: "寵物", en: "pet" }, { zh: "動物", en: "animal" }, { zh: "我的", en: "my" },
    { zh: "你的", en: "your" }, { zh: "他的", en: "his" }, { zh: "她的", en: "her" }, { zh: "牠的", en: "its" }
  ],
  virgo: [
    { zh: "我們的", en: "our" }, { zh: "他們的", en: "their" }, { zh: "是", en: "is" }, { zh: "不", en: "no" },
    { zh: "不", en: "not" }, { zh: "好", en: "good" }, { zh: "醫生", en: "doctor" }, { zh: "護士", en: "nurse" },
    { zh: "歌手", en: "singer" }, { zh: "演員", en: "actor" }, { zh: "廚師", en: "cooker" }, { zh: "駕駛員", en: "driver" },
    { zh: "工程師", en: "engineer" }, { zh: "農夫", en: "farmer" }, { zh: "工人", en: "worker" }, { zh: "名字", en: "name" },
    { zh: "先生", en: "mr." }, { zh: "太太", en: "mrs." }, { zh: "水果", en: "fruit" }, { zh: "蘋果", en: "apple" }
  ],
  libra: [
    { zh: "梨子", en: "pear" }, { zh: "桃子", en: "peach" }, { zh: "葡萄", en: "grape" }, { zh: "香蕉", en: "banana" },
    { zh: "水", en: "water" }, { zh: "牛奶", en: "milk" }, { zh: "可口可樂", en: "cola" }, { zh: "果汁", en: "juice" },
    { zh: "咖啡", en: "coffee" }, { zh: "茶", en: "tea" }, { zh: "蛋", en: "egg" }, { zh: "蛋糕", en: "cake" },
    { zh: "魚；魚肉", en: "fish" }, { zh: "米；米飯", en: "rice" }, { zh: "早餐", en: "breakfast" }, { zh: "午餐", en: "lunch" },
    { zh: "晚餐", en: "dinner" }, { zh: "吃", en: "eat" }, { zh: "喝；飲料", en: "drink" }, { zh: "睡", en: "sleep" }
  ],
  scorpio: [
    { zh: "讀；閱讀", en: "read" }, { zh: "玩", en: "play" }, { zh: "去", en: "go" }, { zh: "喜歡", en: "like" },
    { zh: "聽", en: "listen" }, { zh: "音樂", en: "music" }, { zh: "電影", en: "movie" }, { zh: "漫畫書", en: "comic book" },
    { zh: "電腦", en: "computer" }, { zh: "公車", en: "bus" }, { zh: "汽車", en: "car" }, { zh: "腳踏車", en: "bicycle" },
    { zh: "計程車", en: "taxi" }, { zh: "火車", en: "train" }, { zh: "船；艦", en: "ship" }, { zh: "打電話；叫", en: "call" },
    { zh: "打開", en: "open" }, { zh: "關上", en: "close" }, { zh: "看", en: "watch" }, { zh: "看", en: "look" }
  ],
  sagittarius: [
    { zh: "看", en: "see" }, { zh: "高的", en: "tall" }, { zh: "長的", en: "long" }, { zh: "短的；矮的", en: "short" },
    { zh: "大的", en: "big" }, { zh: "小的", en: "small" }, { zh: "好的", en: "good" }, { zh: "壞的", en: "bad" },
    { zh: "美好的", en: "nice" }, { zh: "快樂的", en: "happy" }, { zh: "傷心的", en: "sad" }, { zh: "肥胖的", en: "fat" },
    { zh: "瘦的；薄的", en: "thin" }, { zh: "強壯的", en: "strong" }, { zh: "可愛的", en: "cute" }, { zh: "生病的", en: "sick" },
    { zh: "疲倦的", en: "tired" }, { zh: "憤怒的", en: "angry" }, { zh: "餓的", en: "hungry" }, { zh: "渴的", en: "thirsty" }
  ],
  capricorn: [
    { zh: "阿姨", en: "aunt" }, { zh: "叔叔", en: "uncle" }, { zh: "堂/表兄弟姊妹", en: "cousin" }, { zh: "父(母)親", en: "parent" },
    { zh: "家庭；家人", en: "family" }, { zh: "住", en: "live" }, { zh: "食物", en: "food" }, { zh: "牛肉", en: "beef" },
    { zh: "豬肉", en: "pork" }, { zh: "湯", en: "soup" }, { zh: "熱狗", en: "hot dog" }, { zh: "三明治", en: "sandwich" },
    { zh: "番茄", en: "tomato" }, { zh: "柳橙", en: "orange" }, { zh: "蔬菜", en: "vegetable" }, { zh: "麵包", en: "bread" },
    { zh: "派", en: "pie" }, { zh: "披薩", en: "pizza" }, { zh: "冰淇淋", en: "ice cream" }, { zh: "糖果", en: "candy" }
  ],
  aquarius: [
    { zh: "餅乾", en: "cookie" }, { zh: "漢堡", en: "hamburger" }, { zh: "游泳", en: "swim" }, { zh: "跳舞", en: "dance" },
    { zh: "跑", en: "run" }, { zh: "跳", en: "jump" }, { zh: "唱", en: "sing" }, { zh: "飛；飛行", en: "fly" },
    { zh: "可以", en: "can" }, { zh: "有；吃", en: "have" }, { zh: "騎", en: "ride" }, { zh: "駕駛；開車", en: "drive" },
    { zh: "走", en: "walk" }, { zh: "拿；搭乘", en: "take" }, { zh: "寫", en: "write" }, { zh: "學習；讀書", en: "study" },
    { zh: "做", en: "do" }, { zh: "做；製作", en: "make" }, { zh: "遊戲；比賽", en: "game" }, { zh: "電腦遊戲", en: "computer game" }
  ],
  pisces: [
    { zh: "卡片", en: "card" }, { zh: "鋼琴", en: "piano" }, { zh: "吉他", en: "guitar" }, { zh: "歌曲", en: "song" },
    { zh: "球", en: "ball" }, { zh: "棒球", en: "baseball" }, { zh: "籃球", en: "basketball" }, { zh: "足球", en: "soccer" },
    { zh: "風箏", en: "kite" }, { zh: "娃娃", en: "doll" }, { zh: "春天", en: "spring" }, { zh: "夏天", en: "summer" },
    { zh: "秋天", en: "autumn" }, { zh: "冬天", en: "winter" }, { zh: "太陽", en: "sun" }, { zh: "月亮", en: "moon" },
    { zh: "星星", en: "star" }, { zh: "雨", en: "rain" }, { zh: "熱的", en: "hot" }, { zh: "冷的", en: "cold" }
  ],
  phoenix: [
    { zh: "晴朗的", en: "clear" }, { zh: "下雨的", en: "rainy" }, { zh: "多雲的", en: "cloudy" }, { zh: "有風的", en: "windy" },
    { zh: "暖和的", en: "warm" }, { zh: "涼爽的；很酷的", en: "cool" }, { zh: "天氣", en: "weather" }, { zh: "誰", en: "who" },
    { zh: "什麼", en: "what" }, { zh: "當…的時候", en: "when" }, { zh: "如何", en: "how" }, { zh: "哪裡", en: "where" },
    { zh: "哪一個", en: "which" }, { zh: "這裡", en: "here" }, { zh: "那裡", en: "there" }, { zh: "在…之內", en: "inside" },
    { zh: "在…之上", en: "on" }, { zh: "在…地點", en: "at" }, { zh: "在…之下", en: "under" }, { zh: "從；由", en: "from" }
  ],
  draco: [
    { zh: "外的", en: "outside" }, { zh: "在…外側", en: "outside of" }, { zh: "根據", en: "according to" }, { zh: "為了", en: "for" },
    { zh: "向；往", en: "toward" }, { zh: "與；用…", en: "with" }, { zh: "和；而且", en: "and" }, { zh: "但是", en: "but" },
    { zh: "衣服", en: "clothes" }, { zh: "大衣", en: "coat" }, { zh: "夾克", en: "jacket" }, { zh: "褲子", en: "pants" },
    { zh: "T恤", en: "t-shirt" }, { zh: "短褲", en: "shorts" }, { zh: "裙子", en: "skirt" }, { zh: "襯衫", en: "shirt" },
    { zh: "洋裝", en: "dress" }, { zh: "(短)襪子", en: "socks" }, { zh: "鞋子", en: "shoes" }, { zh: "梳子 動梳", en: "comb" }
  ],
  orion: [
    { zh: "袋子；提袋", en: "bag" }, { zh: "帽子(有邊的)", en: "hat" }, { zh: "雨傘", en: "umbrella" }, { zh: "身體", en: "body" },
    { zh: "牙齒", en: "tooth" }, { zh: "背部", en: "back" }, { zh: "脖子", en: "neck" }, { zh: "唇", en: "lip" },
    { zh: "手指頭", en: "finger" }, { zh: "腳；足", en: "foot" }, { zh: "天；日子", en: "day" }, { zh: "星期一", en: "Monday" },
    { zh: "星期二", en: "Tuesday" }, { zh: "星期三", en: "Wednesday" }, { zh: "星期四", en: "Thursday" }, { zh: "星期五", en: "Friday" },
    { zh: "星期六", en: "Saturday" }, { zh: "星期日", en: "Sunday" }, { zh: "週；一星期", en: "week" }, { zh: "週末", en: "weekend" }
  ],
  cygnus: [
    { zh: "月", en: "month" }, { zh: "年", en: "year" }, { zh: "早晨；上午", en: "morning" }, { zh: "午後", en: "afternoon" },
    { zh: "傍晚；晚上", en: "evening" }, { zh: "夜；晚上", en: "night" }, { zh: "今天", en: "today" }, { zh: "今天晚上", en: "tonight" },
    { zh: "明天", en: "tomorrow" }, { zh: "昨天", en: "yesterday" }, { zh: "時間；期間", en: "time" }, { zh: "…點鐘", en: "o’clock" },
    { zh: "上午", en: "a.m." }, { zh: "下午", en: "p.m." }, { zh: "現在", en: "now" }, { zh: "最後的 最後地", en: "last" },
    { zh: "晚的 晚地", en: "late" }, { zh: "下個 下次的", en: "next" }, { zh: "教室", en: "classroom" }, { zh: "同學", en: "classmate" }
  ],
  pegasus: [
    { zh: "黑板", en: "blackboard" }, { zh: "筆記本", en: "notebook" }, { zh: "紙", en: "paper" }, { zh: "圖畫", en: "picture" },
    { zh: "英文", en: "English" }, { zh: "中文；中國人", en: "Chinese" }, { zh: "數學", en: "math" }, { zh: "體育", en: "PE" },
    { zh: "嗨", en: "hi" }, { zh: "哈囉", en: "hello" }, { zh: "再見", en: "goodbye" }, { zh: "說；演說", en: "speak" },
    { zh: "說", en: "say" }, { zh: "問", en: "ask" }, { zh: "回答；答案", en: "answer" }, { zh: "說話", en: "talk" },
    { zh: "問題", en: "question" }, { zh: "畫", en: "draw" }, { zh: "穿", en: "wear" }, { zh: "打掃 乾淨的", en: "clean" }
  ],
  cassiopeia: [
    { zh: "洗", en: "wash" }, { zh: "遇見", en: "meet" }, { zh: "過來", en: "come" }, { zh: "想要", en: "want" },
    { zh: "幫助", en: "help" }, { zh: "使用", en: "use" }, { zh: "新的", en: "new" }, { zh: "年老的", en: "old" },
    { zh: "快速的", en: "fast" }, { zh: "慢的", en: "slow" }, { zh: "漂亮的", en: "pretty" }, { zh: "英俊的", en: "handsome" },
    { zh: "聰明的", en: "smart" }, { zh: "美好的", en: "nice" }, { zh: "樂趣", en: "fun" }, { zh: "很棒的", en: "great" },
    { zh: "乏味的", en: "boring" }, { zh: "一些", en: "some" }, { zh: "非常；很", en: "very" }, { zh: "也；太", en: "too" }
  ],
  scorpius: [
    { zh: "房子；房屋", en: "house" }, { zh: "客廳", en: "living room" }, { zh: "廚房", en: "kitchen" }, { zh: "寢室", en: "bedroom" },
    { zh: "浴室", en: "bathroom" }, { zh: "門", en: "door" }, { zh: "家", en: "home" }, { zh: "房間", en: "room" },
    { zh: "牆壁", en: "wall" }, { zh: "床", en: "bed" }, { zh: "玩具", en: "toy" }, { zh: "窗戶", en: "window" },
    { zh: "電視", en: "TV" }, { zh: "手機", en: "telephone" }, { zh: "風扇", en: "fan" }, { zh: "沙發", en: "sofa" },
    { zh: "鎖匙", en: "key" }, { zh: "盤子；碟子", en: "plate" }, { zh: "碗", en: "bowl" }, { zh: "筷子", en: "chopsticks" }
  ],
  vela: [
    { zh: "杯子", en: "cup" }, { zh: "玻璃杯", en: "glass" }, { zh: "動物園", en: "zoo" }, { zh: "公園", en: "park" },
    { zh: "農場", en: "farm" }, { zh: "店舖", en: "shop" }, { zh: "書店", en: "bookstore" }, { zh: "醫院", en: "hospital" },
    { zh: "銀行", en: "bank" }, { zh: "圖書館", en: "library" }, { zh: "超級市場", en: "supermarket" }, { zh: "台灣", en: "Taiwan" },
    { zh: "美國", en: "USA" }, { zh: "花", en: "flower" }, { zh: "樹", en: "tree" }, { zh: "旅遊", en: "travel" },
    { zh: "夢想", en: "dream" }, { zh: "捷運", en: "MRT" }, { zh: "一百(的)", en: "hundred" }, { zh: "元", en: "dollar" }
  ]

};