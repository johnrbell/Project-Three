class ArticlesController < ApplicationController

	def index
		@article = Article.all
	end

	def create
		binding.pry
		# Article.create({title: params[:title], img_url: params[:img_url]})
		render :nothing => true 
	end

	def view
		@article = Article.find(params[:id])
	end

end