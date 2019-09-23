class ContactMailer < ApplicationMailer
  default from: "daschne8@gmail.com"

  def sample_email(user)
    @user = user
    mail(to: @user.mail, subject: "sample email")
  end
end
