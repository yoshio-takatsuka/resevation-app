// 家計簿情報
// 日付＋時間がキー
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId;
 
const KakeboSchema = new Schema({
  // author: ObjectId,
  p_date: String,          //
  kakebo_time: String,      // 実績時刻
  kakebo_kamoku: String,   // 科目
  kakebo_detail: String,      // 詳細
  kakebo_etc: String,    // その他
  kakebo_payKbn: String,      // 支払方法
  kakebo_kingaku: number,      // 金額
})

module.exports = mongoose.model('Kakebo', KakeboSchema)