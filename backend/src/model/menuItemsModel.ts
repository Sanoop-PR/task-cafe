import mongoose, { Document, Schema } from "mongoose";

interface IItem extends Document {
  menu:string;
  title: string;
  description: string;
  price: number;
}

const ItemSchema = new Schema<IItem>({
  menu: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const Item = mongoose.model<IItem>("items", ItemSchema);

export default Item;
