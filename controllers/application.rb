class ApplicationController < Sinatra::Base

  require 'bundler'
  Bundler.require

  set :public_folder, File.expand_path('../../public', __FILE__)
  set :views, File.expand_path('../../views', __FILE__)

  not_found do
    erb :notfound
  end

  # global before/after filters
  before '/*' do

  end

  after '/*' do

  end

end
