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
