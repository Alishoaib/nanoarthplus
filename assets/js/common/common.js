var query       = '';
var context     = getContext();
var logincaller = 360000;
var server      = getservername();
var previewurl  = "/admin/preview/#/";
function getContext () {
    if (window.location.pathname.indexOf("/", 1) == -1) {
        return window.location.pathname;
    } else {
        return window.location.pathname.substring(0, window.location.pathname.indexOf("/", 1));
    }

}

function getservername () {
    var urls = document.URL.split('/');
    return urls[0] + "/" + urls[1] + "/" + urls[2] + "/";
}
function getTimeStamp () {
    var cDate = new Date();
    var cTime = cDate.getTime();
    return '?_=' + cTime;
}
function verify (str) {
    if (str == null || str == "") {
        return "-";
    } else {
        return str;
    }
}
function varify (str) {
    if (str == null || str == 'null') {
        return "";
    } else {
        return str;
    }
}
function selectPicker () {
    $(".select2").select2({
                              minimumResultsForSearch: Infinity
                          });
}
function getSuccessNotification (msg) {
    getSuccessNotificationmsg(msg);
}
function getErrorNotification (row) {
    getErrorNotificationmsg(row);
}

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

function setPageHeading (str) {
    jQuery("#page_heading").html(str);
}


function resetSelect2 () {
    jQuery(".select2").select2("val", "");
}
function cancelAction () {
    jQuery("select").val("");
}
function fadeOutLoading () {
    /*setTimeout(function () {jQuery(".loader").fadeOut("slow");}, 5000)*/
    jQuery(".loader").fadeOut("slow")
}
function loading () {
    jQuery(".loader").show();
}

function slimScroll () {
    $('.right_scroller').slimScroll({
                                        allowPageScroll: true
                                    });

}


function datePicker () {
    $(".date").datepicker({
                              changeMonth: true,
                              changeYear : true,
                              dateFormat : 'd MM, y'
                          });
}

function rightslider () {


    function _init () {
        "use strict";
        $.AdminLTE.layout = {
            activate  : function () {
                var a = this;
                a.fix(),
                    a.fixSidebar(),
                    $(window, ".wrapper").resize(function () {
                        a.fix(),
                            a.fixSidebar()
                    })
            },
            fix       : function () {
                var a = $(".main-header").outerHeight() + $(".main-footer").outerHeight(),
                    b = $(window).height(),
                    c = $(".sidebar").height();
                if ($("body").hasClass("fixed")) {
                    $(".content-wrapper, .right-side").css("min-height",
                                                           b -
                                                           $(".main-footer").outerHeight());
                } else {
                    var d;
                    b >= c ? ($(".content-wrapper, .right-side").css("min-height", b - a), d =
                        b - a)
                        : ($(".content-wrapper, .right-side").css("min-height", c), d = c);
                    var e = $($.AdminLTE.options.controlSidebarOptions.selector);
                    "undefined" != typeof e && e.height() > d &&
                    $(".content-wrapper, .right-side").css("min-height", e.height())
                }
            },
            fixSidebar: function () {
                return $("body").hasClass("fixed") ? ("undefined" == typeof $.fn.slimScroll &&
                                                      window.console && window.console.error(
                    "Error: the fixed layout requires the slimscroll plugin!"), void($.AdminLTE.options.sidebarSlimScroll &&
                                                                                     "undefined" !=
                                                                                     typeof $.fn.slimScroll &&
                                                                                     ($(".sidebar").slimScroll(
                                                                                         {
                                                                                             destroy: !0
                                                                                         }).height(
                                                                                         "auto"), $(
                                                                                         ".sidebar").slimscroll(
                                                                                         {
                                                                                             height: $(
                                                                                                 window).height() -
                                                                                                     $(".main-header").height() +
                                                                                                     "px",
                                                                                             color : "rgba(0,0,0,0.2)",
                                                                                             size  : "3px"
                                                                                         }))))
                    : void("undefined" != typeof $.fn.slimScroll && $(".sidebar").slimScroll({
                                                                                                 destroy: !0
                                                                                             }).height(
                    "auto"))
            }
        },
            $.AdminLTE.pushMenu = {
                activate     : function (a) {
                    var b = $.AdminLTE.options.screenSizes;
                    $(a).on("click", function (a) {
                        a.preventDefault(),
                            $(window).width() > b.sm - 1 ? $("body").hasClass(
                                "sidebar-collapse")
                                ? $(
                                "body").removeClass("sidebar-collapse").trigger(
                                "expanded.pushMenu")
                                : $("body").addClass("sidebar-collapse").trigger(
                                "collapsed.pushMenu")
                                : $("body").hasClass("sidebar-open") ? $("body").removeClass(
                                "sidebar-open").removeClass("sidebar-collapse").trigger(
                                "collapsed.pushMenu") : $("body").addClass(
                                "sidebar-open").trigger(
                                "expanded.pushMenu")
                    }),
                        $(".content-wrapper").click(function () {
                            $(window).width() <= b.sm - 1 &&
                            $("body").hasClass("sidebar-open") &&
                            $("body").removeClass("sidebar-open")
                        }),
                    ($.AdminLTE.options.sidebarExpandOnHover ||
                     $("body").hasClass("fixed") && $("body").hasClass("sidebar-mini")) &&
                    this.expandOnHover()
                },
                expandOnHover: function () {
                    var a = this,
                        b = $.AdminLTE.options.screenSizes.sm - 1;
                    $(".main-sidebar").hover(function () {
                                                 $("body").hasClass("sidebar-mini") &&
                                                 $("body").hasClass("sidebar-collapse") &&
                                                 $(window).width() > b && a.expand()
                                             },
                                             function () {
                                                 $("body").hasClass("sidebar-mini") &&
                                                 $("body").hasClass(
                                                     "sidebar-expanded-on-hover") &&
                                                 $(window).width() > b && a.collapse()
                                             })
                },
                expand       : function () {
                    $("body").removeClass("sidebar-collapse").addClass(
                        "sidebar-expanded-on-hover")
                },
                collapse     : function () {
                    $("body").hasClass("sidebar-expanded-on-hover") &&
                    $("body").removeClass("sidebar-expanded-on-hover").addClass(
                        "sidebar-collapse")
                }
            },
            $.AdminLTE.tree = function (a) {
                var b = this,
                    c = $.AdminLTE.options.animationSpeed;
                $(document).on("click", a + " li a", function (a) {
                    var d = $(this),
                        e = d.next();
                    if (e.is(".treeview-menu") && e.is(":visible")) {
                        e.slideUp(c, function () {
                            e.removeClass("menu-open")
                        }),
                            e.parent("li").removeClass("active");
                    } else if (e.is(".treeview-menu") && !e.is(":visible")) {
                        var f = d.parents("ul").first(),
                            g = f.find("ul:visible").slideUp(c);
                        g.removeClass("menu-open");
                        var h = d.parent("li");
                        e.slideDown(c, function () {
                            e.addClass("menu-open"),
                                f.find("li.active").removeClass("active"),
                                h.addClass("active"),
                                b.layout.fix()
                        })
                    }
                    e.is(".treeview-menu") && a.preventDefault()
                })
            },
            $.AdminLTE.controlSidebar = {
                activate      : function () {


                    var a = this,
                        b = $.AdminLTE.options.controlSidebarOptions,
                        c = $(b.selector),

                        d = $(b.toggleBtnSelector);
                    d.on("click", function (d) {

                        d.preventDefault(),
                            c.hasClass("control-sidebar-open") ||
                            $("body").hasClass("control-sidebar-open") ? a.close(c, b.slide)
                                : a.open(c,
                                         b.slide)
                    });
                    var e = $(".control-sidebar-bg");
                    a._fix(e),
                        $("body").hasClass("fixed") ? a._fixForFixed(c) : $(
                            ".content-wrapper, .right-side").height() < c.height() &&
                                                                          a._fixForContent(c)
                },
                open          : function (a, b) {

                    jQuery(".cross-btn").toggle();
                    b ? a.addClass("control-sidebar-open") : $("body").addClass(
                        "control-sidebar-open")
                    /*custom changes*/
                    $('#overlaydiv').show();
                    a.preventDefault();
                    b.preventDefault();
                    /////////////////////////
                },
                close         : function (a, b) {

                    jQuery(".cross-btn").toggle();
                    b ? a.removeClass("control-sidebar-open") : $("body").removeClass(
                        "control-sidebar-open")
                    /*custom changes*/
                    $('#overlaydiv').hide();
                    a.preventDefault();
                    b.preventDefault();
                    /////////////////////////

                },
                _fix          : function (a) {

                    var b = this;
                    $("body").hasClass("layout-boxed") ? (a.css("position",
                                                                "absolute"), a.height(
                        $(".wrapper").height()), $(window).resize(function () {
                        b._fix(a)
                    })) : a.css({
                                    position: "fixed",
                                    height  : "auto"
                                })
                },
                _fixForFixed  : function (a) {

                    a.css({
                              position        : "fixed",
                              "max-height"    : "100%",
                              overflow        : "auto",
                              "padding-bottom": "50px"
                          })
                },
                _fixForContent: function (a) {

                    $(".content-wrapper, .right-side").css("min-height", a.height())
                }
            },
            $.AdminLTE.boxWidget = {
                selectors     : $.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,
                icons         : $.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,
                animationSpeed: $.AdminLTE.options.animationSpeed,
                activate      : function (a) {
                    var b = this;
                    a || (a = document),
                        $(a).on("click", b.selectors.collapse, function (a) {
                            a.preventDefault(),
                                b.collapse($(this))
                        }),
                        $(a).on("click", b.selectors.remove, function (a) {
                            a.preventDefault(),
                                b.remove($(this))
                        })
                },
                collapse      : function (a) {
                    var b = this,
                        c = a.parents(".box").first(),
                        d = c.find(
                            "> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");
                    c.hasClass("collapsed-box") ? (a.children(":first").removeClass(
                        b.icons.open).addClass(b.icons.collapse), d.slideDown(b.animationSpeed,
                                                                              function () {
                                                                                  c.removeClass(
                                                                                      "collapsed-box")
                                                                              })) : (a.children(
                        ":first").removeClass(b.icons.collapse).addClass(
                        b.icons.open), d.slideUp(
                        b.animationSpeed, function () {
                            c.addClass("collapsed-box")
                        }))
                },
                remove        : function (a) {
                    var b = a.parents(".box").first();
                    b.slideUp(this.animationSpeed)
                }
            }
    }

    if ("undefined" == typeof jQuery) throw new Error("AdminLTE requires jQuery");
    $.AdminLTE = {},
        $.AdminLTE.options = {
            navbarMenuSlimscroll     : !0,
            navbarMenuSlimscrollWidth: "3px",
            navbarMenuHeight         : "200px",
            animationSpeed           : 500,
            sidebarToggleSelector    : "[data-toggle='offcanvas']",
            sidebarPushMenu          : !0,
            sidebarSlimScroll        : !0,
            sidebarExpandOnHover     : !1,
            enableBoxRefresh         : !0,
            enableBSToppltip         : !0,
            BSTooltipSelector        : "[data-toggle='tooltip']",
            enableFastclick          : !0,
            enableControlSidebar     : !0,
            controlSidebarOptions    : {
                toggleBtnSelector: "[data-toggle='control-sidebar']",
                selector         : ".control-sidebar",
                slide            : !0
            },
            enableBoxWidget          : !0,
            boxWidgetOptions         : {
                boxWidgetIcons    : {
                    collapse: "fa-minus",
                    open    : "fa-plus",
                    remove  : "fa-times"
                },
                boxWidgetSelectors: {
                    remove  : '[data-widget="remove"]',
                    collapse: '[data-widget="collapse"]'
                }
            },
            directChat               : {
                enable               : !0,
                contactToggleSelector: '[data-widget="chat-pane-toggle"]'
            },
            colors                   : {
                lightBlue: "#3c8dbc",
                red      : "#f56954",
                green    : "#00a65a",
                aqua     : "#00c0ef",
                yellow   : "#f39c12",
                blue     : "#0073b7",
                navy     : "#001F3F",
                teal     : "#39CCCC",
                olive    : "#3D9970",
                lime     : "#01FF70",
                orange   : "#FF851B",
                fuchsia  : "#F012BE",
                purple   : "#8E24AA",
                maroon   : "#D81B60",
                black    : "#222222",
                gray     : "#d2d6de"
            },
            screenSizes              : {
                xs: 480,
                sm: 768,
                md: 992,
                lg: 1200
            }
        },
        $(function () {
            "use strict";
            $("body").removeClass("hold-transition"),
            "undefined" != typeof AdminLTEOptions &&
            $.extend(!0, $.AdminLTE.options, AdminLTEOptions);
            var a = $.AdminLTE.options;
            _init(),
                $.AdminLTE.layout.activate(),
                $.AdminLTE.tree(".sidebar"),
            a.enableControlSidebar && $.AdminLTE.controlSidebar.activate(),
            a.navbarMenuSlimscroll && "undefined" != typeof $.fn.slimscroll &&
            $(".navbar .menu").slimscroll({
                                              height       : a.navbarMenuHeight,
                                              alwaysVisible: !1,
                                              size         : a.navbarMenuSlimscrollWidth
                                          }).css("width", "100%"),
            a.sidebarPushMenu && $.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),
            a.enableBSToppltip && $("body").tooltip({
                                                        selector: a.BSTooltipSelector
                                                    }),
            a.enableBoxWidget && $.AdminLTE.boxWidget.activate(),
            a.enableFastclick && "undefined" != typeof FastClick &&
            FastClick.attach(document.body),
            a.directChat.enable &&
            $(document).on("click", a.directChat.contactToggleSelector, function () {
                var a = $(this).parents(".direct-chat").first();
                a.toggleClass("direct-chat-contacts-open")
            }),
                $('.btn-group[data-toggle="btn-toggle"]').each(function () {
                    var a = $(this);
                    $(this).find(".btn").on("click", function (b) {
                        a.find(".btn.active").removeClass("active"),
                            $(this).addClass("active"),
                            b.preventDefault()
                    })
                })
        }),
        function (a) {
            "use strict";
            a.fn.boxRefresh = function (b) {
                function c (a) {
                    a.append(f),
                        e.onLoadStart.call(a)
                }

                function d (a) {
                    a.find(f).remove(),
                        e.onLoadDone.call(a)
                }

                var e = a.extend({
                                     trigger: ".refresh-btn",
                                     source : "",
                                     onLoadStart: function (a) {
                                         return a
                                     },
                                     onLoadDone: function (a) {
                                         return a
                                     }
                                 },
                                 b),
                    f = a(
                        '<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');
                return this.each(function () {
                    if ("" === e.source) {
                        return void(window.console && window.console.log(
                            "Please specify a source first - boxRefresh()"));
                    }
                    var b = a(this),
                        f = b.find(e.trigger).first();
                    f.on("click", function (a) {
                        a.preventDefault(),
                            c(b),
                            b.find(".box-body").load(e.source, function () {
                                d(b)
                            })
                    })
                })
            }
        }(jQuery),
        function (a) {
            "use strict";
            a.fn.activateBox = function () {
                a.AdminLTE.boxWidget.activate(this)
            }
        }(jQuery),
        function (a) {
            "use strict";
            a.fn.todolist = function (b) {
                var c = a.extend({
                                     onCheck  : function (a) {
                                         return a
                                     },
                                     onUncheck: function (a) {
                                         return a
                                     }
                                 },
                                 b);
                return this.each(function () {
                    "undefined" != typeof a.fn.iCheck ? (a("input", this).on("ifChecked",
                                                                             function () {
                                                                                 var b = a(
                                                                                     this).parents(
                                                                                     "li").first();
                                                                                 b.toggleClass(
                                                                                     "done"),
                                                                                     c.onCheck.call(
                                                                                         b)
                                                                             }), a("input",
                                                                                   this).on(
                        "ifUnchecked", function () {
                            var b = a(this).parents("li").first();
                            b.toggleClass("done"),
                                c.onUncheck.call(b)
                        })) : a("input", this).on("change", function () {
                        var b = a(this).parents("li").first();
                        b.toggleClass("done"),
                            a("input", b).is(":checked") ? c.onCheck.call(b) : c.onUncheck.call(
                                b)
                    })
                })
            }
        }(jQuery);
}

function closecrossbtn () {

    // rightslider();
    $('#overlaydiv').hide();
}

function scrolling (target) {
    $('html,body').animate({
                               scrollTop: $("#" + target).offset().top
                           }, 1500);

}

function fileUploadSettings (mutiple, path, maxsize) {
    var image_upload_settings = {
        url           : context + "/" + path,
        cache         : false,
        dragDrop      : true,
        fileName      : "file",
        allowedTypes  : "jpg,png,gif,bmp",
        returnType    : "json",
        onSuccess     : function (files, data, xhr) {
            if (data != '[object Object]') {
                var filename = jQuery('#file_name').val();
                jQuery('#file_name').val(data + ',' + filename);
            } else {
                var filename = jQuery('#file_name').val();
                jQuery('#file_name').val(files[0] + ',' + filename);
            }
        },
        showDelete    : true,
        showDone      : false,
        showProgress  : true,
        maxFileSize   : maxsize,
        multiple      : mutiple,
        deleteCallback: function (data, pd) {
            var x = jQuery('#file_name').val();
            if (x.indexOf(data.fileName) >= 0) {
                x = x.replace(data.fileName + ',', '');
                jQuery('#file_name').val(x);
            }
            pd.statusbar.hide(); //You choice to hide/not.
        },
        onError       : function (files, status, errMsg) {
            jQuery("#eventsmessage").html(jQuery("#eventsmessage").html() +
                                          "<br/>Error for: " +
                                          JSON.stringify(files));
        }
    }

    var uploadObj = jQuery(".mulitplefileuploader").uploadFile(
        image_upload_settings);

}

function fileUploadSettingsmultiple (mutiple, path, maxsize, clas, fileid) {

    var image_upload_settings = {
        url           : context + "/" + path,
        cache         : false,
        dragDrop      : true,
        fileName      : "file",
        allowedTypes  : "jpg,png,gif,bmp",
        returnType    : "json",
        onSuccess     : function (files, data, xhr) {
            if (data != '[object Object]') {
                var filename = jQuery('#' + fileid).val();
                jQuery('#' + fileid).val(data + ',' + filename);
            } else {
                var filename = jQuery('#' + fileid).val();
                jQuery('#' + fileid).val(files[0] + ',' + filename);
            }
            //jQuery('#all_files').val(uploadObj.getResponses());
        },
        showDelete    : true,
        showDone      : false,
        showProgress  : true,
        maxFileSize   : maxsize,
        multiple      : mutiple,
        deleteCallback: function (data, pd) {
            var x = jQuery('#' + fileid).val();
            if (x.indexOf(data.fileName) >= 0) {
                x = x.replace(data.fileName + ',', '');
                jQuery('#' + fileid).val(x);
            }
            pd.statusbar.hide(); //You choice to hide/not.
        },
        onError       : function (files, status, errMsg) {
            jQuery("#eventsmessage").html(jQuery("#eventsmessage").html() +
                                          "<br/>Error for: " +
                                          JSON.stringify(files));
        }
    }

    var uploadObj = jQuery("." + clas).uploadFile(
        image_upload_settings);
}

function validatefield (field, msg) {
    if (field == "" || field == undefined) {
        getErrorNotificationmsg(msg);
        return false;
    }
}

function validate (field) {
    if (field != undefined && field != "" && field != null) {
        return true;
    } else {
        return false;
    }
}

$(document).ready(function () {
    $('.sidebar-toggle').click(function () {
        $('.left_logo').toggle();
    });
});

function enablessave () {
    $('.red_button').attr("disabled", false);
}

function disablesave () {
    $('.red_button').click(function () {
        $('.red_button').attr("disabled", "disabled");
        setTimeout(function () {
            enablessave()
        }, 3000);
    });
}
function active (str) {
    if (str != '' && str != undefined) {
        $("a").removeClass("li_a_active")
        $("#" + str).addClass("li_a_active");
    }
    jQuery.ajax({
                    url    : context + '/getSectionList',
                    type   : 'GET',
                    cache  : false,
                    success: function (data) {
                        if (data.status == "SUCCESS") {
                            var currenturl = window.location.href;
                            currenturl     = currenturl.split("/");
                            var section    = currenturl[5];
                            /*sectionno      = section.charAt(section.length - 1);
                             sectionno      = Number(Number(sectionno) + 2);
                             section        = section.slice(0, -1) + sectionno;*/

                            $.each(data.object, function (index, row) {

                                /*if (section == row.sectionName) {
                                 setPageHeading(row.sectionName + " -" + row.menuName);
                                 getSuccessNotificationmsg(row.sectionName + " " + row.menuName);
                                 }*/

                                if (row.sectionName == "section3") {

                                    $('#awsomeprod').html(row.sectionName +
                                                          "<span class = 'inner-right-content pull-right'>(" +
                                                          row.menuName + ")</span>");


                                }
                                if (row.sectionName == "section4") {
                                    $('#juvexin').html(row.sectionName +
                                                       "<span class ='inner-right-content pull-right'>(" +
                                                       row.menuName + ")</span>");

                                }
                                if (row.sectionName == "section5") {
                                    $('#about').html(row.sectionName +
                                                     "<span class = 'inner-right-content" +
                                                     " pull-right'>(" + row.menuName + ")</span>");

                                }

                                if (row.sectionName == "section6") {
                                    $('#stats').html(row.sectionName +
                                                     "<span class = 'inner-right-content" +
                                                     " pull-right'>(" + row.menuName + ")</span>");

                                }
                                if (row.sectionName == "section7") {
                                    $('#team').html(row.sectionName +
                                                    "<span class = 'inner-right-content pull-right'>(" +
                                                    row.menuName + ")</span>");

                                }
                                if (row.sectionName == "section8") {
                                    $('#press').html(row.sectionName +
                                                     "<span class = 'inner-right-content pull-right'>(" +
                                                     row.menuName + ")</span>");

                                }
                                if (row.sectionName == "section9") {
                                    $('#contact').html(row.sectionName +
                                                       "<span class = 'inner-right-content" +
                                                       " pull-right'>(" + row.menuName + ")</span>");

                                }

                            });

                        }
                    }
                });


}

function validateEmail (email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function phonenumber (nos) {
    //var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //var phoneno  = /^\+?([0-9]{1})\)?[.. ]?([0-9]{3})?[.. ]?([0-9]{3})[.. ]?([0-9]{7})$/;
    //var phonenos = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

    var phonenos = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9()]*$/g;

    //var chk = /^[0-9-.+() ]+$/;
    var chknos = nos.split("");
    for (var i = 0; i <= chknos.length; i++) {

        if ((chknos[i] == '.' && chknos[i + 1] == '.') ||
            (chknos[i] == '+' && chknos[i + 1] == '+') ||
            (chknos[i] == '(' && chknos[i + 1] == ')') ||
            (chknos[i] == '(' && chknos[i + 1] == '(') ||
            (chknos[i] == ')' && chknos[i + 1] == ')') ||
            (chknos[i] == ')' && chknos[i + 1] == '(')) {
            return false;
        }
    }
    if (nos.match(phonenos) && nos.slice(-1) != '.' && nos.slice(-1) != ')' &&
        nos.slice(-1) != '(') {

        return true;
    }
    else {
        return false;
    }
}


/*function numberonly(inputtxt) {
 if (inputtxt != "" && inputtxt != undefined) {
 var phoneno = /^[0-9]+$/;
 if (inputtxt.match(phoneno)) {
 return true;
 }
 else {
 $('#' + ids).val('');
 }
 }

 }*/

function fileUploadSettingsdynamic (mutiple, path, maxsize, hiddenFile, uploaderDivclass,
                                    allowtype, hideid) {
    var image_upload_settings = {
        url           : context + "/" + path,
        cache         : false,
        dragDrop      : true,
        fileName      : "file",
        hideid        : hideid,
        allowedTypes  : allowtype,
        returnType    : "json",
        onSuccess     : function (files, data, xhr) {
            //if (data != '[object Object]') {
            var filename = jQuery('#' + hiddenFile).val();
            if (!mutiple) {
                jQuery('#' + hiddenFile).val(data.fileName + ',' + filename);
            }
            $('#' + hideid).hide();
        },
        showDelete    : true,
        showDone      : false,
        showProgress  : true,
        maxFileSize   : maxsize,
        multiple      : mutiple,
        deleteCallback: function (data, pd) {
            var x = jQuery('#' + hiddenFile).val();
            if (x.indexOf(data.fileName) >= 0) {
                x = x.replace(data.fileName + ',', '');
                jQuery('#' + hiddenFile).val(x);
            }
            pd.statusbar.hide(); //You choice to hide/not.
            $('#' + hideid).show();
        },
        onError       : function (files, status, errMsg) {
            jQuery("#eventsmessage").html(jQuery("#eventsmessage").html() +
                                          "<br/>Error for: " +
                                          JSON.stringify(files));
        }
    }

    var uploadObj = jQuery("." + uploaderDivclass).uploadFile(
        image_upload_settings);

}
function unnullfiels (str) {
    if (str == null) {
        return "";
    } else {
        return str;
    }
}

function validateURL (value) {
    return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(
        value);
}

function validateTextArea (value, msg, totallength) {
    if (value != undefined) {
        var length = value.length;
        if (length > totallength) {
            getErrorNotificationmsg(msg);
            return false;
        } else {
            return true;
        }
    }
}
function phoneValidation (event) {
    var key    = event.which;
    var target = event.target || event.srcElement;
    $('input[type="text"]').bind("paste", function (e) {
        e.preventDefault();
    });
    if (key > 47 && key < 58 || (key == 8) || (key == 32) || (key == 13) || (key == 0) ||
        (key == 43) || (key == 40) || (key == 41) || (key == 46)) {
        return true;
    }
    else {
        event.preventDefault();
    }
}
function validateSequence (event, id) {
    var key = event.which;
    if (key > 47 && key < 58 || (key == 8) || (key == 13) || (key == 0)) {
        var val = $('#' + id).val();
        if (val.length > 2 && key != 0 && key != 8) {
            event.preventDefault();
        }
    } else {
        event.preventDefault();
    }
}
function numbers (event) {
    var key = event.which;
    if (key > 47 && key < 58 || (key == 8) || (key == 32) || (key == 13)) {
        return true;
    } else {
        event.preventDefault();
    }
}
function price (event) {
    var key = event.which;
    $('.number').bind("paste", function (e) {
        e.preventDefault();
    });
    if (key > 47 && key < 58 || (key == 8) || (key == 13) || (key == 46)) {
        return true;
    } else {
        event.preventDefault();
    }

}
function validateCount (event) {
    var key = event.which;
    if (key > 47 && key < 58 || (key == 32) || (key == 13) || (key == 43) || (key == 8)) {
        return true;
    } else {
        event.preventDefault();
    }
}

function characterOnly (event) {
    var key = event.which;
    if (key > 64 && key < 91 || key > 96 && key < 123 || (key == 32) || (key == 13) || (key == 8)) {
        return true;
    } else {
        event.preventDefault();
    }
}
function validateFullName (event) {
    var key = event.which;
    if (!(key > 64 && key < 91 || key > 96 && key < 123 || (key == 13) || (key == 8))) {
        event.preventDefault();
    }
}

//onepage methode start from here========
function slider () {

    $('#adaptive-slider').lightSlider({
                                          adaptiveHeight: true,
                                          slideMargin   : 0,
                                          item          : 1,
                                          mode          : 'fade',
                                          loop          : true,
                                          auto          : true,
                                          controls      : false,
                                          pager         : true
                                      });

}

function productslider () {
    $('#awesome_product_slider').lightSlider({
                                                 adaptiveHeight: true,
                                                 item          : 1,
                                                 slideMargin   : 0,
                                                 loop          : true,
                                                 controls      : true,
                                                 auto          : true,
                                                 enableDrag    : true
                                             });
    $('#awesome_slider02').lightSlider({
                                           adaptiveHeight: true,
                                           item          : 1,
                                           slideMargin   : 0,
                                           auto          : true,
                                           loop          : true,
                                           controls      : true,
                                           enableDrag    : true
                                       });
}

function contentslider () {
    $('#content-slider').lightSlider({
                                         item      : 6,
                                         loop      : true,
                                         auto      : true,
                                         slideMove : 1,
                                         responsive: [{
                                             breakpoint: 800,
                                             settings  : {
                                                 item     : 3,
                                                 slideMove: 1,
                                                 loop     : true,
                                                 auto     : true
                                             }
                                         },
                                                      {
                                                          breakpoint: 480,
                                                          settings  : {
                                                              item     : 2,
                                                              slideMove: 1,
                                                              loop     : true,
                                                              auto     : true
                                                          }
                                                      },
                                                      {
                                                          breakpoint: 320,
                                                          settings  : {
                                                              item     : 1,
                                                              slideMove: 1,
                                                              loop     : true,
                                                              auto     : true

                                                          }
                                                      }],
                                         easing    : 'cubic-bezier(0.25, 0, 0.25, 1)',
                                         speed     : 600,
                                     });
}

function smoothScrolling () {
    $('.hvr-bounce-to-bottom').click(function () {
        hideDropDowns();
        addRemoveMobileNav();
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            jQuery('#cd-primary-nav').find('li').removeClass('top_nav_active');
            jQuery(this).parent('li').addClass('top_nav_active');
            var target = $(this.hash);
            if (target.length > 0) {
                target = target.length ? target : $('[name=' + this.hash.slice(40) + ']');
                if (target.length) {
                    $('html,body').animate({
                                               scrollTop: target.offset().top
                                           }, 1500);
                    return false;
                }
            }
        }


    });

}

function setlang (lng, typ) {
    var sel = '';
    if (typ == 1) {
        sel = '<select id = "basic" class = "selectpicker "><option>' + lng +
              '</option></select>';
        $(".top_lang_option").html(sel);
    } else {
        sel = '<select id = "basic" class = "selectpicker ">';
        $.each(lng, function (index, row) {
            sel += '<option>' + row.name + '</option>';
        });
        sel += '</select>'
        $(".top_lang_option").html(sel);
    }

}

function setheader (data) {
    if (data.logo != '' && data.logo != undefined) {
        $('.navbar-brand').html('<img src = "' + data.logo +
                                '" alt = "GK Hair" style="width: 74px;">');
    }
    if (data.email != '' && data.email != undefined) {
        $('.hide_this').html('<a href = "mailto:' + data.email +
                             '" class = "hide_this"><img src ="../onepagesource/images/mail-icon.png">' +
                             data.email + '</a>');
    }
    if (data.phone != '' && data.phone != undefined) {
        $('#phone').html('<a href = "tel:' + data.phone +
                         '" class = "hide_this"><img src="../onepagesource/images/phone-icon.png" >' +
                         data.phone + ' </a>');
    }


}

$(document).click(function (e) {

    if ($(e.target).closest("#selectSearch").length > 0) {
        $("#search").focus();
        $('.menueselecto').toggle();
    } else if ($(e.target).closest(".searchSelecto").length > 0) {
        $('.menueselecto').show();
    } else {
        $(".menueselecto").hide();
    }
});

$(document).click(function (e) {
    if ($(e.target).closest("#moduleselectSearch").length > 0) {
        $('#menueselecto').toggle();
    } else if ($(e.target).closest("#searchSelectomodule").length > 0) {
        $('#menueselecto').show();
    } else {
        $("#menueselecto").hide();
    }
});
function selectoption (obj) {
    $('#selectSearch').text(obj);
}
function getCurrentDate () {
    var formatted = $.datepicker.formatDate("M d, yy", new Date());
    return formatted;
}
function printTableData (id) {
    var flag       = 1;
    var divToPrint = document.getElementById(id);
    var print      = "Print";
    newWin         = window.open("");
    newWin.document.write('<html><head><title>' + print + '</title></head><body>');
    if (flag == 1) {
        jQuery(".hideActions").hide();
    }
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
    jQuery(".hideActions").show();
}
function changelimit (response, totalPages, limit) {
    if (response > 0) {
        $('#emptyLabl').css('display', 'none');

        $('#emptyLablTab2').css('display', 'none');
        $('#emptyLablTab3').css('display', 'none');
    } else {
        $('#emptyLabl').css('display', 'block');

        $('#emptyLablTab2').css('display', 'block');
        $('#emptyLablTab3').css('display', 'block');
    }
    if (response > limit) {
        $('#pagination').css('display', 'block');

        $('#paginationTab2').css('display', 'block');
        $('#paginationTab3').css('display', 'block');
        if (response % limit == 0) {
            var totalPages = response / limit;
        }
        else {
            return totalPages = Math.floor(response / limit) + 1;
        }
    } else {
        $('#pagination').css('display', 'none');
        $('#paginationTab2').css('display', 'none');
        $('#paginationTab3').css('display', 'none');
    }
}
function changelimits (response, limit, currentPage) {
    if (response > 0) {
        $('#emptyLabl').css('display', 'none');

        $('#emptyLablTab2').css('display', 'none');
        $('#emptyLablTab3').css('display', 'none');
    } else {
        $('#emptyLabl').css('display', 'block');

        $('#emptyLablTab2').css('display', 'block');
        $('#emptyLablTab3').css('display', 'block');
    }
    if (response > limit) {
        $('#pagination').css('display', 'block');

        $('#paginationTab2').css('display', 'block');
        $('#paginationTab3').css('display', 'block');
        if (response % limit == 0) {
            var totalPages = response / limit;
        }
        else {
            var totalPages = Math.floor(response / limit) + 1;
        }
    } else {
        $('#pagination').css('display', 'none');

        $('#paginationTab2').css('display', 'none');
        $('#paginationTab3').css('display', 'none');
        if (response % limit == 0) {
            var totalPages = response / limit;
        }
        else {
            var totalPages = Math.floor(response / limit) + 1;
        }
    }
    var startPage, endPage;
    if (totalPages <= 5) {
        startPage = 1;
        endPage   = totalPages;
    } else {
        if (currentPage <= 2) {
            startPage = 1;
            endPage   = 5;
        } else if (currentPage + 2 >= totalPages) {
            startPage = totalPages - 4;
            endPage   = totalPages;
        } else {
            startPage = currentPage - 2;
            endPage   = currentPage + 2;
        }
    }
    var obj = {
        startPage : startPage,
        endPage   : endPage,
        totalPages: totalPages
    };
    return obj;
}
function carouselawards () {
    $('.carousel').each(function () {
        $(this).carousel();

        var carousel = $(this).data('bs.carousel');
        carousel.pause();
        $(this).find('> .carousel-inner > .item:not(:first-child)').each(function () {
            $(this).prependTo(this.parentNode);
        });

        // Override the bootstrap carousel prototype function, adding a different one won't work
        // (it'll work only for the first slide)
        carousel.cycle = function (e) {
            if (!e) this.paused = false
            if (this.interval) clearInterval(this.interval);
            this.options.interval
            && !this.paused
            && (this.interval = setInterval($.proxy(this.prev, this), this.options.interval))
            return this;
        };

        carousel.cycle();
    });
}

function getFooterContents () {

    jQuery.ajax({
                    url        : context + '/getEcommerceSectionData/getSection10',
                    type       : 'GET',
                    cache      : false,
                    contentType: "application/json",
                    dataType   : 'json',
                    success    : function (data) {
                        if (data.status == "EXCEPTION") {
                            getErrorNotification(verify(data.message));
                            fadeOutLoading();
                        } else if (data.status == "FAILURE") {
                            getErrorNotification(verify(data.message));
                            fadeOutLoading();
                        } else {
                            $.each(data, function (i, v) {
                                if (i == 'object') {

                                    jQuery('#footerElementsList').empty("");
                                    jQuery('#socialMediaList').empty("");
                                    var footerContactList = v.officeContactsList;

                                    for (var i = 0; i < footerContactList.length; i++) {
                                        var address3 = "";
                                        if (footerContactList[i].address3 == "null" ||
                                            footerContactList[i].address3 == null) {
                                            address3 = "";
                                        } else {
                                            address3 = footerContactList[i].address3;
                                        }
                                        var fax = "";
                                        if (footerContactList[i].fax == "null" ||
                                            footerContactList[i].fax == null ||
                                            footerContactList[i].fax == "") {
                                            fax = "";
                                        } else {
                                            fax = footerContactList[i].faxLabel + ': ' + verify(
                                                    footerContactList[i].fax);
                                        }
                                        var phone = "";
                                        if (footerContactList[i].phone == "null" ||
                                            footerContactList[i].phone == null ||
                                            footerContactList[i].phone == "") {
                                            phone = "";
                                        } else {
                                            phone = verify(
                                                    footerContactList[i].phoneLabel) + ': '
                                                    + '<a href="tel:' + verify(
                                                    footerContactList[i].phone) + '">'
                                                    + verify(footerContactList[i].phone)
                                                    + '</a>';
                                        }


                                    }
                                }


                            });
                        }
                    },

                    error: function (XMLHttpRequest, textStatus, errorThrown) {

                    }

                });

}

function getFooteraddress () {

    jQuery.ajax({
                    url        : context + '/getEcommerceSectionData/getSection10',
                    type       : 'GET',
                    cache      : false,
                    contentType: "application/json",
                    dataType   : 'json',
                    success    : function (data) {
                        if (data.status == "EXCEPTION") {
                            getErrorNotification(verify(data.message));
                            fadeOutLoading();
                        } else if (data.status == "FAILURE") {
                            getErrorNotification(verify(data.message));
                            fadeOutLoading();
                        } else {
                            $.each(data, function (i, v) {
                                if (i == 'object') {
                                    jQuery('#footerContacList').empty("");

                                    var footerContactList = v.officeContactsList;

                                    for (var i = 0; i < footerContactList.length; i++) {
                                        var address3 = "";
                                        if (footerContactList[i].address3 == "null" ||
                                            footerContactList[i].address3 == null) {
                                            address3 = "";
                                        } else {
                                            address3 = footerContactList[i].address3;
                                        }
                                        var fax = "";
                                        if (footerContactList[i].fax == "null" ||
                                            footerContactList[i].fax == null ||
                                            footerContactList[i].fax == "") {
                                            fax = "";
                                        } else {
                                            fax = footerContactList[i].faxLabel + ': ' + verify(
                                                    footerContactList[i].fax);
                                        }
                                        var phone = "";
                                        if (footerContactList[i].phone == "null" ||
                                            footerContactList[i].phone == null ||
                                            footerContactList[i].phone == "") {
                                            phone = "";
                                        } else {
                                            phone = verify(
                                                    footerContactList[i].phoneLabel) + ': '
                                                    + '<a href="tel:' + verify(
                                                    footerContactList[i].phone) + '">'
                                                    + verify(footerContactList[i].phone)
                                                    + '</a>';
                                        }


                                        jQuery('#footerContactList').append(
                                            '<div class="col-xs-6 col-lg-3"><h6>'
                                            + verify(footerContactList[i].companyName)
                                            + '</h6><ul><li>' + verify(
                                                footerContactList[i].address1)
                                            + ' ' + verify(
                                                footerContactList[i].address2)
                                            + ' ' + (address3) + '</li><li>' + (phone) +
                                            '</li><li>' + verify(
                                                footerContactList[i].emailLabel)
                                            + ': <a href="mailto:' + verify(
                                                footerContactList[i].email) + '">'
                                            + verify(footerContactList[i].email)
                                            + '</a></li><li>' + (fax) +
                                            '</li></ul> </div>')
                                    }
                                }

                            });


                        }
                    },
                    error      : function (XMLHttpRequest, textStatus, errorThrown) {

                    }

                });
}

function mailBCC () {
    $('.mailBCC').toggle();
}

function mailCC () {
    $('.mailCC').toggle();
}

function errormsg (msg) {
    $('div.failure').text(msg);
    $("div.failure").fadeIn().delay(1500).fadeOut(400);
}

function successmsg (msg) {
    $('div.success').text(msg);
    $("div.success").show();
}

function goToWishList () {
    window.location = context + '/ecommerce' + lang + '/wishlist';
}

function goToOrderHistory () {
    window.location = context + '/ecommerce' + lang + '/orderHistory';
}

function goToVtbSystem () {
    window.location = context;
}

function userInfo () {
    jQuery.ajax({
                    url        : context + '/getUserData',
                    type       : 'GET',
                    cache      : false,
                    contentType: "application/json",
                    dataType   : 'json',
                    success    : function (data) {
                        if (data.status == 'SUCCESS') {
                            if (data.object.fullName != null) {
                                $('#userName').text(data.object.fullName);
                                $('#profileName').text('Hellow ' + data.object.fullName);
                            }
                            $('#profilePic').attr("src", data.object.profileImage)

                        }
                    }
                })
}

function getsidebar () {
    jQuery.ajax({
                    url        : context + '/getUserPermissions',
                    type       : 'GET',
                    cache      : false,
                    contentType: "application/json",
                    dataType   : 'json',
                    success    : function (data) {
                        if (data.status == "SUCCESS") {
                            $.each(data.object, function (i, v) {
                                if (i == "brandAccess" && v == false) {
                                    $('#brandli').css("display", "none");
                                }

                                if (i == "categoryAccess" && v == false) {
                                    $('#cateli').css("display", "none");
                                }

                                if (i == "groupAccess" && v == false) {
                                    $('#groupli').css("display", "none");
                                }

                                if (i == "subgroupAccess" && v == false) {
                                    $('#subgroupli').css("display", "none");
                                }

                                if (i == "languageAccess" && v == false) {
                                    $('#langli').css("display", "none");
                                }

                                if (i == "translationAccess" && v == false) {
                                    $('#transli').css("display", "none");
                                }

                                if (i == "sectionsAccess" && v == false) {
                                    $('#sectionli').css("display", "none");
                                }

                                if (i == "headerAccess" && v == false) {
                                    $('#headersecli').css("display", "none");
                                }

                                if (i == "sliderAccess" && v == false) {
                                    $('#slidersecli').css("display", "none");
                                }

                                if (i == "section3Access" && v == false) {
                                    $('#section3li').css("display", "none");
                                }

                                if (i == "section4Access" && v == false) {
                                    $('#section4li').css("display", "none");
                                }

                                if (i == "section5Access" && v == false) {
                                    $('#section5li').css("display", "none");
                                }

                                if (i == "section6Access" && v == false) {
                                    $('#section6li').css("display", "none");
                                }

                                if (i == "section7Access" && v == false) {
                                    $('#section7li').css("display", "none");
                                }

                                if (i == "section8Access" && v == false) {
                                    $('#section8li').css("display", "none");
                                }

                                if (i == "section9Access" && v == false) {
                                    $('#section9li').css("display", "none");
                                }

                                if (i == "section3Access" && v == false) {
                                    $('#section3li').css("display", "none");
                                }

                                if (i == "footerInfoAccess" && v == false) {
                                    $('#footerli').css("display", "none");
                                }

                                if (i == "navigationPageAccess" && v == false) {
                                    $('#navili').css("display", "none");
                                }

                                if (i == "generalPageAccess" && v == false) {
                                    $('#generalpageli').css("display", "none");
                                }

                                if (i == "seoAccess" && v == false) {
                                    $('#seoli').css("display", "none");
                                }

                                if (i == "placeHolderAccess" && v == false) {
                                    $('#placeholderli').css("display", "none");
                                }

                                if (i == "formAccess" && v == false) {
                                    $('#formli').css("display", "none");
                                }

                                if (i == "staticLabelAccess" && v == false) {
                                    $('#staticlabelli').css("display", "none");
                                }


                                if (i == "pendingApprovalAccess" && v == false) {
                                    $('#approvelli').css("display", "none");
                                }

                                if (i == "reviewsAccess" && v == false) {
                                    $('#reviewli').css("display", "none");
                                }

                                if (i == "salonAccess" && v == false) {
                                    $('#saloonli').css("display", "none");
                                }

                                if (i == "distributorAccess" && v == false) {
                                    $('#distributorli').css("display", "none");
                                }
                                if (i == "productsAccess" && v == false) {
                                    $('#productli').css("display", "none");
                                }
                                //============================================

                                if (i == "addProductAccess" && v == false) {
                                    $('#addproductli').css("display", "none");
                                }

                                if (i == "listAllProcutAccess" && v == false) {
                                    $('#listproductli').css("display", "none");
                                }

                                if (i == "featuredProductAccess" && v == false) {
                                    $('#featureproductli').css("display", "none");
                                }

                                if (i == "popularProductAccess" && v == false) {
                                    $('#popproductli').css("display", "none");
                                }

                                if (i == "visiblePerCountryAccess" && v == false) {
                                    $('#vpcli').css("display", "none");
                                }

                                if (i == "visiblePerUserAccess" && v == false) {
                                    $('#vpuli').css("display", "none");
                                }

                                if (i == "pricePerCountryAccess" && v == false) {
                                    $('#ppcli').css("display", "none");
                                }

                                if (i == "pricePerUserAccess" && v == false) {
                                    $('#ppuli').css("display", "none");
                                }

                                if (i == "setPricePerCountryAccess" && v == false) {
                                    $('#sppcli').css("display", "none");
                                }

                                if (i == "setPricePerUserAccess" && v == false) {
                                    $('#sppuli').css("display", "none");
                                }

                                if (i == "setVisibilityPerCountryAccess" && v == false) {
                                    $('#svpcli').css("display", "none");
                                }
                                /* ==========user management permission===========*/
                                if (i == "userManagementAccess" && v == false) {
                                    $('#usermanageli').css("display", "none");
                                }

                                if (i == "businessRuleAccess" && v == false) {
                                    $('#bussinessRules').css("display", "none");
                                }
                            });
                        } else {
                            getErrorNotification(verify(data.message));
                            fadeOutLoading();
                        }
                    },
                    error      : function (XMLHttpRequest, textStatus, errorThrown) {

                    }
                });
}


function slimScrollForSideBar () {
    $('#slim123').slimScroll({
                                 height     : '550px',
                                 color      : '#fff',
                                 railColor  : '#fff',
                                 railOpacity: 1,

                             });

}

function checklogin () {
    jQuery.ajax({
                    url        : context + '/isUserLoggedIn',
                    type       : 'GET',
                    cache      : false,
                    contentType: "application/json",
                    dataType   : 'json',
                    success    : function (data) {
                        if (data == null || data == '' || data == undefined ||
                            (data.status != "SUCCESS" && data.object != true)) {
                            window.location.replace(server + "login-register");
                        }
                    },
                    error      : function (XMLHttpRequest, textStatus, errorThrown) {
                        window.location.replace(server + "login-register");
                    }

                });
}

$(document).ready(function () {
    getsidebar();
    setInterval(function () { checklogin(); }, logincaller);
    slimScrollForSideBar();
});
function logOut () {
    window.open(context + '/logout/', '_self')
}

function validatePercntage (x) {
    var parts = x.split(".");
    if (typeof parts[1] === "string" && (parts[1].length === 0 || parts[1].length > 2)) {
        return false;
    }
    var n = parseFloat(x);
    if (isNaN(n)) {
        return false;
    }
    if (n < 0 || n > 100) {
        return false;
    }

    return true;
}
function characterLessValue (event) {
    var key = event.which;
    if (key > 64 && key < 91 || key > 96 && key < 123 || (key === 32)) {
        event.preventDefault();
    }
}