include SendGrid

module Api::V1
  class EmailsController < ApplicationController

    def send(thing="")

      from = Email.new(email: "test@example.com")
      to = Email.new(email: 'daniel.j.schneider88@gmail.com')
      subject = params[:s]
      params[:d] += "Sent from #{params[:e]}. \n"
      content = Content.new(type: 'text/plain', value: params[:d])
      mail = Mail.new(from, subject, to, content)
      puts ENV['SENDGRID_KEY']
      sg = SendGrid::API.new(api_key: ENV['SENDGRID_KEY'])
      response = sg.client.mail._('send').post(request_body: mail.to_json)

    end

  end
end
