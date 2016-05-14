require 'sinatra/base'
require './controllers/application'

Dir.glob('./{controllers}/*.rb').each { |file| require file }

map('/') { run HomeController }
