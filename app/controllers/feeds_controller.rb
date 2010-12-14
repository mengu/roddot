require 'net/http'
require 'uri'

class FeedsController < ApplicationController

  def index
    redirect_to "/qxroddot/source/index.html"
  end
  
  def show
    @feed = Net::HTTP.get(URI.parse("http://www.reddit.com/r/"+params[:id]+"/.json?limit=100"))
    @reddit_feed = ActiveSupport::JSON.decode(@feed)
    @titles = []
    for @sub_feed in @reddit_feed["data"]["children"]
      @title = '<div style="margin-bottom: 1px;"><a href="http://reddit.com'+@sub_feed["data"]["permalink"]+'" style="color: #000; text-decoration:none;" target="_blank">'+@sub_feed["data"]["title"]+'</a>'
      @url = @sub_feed["data"]["url"]
      if !@url.include?("r/"+params[:id])
        @title << ' [<a href="'+@sub_feed["data"]["url"]+'" target="_blank">+</a>]'
      end
      @title << "</div>"
      @titles << @title
    end
    respond_to do |format|
      format.html { render :text => @titles.join("<br>")}
    end
  end
  
end
