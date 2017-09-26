"use strict";

var Promise = require("bluebird");
var helper = require("sendgrid").mail;

module.exports = {

	sendEmail: function (emaiInfo) {
		return new Promise(function (resolve, reject) {
			var fromEmail = new helper.Email(emailInfo.from);
			var toEmail = new helper.Email("dbthechain@gmail.com");
			var subject = new helper.Email(email.reason);
			var content = new helper.Content("text/plain", emailInfo.message);
			var mail = new helper.Mail(fromEmail, subject, toEmail, content);

			var sg = require("sendgrid")(process.env.SENDGRID_API_KEY);
			var request = sg.emptyRequest({
				method: "POST",
				path: "/v3/mail/send",
				body: body
			});

			sg.API(request, function (error, response) {
				if (error) {
					reject(error);
					return;
				}

				resolve(response.body);
			});
		});
	}
};