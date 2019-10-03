include SendGrid

module Api::V1
  class EmailsController < ApplicationController

    def send(thing="")

      from = Email.new(email: "test@example.com")
      subject = params[:s]
      to = Email.new(email: 'daniel.j.schneider88@gmail.com')
      params[:d] += "Sent from #{params[:e]}. \n"
      content = Content.new(type: 'text/plain', value: params[:d])
      mail = Mail.new(from, subject, to, content)
      sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
      response = sg.client.mail._('send').post(request_body: mail.to_json)
      puts "status code ", response.status_code
      puts "body ", response.body
      puts "header ", response.headers
      
      render(
        status: 200,
        json: response
      )
    end

  end
end
