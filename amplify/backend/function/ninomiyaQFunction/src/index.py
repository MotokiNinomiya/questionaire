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
table = dynamodb.Table('QuestionaireNinomiyaAPI' + '-' + env)

# Decimal型のデータをJSONに変換するための下処理を行う関数
def decimal_default_proc(obj):
    if isinstance(obj, Decimal):
        return float(obj)
    raise TypeError

# # HTTPメソッドがGETの際の処理
# # (テーブル構造によらず変更する必要なし)
# def do_get(event):
#   #全データ取得 
#   response = table.scan()

#   # responseオブジェクトから実際のデータを取得(Itemsは固定)
#   items = response.get("Items", [])
#   return {
#     "statusCode": 200,
#     'headers': headers_options,
#     "body": json.dumps(items
#     ,ensure_ascii=False,default=decimal_default_proc)
#   }

# # HTTPメソッドがGETでパラメータ付きの際の処理
# # (テーブル構造によらず変更する必要なし)
# def do_get_by_id(event):
#   # 主キー(id)をパス引数から参照
#   id = event["pathParameters"]["proxy"]

#   # Key属性と検索する値を指定してDBから項目を1件検索
#   response = table.get_item(Key={"id": id})

#   # responseオブジェクトから実際のデータを取得(Itemは固定)
#   item = response.get("Item", None)

#   # 項目が無かった場合は、未検出エラーコード(404)を返す
#   if item is None:
#     return {
#       "statusCode": 404,
#       'headers': headers_options,
#       "body": json.dumps({
#         "message": "Not Found"
#       })
#     }
#   else:
#     return {
#       "statusCode": 200,
#       'headers': headers_options,
#       "body": json.dumps(item,ensure_ascii=False,default=decimal_default_proc)
#     }

# HTTPメソッドがPOSTの際の処理
def do_post(event):
  # HTTPリクエストボディをオブジェクト化
  post_body = json.loads(event["body"])

  # データ追加
  # (TODO:テーブル構造に合わせて辞書内のキー名等を変更する事)

  table.put_item(
    Item = {
      "ID": post_body.get('newItem').get('ID'),
      "datetime": post_body.get('newItem').get('datetime'),
      "contractid": post_body.get('newItem').get('contractid'),
      "phonenumber": post_body.get('newItem').get('phonenumber'),
      "homephonenumber": post_body.get('newItem').get('homephonenumber'),
      "city": post_body.get('newItem').get('city'),
      "address": post_body.get('newItem').get('address'),
      "good_or_bad": post_body.get('newItem').get('good_or_bad'),
      "ok_or_not" : post_body.get('newItem').get('ok_or_not'),
      "enough_or_notenough": post_body.get('newItem').get('enough_or_notenough'),
      "mannerpoints": post_body.get('newItem').get('mannerpoints'),
      "mannerreason": post_body.get('newItem').get('mannerreason'),
      "easy_or_difficult": post_body.get('newItem').get('easy_or_difficult'),
      "explainpoints": post_body.get('newItem').get('explainpoints'),
      "explainreason": post_body.get('newItem').get('explainreason'),
      "suitable_or_long_or_short": post_body.get('newItem').get('suitable_or_long_or_short'),
      "timepoints": post_body.get('newItem').get('timepoints'),
      "timereason": post_body.get('newItem').get('timereason')
    })
  
  return {
    "statusCode": 201,
    'headers': headers_options,
    "body": json.dumps({"insertId": post_body["newItem"]["ID"]})
  }

# # HTTPメソッドがPUTの際の処理
# def do_put(event):
#   # 主キー(id)をパス引数から参照
#   id = event["pathParameters"]["proxy"]

#   # HTTPリクエストボディをオブジェクト化
#   update_body = json.loads(event["body"])

#   # データ変更
#   # (TODO:テーブル構造に合わせてUpdateExpressionと
#   #  ExpressionAttributeValuesを変更する事)
#   response = table.update_item(
#       Key={"id": id},
#       #更新対象のカラム名を指定。複数指定する場合は文字列の中をカンマ区切りで増やす
#       UpdateExpression="set feel_name=:feel_nameVal",
#       ExpressionAttributeValues={
#         #上記で記述したxxxxValの値を何処から取得するかを指定
#         ':feel_nameVal': update_body['feel_name']
#         #複数ある場合は行を増やして対応する
#       },
#       ReturnValues="UPDATED_NEW")

#   return {
#     "statusCode": 204,
#     'headers': headers_options,
#     "body": json.dumps({"update": response['Attributes']},ensure_ascii=False,default=decimal_default_proc)
#   }

# # HTTPメソッドがDELETEの際の処理
# # (テーブル構造によらず変更する必要なし)
# def do_delete(event):
#   # 主キー(id)をパス引数から参照
#   id = event["pathParameters"]["proxy"]

#   # Key属性と検索する値を指定してDBから項目を1件削除
#   response = table.delete_item(Key={"id": id})

#   return {
#       "statusCode": 204,
#       'headers': headers_options
#   }

# メイン関数
# Lambda呼び出し時に最初に起動する関数
def handler(event, context):
  http_method = event["httpmethod"]
  logger.info("http_method:%s" % http_method)

  path_parameters = event.get("pathParameters", None)
  logger.info("path_parameters:%s" % path_parameters)
  
  response = {}

  # リクエストされたHTTPメソッドに応じて処理を切り分ける
  # if http_method == "GET":
  #   if path_parameters is not None:
  #     response = do_get_by_id(event)
  #   else:
  #     response = do_get(event)
  if http_method == "POST":
    response = do_post(event)
  # elif http_method == "PUT":
  #   response = do_put(event)
  # elif http_method == "DELETE":
  #   response = do_delete(event)

  return response