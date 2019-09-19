module Api::V1
  class ProjectsController < ApplicationController

    def get_projects
      render(
        status: 200,
        json: Project.all
      )
    end

    def index
      connected = {connect: "Connected"}
      render(
        status:200,
        json: connected
      )
    end

  end
end
