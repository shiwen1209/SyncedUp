class Api::MessagesController < ApplicationController
    before_action :require_logged_in

    def create
        @message = Message.new(message_params)
    
        if @message.save
            RoomsChannel.broadcast_to(@message.room, @message)
            render :show, locals: { message: @message }
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
