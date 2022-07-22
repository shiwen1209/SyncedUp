class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def index
        render :index
    end

    def show
        id1 = current_user.id
        id2 = params[:id].to_i # pass the opposit user id to param
        @messages = Message.all.to_a.select{|m| (m.sender_id == id1 && m.recipient_id == id2) || (m.sender_id == id2 && m.recipient_id = id1)}
        render :show
    end

    def create
        @message = Message.new(message_params)
    
        if @message.save
            # RoomsChannel.broadcast_to(@message.room, @message)
            render :show
            # , locals: { message: @message }
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def destroy
        @message = Message.find(params[:id])
        @message.destroy
        # Your code here
        render json: nil, status: :ok
    end

    private

    def message_params
        params.require(:message).permit(:sender_id, :recipient_id, :content)
    end
end
