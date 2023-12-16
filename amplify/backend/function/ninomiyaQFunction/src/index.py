# import json

# def handler(event, context):
#   print('received event:')
#   print(event)
  
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': json.dumps('Hello from your new Amplify Python lambda!')
#   }

import logging
import boto3
import json
from decimal import Decimal

# 環境変数の取得
import os
env = os.environ['ENV']

# ロガーの設定
logger = logging.getLogger()
logger.setLevel(logging.INFO)

# 共通ヘッダ
headers_options = {
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,GET,POST'
    }

# DynamoDBへのサービスリソースを取得
dynamodb = boto3.resource('dynamodb')
# テーブル名の指定(TODO:処理対象のテーブル名を適宜指定すること)
table = dynamodb.Table('QuestionaireNinomiyaDB' + '-' + env)

# Decimal型のデータをJSONに変換するための下処理を行う関数
def decimal_default_proc(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError

# HTTPメソッドがPOSTの際の処理
def do_post(event):
  # HTTPリクエストボディをオブジェクト化
  post_body = json.loads(event["body"])

  # データ追加
  # (TODO:テーブル構造に合わせて辞書内のキー名等を変更する事)

  table.put_item(
    Item = {
      "ID": post_body['ID'],
      "datetime": post_body['datetime'],
      "phonenumber": post_body['phonenumber'],
      "homephonenumber": post_body['homephonenumber'],
      "city": post_body['city'],
      "address": post_body['address'],
      "good_or_bad": post_body['good_or_bad'],
      "ok_or_not" : post_body['ok_or_not'],
      "enough_or_notenough": post_body['enough_or_notenough'],
      "mannerpoints": post_body['mannerpoints'],
      "mannerreason": post_body['mannerreason'],
      "easy_or_difficult": post_body['easy_or_difficult'],
      "explainpoints": post_body['explainpoints'],
      "explainreason": post_body['explainreason'],
      "suitable_or_long_or_short": post_body['suitable_or_long_or_short'],
      "timepoints": post_body['timepoints'],
      "timereason": post_body['timereason'],
    })
  
  return {
    "statusCode": 201,
    'headers': headers_options,
    "body": json.dumps({"insertId": post_body["ID"]})
  }

# メイン関数
# Lambda呼び出し時に最初に起動する関数
def handler(event, context):
  http_method = event['httpMethod']
  response = {}

  if http_method == 'POST':
      response = do_post(event)
    
  return response