module.exports = {
/*    'index': {
        return_code: 0,
        'mchname': 'test1',
        data: [{
            'mchname': 'test1',
            'mchcode': '123321',
            'key': 'test123123'
        }, {
            'mchname': 'test2',
            'mchcode': '123321',
            'key': 'test123123'
        }, {
            'mchname': 'test3',
            'mchcode': '123321',
            'key': 'test123123'
        }, ]
    },
    'main': {
        "return_code": 0,
        "return_msg": "OK",
        "data": {
            'key':'dsadsadsadsa',
            'date':'20120612',
            "basic": {
                "mchname": "佰惠超市",
                "pay_cnt": 332,
                "pay_user": 26,
                "pay_amt": 2222.5
            },
            "api": {
                "trade_key": "mpVilGuam5iamJ1vm8aVYRDI/99IW8q3xEO9h/p0SNpYeaC6AwEBbTfQ8Tupa2IacCqVL2h/NN9CEdJ7z7TW933YAOkh8ZD90 4wKJ4QhRY=",
                "stock_key": "mpVilGuam5iamJ1vm8aVYRDI/99IW8q3xEO9h/p0SNpYeaC6AwEBbTfQ8Tupa2IacCqVL2h/NN9CEdJ7z7TW933YAOkh8ZD90 4wKJ4QhRY=",
                "user_key": "mpVilGuam5iamJ1vm8aVYRDI/99IW8q3xEO9h/p0SNpYeaC6AwEBbTfQ8Tupa2IacCqVL2h/NN9CEdJ7z7TW933YAOkh8ZD90 4wKJ4QhRY="
            },
            "setting": {
                "bind_type": 1,
                "staff_name": "admin",
                "employee_num": 4
            }
        }
    },
    'setting': {

        "return_code": 0,

        "return_msg": "OK",

        "data": [

            {

                "bind_real_name": "张志明",

                "bind_type": 1,

                "auth_state": 1,

                "img_src": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLBibY58xCZUQgElckR2Mibx1qYUU2VB1KwwUJDpYibn7rib7miaBQ2LslgQ38iawtWRfsGhpgftgoNiaTwmg/64",

                "key": "lJJll5aUb2yYlmybbJibZWJNL5paUzdX3BcybywYC9PuyuOGjsgyuNyDKAOexLmItZYjdi2jTJNSmafYxyCGSWTCqVzcvJV8f8a4AizSiyw="

            },

            {

                "bind_real_name": "李少杰",

                "bind_type": 2,

                "auth_state": 1,

                "img_src": "http://wx.qlogo.cn/mmopen/bCicZibrScKsI5cUvpJiaicEicUlk0TYhoicausX9LrncOyupplTP33nkucP2AtEibNchjMr8YxgicJKQcDXut3ia8OkNfUpiboIaJ8Opf/64",

                "key": "xcZinGaZn5uZxpmaapiSZWeqZobuzda3YqT8+d58dDrl/zQcASkFz/uUR/zUPfH4QSoKGcUd7I13vdDNozqso8hLBaUj2RUxRBuofE3voYg="

            },

            {

                "bind_real_name": "andyjjjiang",

                "bind_type": 0,

                "auth_state": 2,

                "img_src": "",

                "key": "mMWUyW6Vm2fLym9ob5XDZBxCEQxNllqvjCozeKotLg1dRU7HF4j21xQFfXyGIrMiJ3iTKTY/iiZDVOlw4E681mHAhM+lGGF6dwJ1suN/2oc="

            }

        ]

    },
    'stock': {
    "return_code": 0,
    "return_msg": "OK",
    "data": {
        "running": [
            {
                "name": "有礼啦",
                "fbegin_time": "2017-10-11 00:00:00",
                "fend_time": "2017-10-12 23:59:59",
                "basic": {
                    "mid_act_trade_money_day": 580,
                    "mid_act_discount_cnt_day": 5
                }
            },
            {
                "name": "有礼啦",
                "fbegin_time": "2017-10-11 00:00:00",
                "fend_time": "2017-10-12 23:59:59",
                "basic": {
                    "mid_act_trade_money_day": 31.5,
                    "mid_act_discount_cnt_day": 1
                }
            },
            {
                "name": "有礼啦",
                "fbegin_time": "2017-10-11 00:00:00",
                "fend_time": "2017-10-12 23:59:59",
                "basic": {
                    "mid_act_trade_money_day": 179.5,
                    "mid_act_discount_cnt_day": 12
                }
            }
        ],
        "closed": [
            {
                "name": "有礼啦",
                "fbegin_time": "2017-10-10 00:00:00",
                "fend_time": "2017-10-10 23:59:59",
                "total": {
                    "mid_act_trade_money_day": 74.5,
                    "mid_act_discount_cnt_day": 1
                }
            },
            {
                "name": "有礼啦",
                "fbegin_time": "2017-10-10 00:00:00",
                "fend_time": "2017-10-10 23:59:59",
                "total": {
                    "mid_act_trade_money_day": 0,
                    "mid_act_discount_cnt_day": 0
                }
            },
  
  
            {
                "name": "中秋有惊喜",
                "fbegin_time": "2017-09-26 00:00:00",
                "fend_time": "2017-09-26 23:59:59",
                "total": {
                    "mid_act_trade_money_day": 82.1,
                    "mid_act_discount_cnt_day": 2
                }
            },
            {
                "name": "中秋有惊喜",
                "fbegin_time": "2017-09-26 00:00:00",
                "fend_time": "2017-09-26 23:59:59",
                "total": {
                    "mid_act_trade_money_day": 148.1,
                    "mid_act_discount_cnt_day": 9
                }
            }
        ]
    }
},*/

'month':{
    "return_code": 0,
    "return_msg": "OK",
    "data": {
        "basic": {
            "mchname": "快易策划",
            "mchcode": "1388013002",
            "month": "11"
        },
        "summary": {
            "trade_cnt": 998,
            "trade_money": 1115301,
            "trade_user": 629,
            "ave_cnt_price": 1117.5,
            "cnt_month_ratio": 200.6,
            "user_month_ratio": 283.5,
            "money_month_ratio": 118,
            "price_month_ratio": -27.5,
            "month": "11",
            "last_month": "10"
        }
    }
}

}