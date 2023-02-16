module ApplicationHelper
    def data_br(data_us)
        data_us.strftime("%d/%m/%Y")
    end
    def hora_atual
        time = Time.new
        time.strftime("%k:%M:%S") 
    end 
end
