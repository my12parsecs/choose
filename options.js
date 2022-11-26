const looksOption = {
  "醜（見ていられない）": 6,
  "やや醜（耐えられる）": 25,
  "普通（良くも悪くもない平凡）": 38,
  "やや美（一般人の中で良い）": 25,
  "美（芸能人級）": 6,
};

const heightOption = {
  159: 1,
  160: 1,
  161: 1,
  162: 1,
  163: 1,
  164: 2,
  165: 3,
  166: 4,
  167: 5,
  168: 6,
  169: 7,
  170: 7,
  171: 8,
  172: 8,
  173: 7,
  174: 7,
  175: 6,
  176: 6,
  177: 5,
  178: 4,
  179: 3,
  180: 2,
  181: 1,
  182: 1,
  183: 1,
  184: 1,
  185: 1,
};

const ageOption = {
  22: 3,
  23: 4,
  24: 4,
  25: 5,
  26: 5,
  27: 6,
  28: 6,
  29: 7,
  30: 7,
  31: 7,
  32: 7,
  33: 6,
  34: 6,
  35: 5,
  36: 5,
  37: 4,
  38: 4,
  39: 3,
  40: 3,
  45: 2,
  50: 1,
};

const schoolOption = {
  "日東駒専": 35,
  "MARCH": 40,
  "早慶": 20,
  "東大": 5
}

// 東京
// 京都
// 一橋
// 慶應義塾
// 東京工業
// 大阪
// 早稲田
// 上智
// 名古屋
// 東北
// 筑波
// 横浜国立
// 立教
// 青山学院
// 明治
// 中央
// 法政
// 学習院



const jobOption = {}

const careerOptionNTKS = {
  "経営者": 1,
  "上級正社員": 3,
  "中級正社員": 25,
  "下級正社員": 45,
  "契約社員": 15,
  "フリーター": 6,
  "無職": 5,
}
const careerOptionMarch = {
  "経営者": 3,
  "上級正社員": 10,
  "中級正社員": 40,
  "下級正社員": 30,
  "契約社員": 10,
  "フリーター": 4,
  "無職": 3,
}
const careerOptionSokei = {
  "経営者": 5,
  "上級正社員": 20,
  "中級正社員": 50,
  "下級正社員": 15,
  "契約社員": 5,
  "フリーター": 3,
  "無職": 2,
}
const careerOptionTodai = {
  "経営者": 10,
  "上級正社員": 55,
  "中級正社員": 25,
  "下級正社員": 4,
  "契約社員": 3,
  "フリーター": 2,
  "無職": 1,
}
const careerOptionIn = {}


// "経営者": 10,
// "上級正社員": 70,
// "中級正社員": 10,
// "下級正社員": 4,
// "契約社員": 3,
// "フリーター": 2,
// "無職": 1,

const careerSalaryFreeter = {
  22: 170,
  23: 180,
  24: 190,
  25: 200,
  26: 210,
  27: 220,
  28: 230,
  29: 240,
  30: 240,
  31: 250,
  32: 250,
  33: 260,
  34: 260,
  35: 270,
  36: 270,
  37: 260,
  38: 260,
  39: 250,
  40: 250,
  45: 240,
  50: 240,
}
const careerSalaryKeiyaku = {
  22: 200,
  23: 210,
  24: 220,
  25: 220,
  26: 230,
  27: 240,
  28: 240,
  29: 250,
  30: 260,
  31: 270,
  32: 280,
  33: 290,
  34: 300,
  35: 310,
  36: 320,
  37: 330,
  38: 330,
  39: 340,
  40: 350,
  45: 400,
  50: 350,
}
const careerSalaryLow = {
  22: 220,
  23: 230,
  24: 240,
  25: 250,
  26: 260,
  27: 270,
  28: 280,
  29: 290,
  30: 300,
  31: 310,
  32: 320,
  33: 330,
  34: 340,
  35: 350,
  36: 360,
  37: 370,
  38: 380,
  39: 390,
  40: 400,
  45: 450,
  50: 500,
}
const careerSalaryMiddle = {
  22: 300,
  23: 320,
  24: 350,
  25: 380,
  26: 400,
  27: 420,
  28: 450,
  29: 480,
  30: 500,
  31: 520,
  32: 550,
  33: 580,
  34: 600,
  35: 630,
  36: 670,
  37: 700,
  38: 740,
  39: 770,
  40: 800,
  45: 950,
  50: 900,
}
const careerSalaryHigh = {
  22: 400,
  23: 450,
  24: 500,
  25: 550,
  26: 600,
  27: 700,
  28: 750,
  29: 800,
  30: 900,
  31: 1000,
  32: 1100,
  33: 1150,
  34: 1200,
  35: 1250,
  36: 1300,
  37: 1350,
  38: 1400,
  39: 1450,
  40: 1500,
  45: 1600,
  50: 1600,
}
const careerSalaryEntrepreneur = {
  22: 600,
  23: 700,
  24: 800,
  25: 900,
  26: 1000,
  27: 2000,
  28: 3000,
  29: 4000,
  30: 5000,
  31: 6000,
  32: 7000,
  33: 8000,
  34: 9000,
  35: 10000,
  36: 12000,
  37: 14000,
  38: 16000,
  39: 18000,
  40: 20000,
  45: 22000,
  50: 24000,
}


// 中川大志
const earlyTwenties = {
  "https://cdn.stardust.co.jp/wp-content/uploads/2022/05/nakagawataishi_sen01.jpg": 100
}

// 伊藤健太郎、北村匠海、新田真剣佑、山崎賢人、神木隆之介、竹内涼真
const lateTwenties = {
  "https://www.image-enter.co.jp/imenWP/wp-content/uploads/2021/03/0210_forWEB-e1625021465650.jpg": 17,
  "https://cdn.stardust.co.jp/wp-content/uploads/2022/05/kitamuratakumi_sen01-367x550.jpg": 17,
  "https://ogre.natalie.mu/artist/102648/20200519/aratamackenyu_art_201908.jpg?imwidth=640&imdensity=1": 17,
  "https://ogre.natalie.mu/artist/62456/20160209/yamazakikento_201509.jpg?imwidth=640&imdensity=1": 17,
  "https://co-lavo.co.jp/wp/wp-content/themes/colavo_2022/images/prof_photo_kamiki.jpg": 17,
  "https://www.horipro.co.jp/wp-content/uploads/sites/127/2022/11/S__278372356.jpg": 15
}

// 　坂口健太郎、岡田将生、千葉雄大、松坂桃李
const earlyThirties = {
  "https://tristone.co.jp/actors/img/sakaguchi350.jpg": 25,
  "https://cdn.stardust.co.jp/wp-content/uploads/2022/05/okadamasaki_sen01.jpg": 25,
  "https://www.japanmusic.jp/wp-content/uploads/2020/10/%E5%8D%83%E8%91%89%E5%AE%A3%E6%9D%90%E9%BB%92-scaled.jpg": 25,
  "https://topcoat.co.jp/s3/skiyaki/uploads/artist_photo/image/10318/5e840b633dd40.jpg": 25,
}

// 田中圭、山田孝之
const lateThirties = {
  "https://ogre.natalie.mu/artist/48196/20191017/TanakaKei_art201910.jpg?imwidth=640&imdensity=1": 50,
  "https://thetv.jp/i/tl/000/0258/0000258788_r.jpg?w=646": 50,
}

// 小栗旬、向井理、妻夫木聡、DAIGO
const forties = {
  "https://gingerweb.jp/wp-content/uploads/2020/10/2318414728010113d6df3d435e0d16dajpeg.jpg": 25,
  "https://c799eb2b0cad47596bf7b1e050e83426.cdnext.stream.ne.jp/img/article/000/304/066/7550ae9ba8a82f9c8e61d448ea0c90ee20220418111323961.jpg": 25,
  "https://www.horipro.co.jp/wp-content/uploads/sites/104/2019/07/tsumabuki201804.jpg": 25,
  "https://numero.jp/wp-content/uploads/2016/09/b82337f230775313c26fca4365b63b11.jpg": 25
}

// 阿部寛、唐沢寿明
const fifty = {
  "https://moviewalker.jp/api/resizeimage/person/cc/40/cc40485ea46d3b46b47a1579486d5df5.jpg?w=690": 50,
  "https://thetv.jp/i/tl/000/0000/0000000547_r.jpg": 50,
}














export {
  looksOption,
  heightOption,
  ageOption,
  schoolOption,
  jobOption,
  careerOptionNTKS,
  careerOptionMarch,
  careerOptionSokei,
  careerOptionTodai,
  careerSalaryFreeter,
  careerSalaryKeiyaku,
  careerSalaryLow,
  careerSalaryMiddle,
  careerSalaryHigh,
  careerSalaryEntrepreneur,
  earlyTwenties,
  lateTwenties,
  earlyThirties,
  lateThirties,
  forties,
  fifty
};
