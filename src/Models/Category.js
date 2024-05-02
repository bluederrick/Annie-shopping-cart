import mongoose from 'mongoose';
import { randomUUID } from 'crypto';

const CategorySchema = mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, required: true },
  // color: { type: String, requried: true },
  // slug: { type: String, required: true },
  isFeatured: { type: Boolean, required: true },
  isVoided: { type: Boolean, required: true }

  // parentID: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'ProductCategory',
  //   default: null
  // }
});

export default mongoose.model('Category', CategorySchema);
