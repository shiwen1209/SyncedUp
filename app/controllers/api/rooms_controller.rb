class Api::RoomsController < ApplicationController
    before_action :require_logged_in, except: [:index]

    def index
        if current_user
            @rooms = Room.all.to_a.select{|room| room.owners.include?(current_user.id.to_s)}
            owners = [current_user.id]
            @rooms.each do |room|
                room.owners.each do |owner_id|
                    if owner_id != current_user.id 
                        owners<< owner_id.to_i
                    end
                end
            end
            @users = owners.map{|owner_id| User.find_by(id: owner_id)}
        else
            @rooms = []
            @users = []
        end
    end

    def show
        @room = Room.find(params[:id])
        @online_users = RoomsChannel.online_users(@room) << current_user
    end

    def create
        @room = Room.new(room_params)

        if @room.save
        render '_room', locals: { room: @room }
        else
        render json: @room.errors.full_messages, status: 422
        end
    end

    def destroy
        @room = Room.find(params[:id])
        @room.destroy
        render json: nil, status: :ok
    end

    private

    def room_params
        params.require(:room).permit(:name, :owner_id, :owners)
    end
end
