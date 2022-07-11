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
                                    :location_country,
                                    :location_postcode)
    end 
end
