$(document).ready(function(){
    // alert("hello me aa gya")
    // console.log("it is running")
    $("#animal").click(function(){
        $(".animal").show(1000)
        $(".men").hide(1000)
        $(".women").hide(1000)
        $(".bird").hide(1000)
    })
    $("#men").click(function(){
        $(".men").show(1000)
        $(".animal").hide(1000)
        $(".women").hide(1000)
        $(".bird").hide(1000)
    })
    $("#women").click(function(){
        $(".women").show(1000)
        $(".men").hide(1000)
        $(".animal").hide(1000)
        $(".bird").hide(1000)
    })
    $("#bird").click(function(){
        $(".bird").show(1000)
        $(".women").hide(1000)
        $(".men").hide(1000)
        $(".animal").hide(1000)
    })
    $("#all").click(function(){
        $(".bird").show(1000)
        $(".women").show(1000)
        $(".men").show(1000)
        $(".animal").show(1000)
    })
})