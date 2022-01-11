const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});