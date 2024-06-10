import { z } from 'zod';

export const usernameValidation = z
	.string()
	.min(2, { message: 'Must be 2 or more characters long' })
	.max(20, { message: 'Must be 20 or fewer characters long' })
	.regex(/^[a-zA-Z0-9]+$/, {
		message: 'Username must not contain special character',
	});

export const signUpSchema = z.object({
	username: usernameValidation,
	email: z.string().email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(6, { message: 'password must be a at least 6 characters' }),
});
