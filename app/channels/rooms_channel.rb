class RoomsChannel < ApplicationCable::Channel
  def self.online_users(room)
    ActionCable.server.connections.filter_map do |conn| 
      conn.rooms.include?(room) && conn.current_user
    end.uniq
  end

  def subscribed
    @room = Room.find_by(id: params[:id])
    rooms << @room
    stream_for @room

    self.class.broadcast_to @room, 
      type: 'RECEIVE_ROOM_USER',
      user: current_user.slice(:id, :email, :first_name, :last_name) #need to update
  end

  def unsubscribed
    rooms.delete(@room)

    self.class.broadcast_to @room, 
      type: 'REMOVE_ROOM_USER',
      id: current_user.id
  end
end