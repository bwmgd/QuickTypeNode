//express_demo.js 文件
import {quickTypeByJSON, quickTypeByJSONSchema} from "./quicktype";

let express = require('express');
let app = express();
let logger = require('./utils/logger');
//配置express模块POST参数解析
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false, limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));

app.get('/', function (req, res) {
  res.send('NodeJS启动成功');
  res.end();
});

//快速类型转换接口
app.post('/api/quickType/conversion', async (req, res) => {
  logger.info(req.body);
  let conversionType = req.body['conversionType'];
  let targetLanguage = req.body['targetLanguage'];
  let className = req.body['className'];
  let jsonString = req.body['jsonString'];
  logger.info('类型转换接口请求参数:\n',
    '\n入参类型:' + conversionType,
    '\n目标语言:' + targetLanguage,
    '\n类名:' + className,
    '\njson字符串:' + jsonString);
  let result: { retCode: number; message: string; info: any; } | { retCode: number; message: string; info?: undefined; };
  if (conversionType === 'json') {
    result = await quickTypeByJSON(targetLanguage, className, jsonString);
  } else if (conversionType === 'jsonSchema') {
    result = await quickTypeByJSONSchema(targetLanguage, className, jsonString);
  } else {
    result = {
      retCode: -1,
      message: '请正确输入转换类型'
    };
  }
  logger.info('类型转换接口请求返回:\n' + JSON.stringify(result));
  res.send(result);
  res.end();
});

let server = app.listen(8085, function () {
  console.log('应用实例，访问地址为 http://127.0.0.1:8085');
});
