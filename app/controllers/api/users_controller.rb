class Api::UsersController < ApplicationController

    def index
        # if current_user
        #     connection_ids = current_user.connections.to_a.map{|user| user.id}
        #     @users = User.all.to_a.select{|user| !connection_ids.include?(user.id) && user.id != current_user.id}
        # else
        #     @users = User.all
        # end
        @users = User.all

        render :index
    end

    def create 
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            render :show
        else
          render json: @user.errors.full_messages, status: 422
        end
    end 

    def update
        @user = User.find_by(id: params[:id])
        if @user.update(user_params)
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def user_params 
        params.require(:user).permit(
                                    :email, 
                                    :password, 
                                    :first_name, 
                                    :last_name,
                                    :pronouns,
                                    :headline,
                                    :about,
                                    :industry,
                                    :location_city,
                                    :location_state,
                                    :location_country,
                                    :headshot)
    end 
end
