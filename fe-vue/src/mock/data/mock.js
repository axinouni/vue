import Mock from 'mockjs'
export default Mock.mock({
  'title': '拼多多',
  'navbars': ['首页', '服饰', '男装', '母婴', '家具', '电器', '美食', '家纺', '美妆'],
  'banners': [
    {'img': '../src/assets/img/img1.png'},
    {'img': '../src/assets/img/img2.png'},
    {'img': '../src/assets/img/img3.png'}
  ],
  'leaders': [
    {'icon': '#icon-chuangkou', 'cont': '限时秒杀'},
    {'icon': '#icon-jiushengyi', 'cont': '品牌清仓'},
    {'icon': '#icon-famu', 'cont': '名牌折扣'},
    {'icon': '#icon-jingjielan', 'cont': '海淘'},
    {'icon': '#icon-lajiqingdaoche', 'cont': '助力享免单'},
    {'icon': '#icon-luomu', 'cont': '爱逛街'},
    {'icon': '#icon-luosidao', 'cont': '9块9特卖'},
    {'icon': '#icon-pudiban', 'cont': '现金签到'},
    {'icon': '#icon-richenganpai', 'cont': '没事汇'},
    {'icon': '#icon-shejitu', 'cont': '好友红包'}
  ],
  'footers': [
    {'cls': 'fa fa-ravelry', 'con': '首页', 'url': '/'},
    {'cls': 'fa fa-grav', 'con': '新品', 'url': '/user'},
    {'cls': 'fa fa-snowflake-o', 'con': '海淘', 'url': '/sea'},
    {'cls': 'fa fa-podcast', 'con': '搜索', 'url': '/search'},
    {'cls': 'fa fa-meetup', 'con': '个人中心', 'url': '/myself'}
  ],
  'oricons': [
    {'img': 'src/assets/img/con1.png', 'conts': '【品牌折扣 双面花形三件套 九件套装】俞兆林 时尚沙发垫九件套 四季通用欧式贵妃沙发垫三件套九件套', 'pri': '￥28.9', 'pCon': '已团11万件', 'go': '去开团 >', 'vid': 1},
    {'img': 'src/assets/img/con2.png', 'conts': '【品牌折扣 双面花形三件套 九件套装】俞兆林 时尚沙发垫九件套 四季通用欧式贵妃沙发垫三件套九件套', 'pri': '￥24.9', 'pCon': '已团11万件', 'go': '去开团 >', 'vid': 2}
  ],
  'province|20': [
    {
      'id|1-100': 100,
      name: '@province()',
      'city|10': [
        {
          'cid|1-100': 100,
          name: '@city()'
        }
      ]
    }
  ]
})