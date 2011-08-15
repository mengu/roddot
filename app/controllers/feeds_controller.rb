require 'net/http'
require 'uri'

class FeedsController < ApplicationController

  def index
    redirect_to "/qxroddot/build/index.html"
  end

  def show
    @feed = Net::HTTP.get(URI.parse("http://www.reddit.com/r/"+params[:id]+"/.json?limit=100"))
    @reddit_feed = ActiveSupport::JSON.decode(@feed)
    @titles = []

    
    respond_to do |format|
      format.html
    end

  end

end

