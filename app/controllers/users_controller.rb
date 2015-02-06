class UsersController < ApplicationController

	def index #user login page, also has a link to sign up as a new user
	end


	def new #new user sign up page, renders new.html.erb
	end


	def create #creates new user when user hits submit button in the sign up page
		new_user = User.new({name: params["name"], email: params["email"], password: params[:password]})
		new_user.save
		redirect_to '/articles'
  end

end