class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save 
            login(@user)
            render :show
        else
            # debugger
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
                                    :location_country)
    end 
end
