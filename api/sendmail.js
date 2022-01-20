const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID)

exports.handler = async (event, context, callback) => {
	console.log(event, context, callback)
	const form = JSON.parse(event.body)
	const data = {
		to: process.env.DOMAIN,
		from: process.env.DOMAIN,
		subject: form.action,
		html: form.emailTemplate,
	}
	let response

	try {
		response = await sgMail.send(data)
		return {
			statusCode: 200,
			body: JSON.stringify({
				result: response.message,
			}),
		}
	} catch (error) {
		return {
			statusCode: error.statusCode || 500,
			body: JSON.stringify({
				error: error.message,
			}),
		}
	}
}

async function sendEmail(req, res) {
	try {
		// console.log("REQ.BODY", req.body);
		await sgMail.send({
			to: 'mannuarora7000@gmail.com', // Your email where you'll receive emails
			from: 'manuarorawork@gmail.com', // your website email address here
			subject: `${req.body.subject}`,
			html: `<div>You've got a mail</div>`,
		})
	} catch (error) {
		// console.log(error);
		return res.status(error.statusCode || 500).json({ error: error.message })
	}

	return res.status(200).json({ error: '' })
}

export default sendEmail
