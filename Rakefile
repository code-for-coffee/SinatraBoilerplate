require 'bundler'
require 'dotenv/tasks'
Bundler.require

Dotenv.load

ENV["RACK_ENV"] ||= "development"

namespace :server do
 desc "Start the server"
 task :start => [:environment] do
   system "bundle exec rackup"
 end
end
