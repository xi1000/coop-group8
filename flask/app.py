from flask import Flask
from flask import jsonify, render_template,request,Response
from flask_cors import CORS
from flask_pymongo import PyMongo
from gridfs import GridFS


app = Flask(__name__)
CORS(app, supports_credentials=True) 

mongo = PyMongo(app, uri="mongodb://192.168.100.144:27021/coop") 

#各地区总确诊人数比较echarts            
@app.route('/name/',methods=['GET', 'POST'])
def name():
        # 查询全部
        num=[]
        place=[]
        for i in  mongo.db.data.find({'date':'06.27'},{'_id':0,'city':1,'confirm':1}):
            num.append(i.get('confirm'))
            place.append(i.get('city'))
        ret = {
            'place': place,
            'num': num,
            'code': 200
        }
        return ret
#某地区时间横向对比
@app.route('/place/',methods=['GET', 'POST'])
def place():
        # 查询全部
        num=[]
        date=[]
        for i in  mongo.db.data.find({'city':'浦东'},{'_id':0,'date':1,'confirm':1}):
            num.append(i.get('confirm'))
            date.append(i.get('date'))
        ret = {
            'num': num,
            'date':date,
            'code': 200
        }
        return ret

#物品查询
@app.route('/goods/',methods=['GET', 'POST'])
def goods():
    li=[]
    for i in mongo.db.goods.find({},{"_id":0}).limit(3):
            li.append(i)

    return jsonify(li)
    


#定义app在8081端口运行
app.run(port=8081)
 