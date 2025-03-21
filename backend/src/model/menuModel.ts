import mongoose, { Document, Schema } from "mongoose";

interface IMenu extends Document {
  title: string;
  description: string;
}

const MenuSchema = new Schema<IMenu>({
  title: { type: String, required: true },
  description: { type: String, required: true, unique: true },
});

const Menu = mongoose.model<IMenu>("Menu", MenuSchema);

export default Menu;
