module ApplicationHelper
    def data_br(data_us)
        data_us.strftime("%d/%m/%Y")
    end
    def hora_atual
        time = Time.new
        time.strftime("%k:%M:%S") 
    end 

    #Links
    #Bit
    #https://logodownload.org/wp-content/uploads/2017/06/bitcoin-logo-0-1.png

    #Eth
    #https://d33wubrfki0l68.cloudfront.net/10c3a479c1fbfbdb6a62952ba1b1d797d8e6abf4/dc925/static/6b935ac0e6194247347855dc3d328e83/cef8b/eth-diamond-black.png

    #Dollar
    #https://www.freepnglogos.com/uploads/dollar-sign-png/dollar-sign-shia-channel-24.png
    
    #Doge
    #https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=024


end
