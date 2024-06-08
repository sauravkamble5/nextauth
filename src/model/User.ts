import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
	username: string;
	email: string;
	password: string;
	verifyCode: string;
	verifyCodeExpiry: Date;
}

const UserSchema: Schema<User> = new Schema({
	username: {
		type: String,
		required: [true, 'Username is required'],
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please use a valid email address',
		],
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
	verifyCode: {
		type: String,
		required: [true, 'Verify Code is required'],
	},
	verifyCodeExpiry: {
		type: Date,
		required: [true, 'Verify Code Expiry is required'],
	},
});

const UserModel =
	(mongoose.models.User as mongoose.Model<User>) ||
	mongoose.model<User>('User', UserSchema);

  export default UserModel;