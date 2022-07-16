json.experience do
    json.extract! @experience, :id, 
                                :user_id, 
                                :title, 
                                :company_name, 
                                :employment_type, 
                                :location, 
                                :start_date, 
                                :end_date, 
                                :current_job,
                                :exp_type
end