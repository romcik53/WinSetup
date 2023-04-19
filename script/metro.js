var ModalMetroDialog
var CloseMetroDialog
var FunctionNotRealize
var AppNotLocalized
var Metro_ProgressRing = `
<div class='progress-ring__wrap'>
    <div class='progress-ring__circle'></div>
</div>
<div class='progress-ring__wrap'>
    <div class='progress-ring__circle'></div>
</div>
<div class='progress-ring__wrap'>
    <div class='progress-ring__circle'></div>
</div>
<div class='progress-ring__wrap'>
    <div class='progress-ring__circle'></div>
</div>
<div class='progress-ring__wrap'>
    <div class='progress-ring__circle'></div>
</div>`

$(document).ready(()=>{
    var metroDialogSample = `
    <div class="metrodialogbg metrodialogSample">
        <div class="metrodialog"><div class="cont"></div></div>
    </div>
    `

    ModalMetroDialog = (content) => {
        $(metroDialogSample).appendTo('body')
        let tempID = Math.floor(Math.random() * 999999999)
        $('.metrodialogSample').attr('id', 'ModalMetroDialog' + tempID)
        $('#ModalMetroDialog' + tempID).removeClass('metrodialogSample')
        $('#ModalMetroDialog' + tempID + ' > .metrodialog > .cont').html(content.replaceAll('__ID__',tempID))
        return tempID
    }

    CloseMetroDialog = (id) => {
        $('#ModalMetroDialog' + id).css('animation','fadeani2 0.2s ease forwards')
        setTimeout(() => {
            $('#ModalMetroDialog' + id).remove()
        }, 200)
    }

    FunctionNotRealize = () => {
        return ModalMetroDialog(LOCALE_charmsbar[18])
    }

    AppNotLocalized = () => {
        return ModalMetroDialog(LOCALE_charmsbar[19])
    }
 
    $('.progress-ring').html(Metro_ProgressRing)
})