var context = "http://localhost/nanoarthplus/"

function getSuccessNotificationmsg (msg) {
    $.notifyClose();
    $.notify({
                 // options
                 message: msg
             }, {
                 // settings
                 type     : 'success',
                 delay    : 3000,
                 placement: {
                     from : "bottom",
                     align: "right"
                 }
             });
}
function getErrorNotificationmsg (msg) {
    $.notifyClose();
    $.notify({
                 // options
                 message: msg
             }, {
                 // settings
                 type     : 'danger',
                 delay    : 3000,
                 placement: {
                     from : "bottom",
                     align: "right"
                 }
             });
}

function menu(){
		
	if(window.location.pathname.split('/')[2] === ""){
	
		$('.mainmenu li').removeClass('active');
		$('#home').addClass('active');
	}else if(window.location.pathname.split('/')[2] === "aboutus"){
		
		$('.mainmenu li').removeClass('active');
		$('#aboutus').addClass('active');
	}else if(window.location.pathname.split('/')[2] === "products"){
		
		$('.mainmenu li').removeClass('active');
		$('#products').addClass('active');
	}else if(window.location.pathname.split('/')[2] === "product"){
		
		$('.mainmenu li').removeClass('active');
		$('#products').addClass('active');
	}else if(window.location.pathname.split('/')[2] === "category"){
		
		$('.mainmenu li').removeClass('active');
		$('#cate').addClass('active');
	}else if(window.location.pathname.split('/')[2] === "contactus"){
		$('.mainmenu li').removeClass('active');
		$('#contact').addClass('active');
	}
}
	
function scrolling (target) {
    $('html,body').animate({
		   scrollTop: $("#" + target).offset().top
	   }, 1500);

}

function loading () {
    jQuery(".loader").show();
}

function fadeOutLoading () {
    jQuery(".loader").fadeOut("slow")
}

function getFooterContents() {
	loading();
    jQuery.ajax({
                    url        : context + '/Nano/categorieslimit/5',
                    type       : 'GET',
                    cache      : false,
                    contentType: "application/json",
                    dataType   : 'json',
                    success    : function (data) {
                        if (data.status == "SUCCESS") {
							var footerhtml = '';
                            jQuery.each(data.object,function(ind,row){
								footerhtml += "<li><a href='products/'"+row.cate_id+">"+row.name+"</a></li>";
							});
							jQuery('#footerlinks').append(footerhtml);
                        }else {
							getErrorNotification(verify(data.message));
                            fadeOutLoading();
						}
                    },

                    error: function (XMLHttpRequest, textStatus, errorThrown) {
							getErrorNotification(verify(data.message));
                            fadeOutLoading();
                    }

                });

}

function verify (str) {
    if (str == null || str == "") {
        return "-";
    } else {
        return str;
    }
}

function genericSearch(){
	var str = $('#search').val();
	if(str !== ""){
		window.location.href = "products?str="+str;
	}else{
		getErrorNotificationmsg("Please type some thing to search");
	}
}