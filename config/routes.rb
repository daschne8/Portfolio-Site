Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      get :projects, to: 'projects#get_projects'
      get :emails, to: 'emails#send'
    end
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end


end
