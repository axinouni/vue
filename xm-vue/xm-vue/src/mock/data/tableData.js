const temp = [];
for (var i = 0; i < 100; i++) {
    temp.push({
        number: `${i}`,
        order: '123',
        name: 'PD' + i,
        sku: '123',
        goodsId: '342',
        amount: '234',
        status: i % 2 ? 1 : 0,
        way: '优惠券',
        favour: '10',
        payway: '支付宝',
        createTime: '2017-11-03',
        user: 'zyx' + i,
        btn1: '',
        btn2: ''
    });
};
export default temp;
