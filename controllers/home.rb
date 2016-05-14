class HomeController < ApplicationController

  get '/' do
    erb :index
  end

  get '/templatefun' do
    erb :templatefun
  end

end
