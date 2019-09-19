module Api::V1
  class EmailsController < ApplicationController

    def send
      name,subject,body = params[:name],params[:subject],params[:body]

    end

  end
end
