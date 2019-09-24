include SendGrid

module Api::V1
  class EmailsController < ApplicationController

    def send(thing="")
      from = Email.new(email: 'test@example.com')
      to = Email.new(email: 'daniel.j.schneider88@gmail.com')
      subject = 'Sending with SendGrid is Fun'
      content = Content.new(type: 'text/plain', value: 'and easy to do anywhere, even with Ruby')
      mail = Mail.new(from, subject, to, content)

      sg = SendGrid::API.new(api_key: ENV['SENDGRID_KEY'])
      response = sg.client.mail._('send').post(request_body: mail.to_json)

    end

  end
end
