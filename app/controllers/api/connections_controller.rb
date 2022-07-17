class Api::ConnectionsController < ApplicationController
    def create
        @connection = Connection.new(connection_params)
        if @connection.save
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end

    def destroy
        @connection = Connection.find_by(id: params[:id])

        if @connection.destroy
            render :show
        else
            render json: @connection.errors.full_messages, status: 422
        end
    end


    def connection_params
        params.require(:connection).permit(:user1_id, :user2_id)
    end
end
