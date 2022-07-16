class Api::ExperiencesController < ApplicationController
    def create
        @experience = Experience.new(experience_params)
        if @experience.save
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def update
        @experience = Experience.find_by(id: params[:id])
        if @experience.update(experience_params)
            render :show
        else 
            render json: @experience.errors.full_messages, status: 422
        end
    end

    def destroy
        debugger
        @experience = Experience.find_by(id: params[:id])

        if @experience.destroy
            render :show
        else
            render json: @experience.errors.full_messages, status: 422
        end
    end


    def experience_params
        params.require(:experience).permit(:user_id, :title, :company_name, :employment_type, :location, :start_date, :end_date, :current_job, :exp_type)
    end
end
