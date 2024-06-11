import {
	Font,
	Head,
	Heading,
	Html,
	Preview,
	Row,
	Section,
	Text,
} from '@react-email/components';

interface VerificationEmailProps {
	username: string;
	otp: string;
}

export default function VerificationEmail({
	username,
	otp,
}: VerificationEmailProps) {
	return (
		<Html lang='en' dir='ltr'>
			<Head>
				<title>Verification Code</title>
				<Font
					fontFamily='Roboto'
					fallbackFontFamily='Verdana'
					webFont={{
						url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTu1kG.woff2',
						format: 'woff2',
					}}
					fontWeight={400}
					fontStyle='normal'
				/>
			</Head>
			<Preview>Here&apos;s your verification code: {otp}</Preview>
			<Section>
				<Row>
					<Heading as='h2'>Hello, {username},</Heading>
				</Row>
				<Row>
					<Text>
						Thank you registering.Please use the following verification code to
						complete your registration:
					</Text>
				</Row>
				<Row>
					<Text>{otp}</Text>
				</Row>
				<Row>
					<Text>Ifyou did not requestthis code,please ignore this email</Text>
				</Row>
			</Section>
		</Html>
	);
}
