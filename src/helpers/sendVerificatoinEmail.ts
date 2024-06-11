import { resend } from '@/lib/resend';
import VerificationEmail from '../../emails/VerificationEmails';
import { ApiResponse } from '@/types/ApiResponse';

export async function sendVerificationEmail(
	email: string,
	username: string,
	verifyCode: string
): Promise<ApiResponse> {
	try {
		await resend.emails.send({
			from: 'Saurav Kamble <onboarding@resend.dev>',
			to: email,
			subject: 'Mystery Message | Verification Code',
			react: VerificationEmail({ username, otp: verifyCode }),
		});

		return { success: true, message: 'Verification email send successfully' };
	} catch (emailError) {
		console.log('Error sending verification email', emailError);
		return { success: false, message: 'Failed to send verification email' };
	}
}
