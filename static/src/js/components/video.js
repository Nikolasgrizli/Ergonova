import $ from "jquery";


var videoPopup = $('.js-popup-video'),
    videoFrame = $('.video__wrapper iframe');
if (videoFrame[0]) {
    var videoVimeoContentWindow = videoFrame[0].contentWindow,
        videoVimeoTargetOriginUrl = videoFrame.attr('src').split('?')[0],
        videoYoutubeTargetOriginUrl = videoFrame.attr('src');



    if (videoYoutubeTargetOriginUrl.includes('youtube')) {
        var newSource = videoYoutubeTargetOriginUrl.replace('autoplay=1', 'autoplay=0');
        videoFrame.attr('src', newSource);
    }

    $('.js-modalVideo-play').on('click', function (e) {
        e.preventDefault();
        if (videoVimeoTargetOriginUrl.indexOf('vimeo') > -1) {
            videoVimeoContentWindow.postMessage({
                'method': 'play'
            }, videoVimeoTargetOriginUrl);
        } else if (videoYoutubeTargetOriginUrl.indexOf('youtube') > -1) {
            videoFrame.attr('src', videoYoutubeTargetOriginUrl.replace('autoplay=0', 'autoplay=1'));
        }

        smartModal.open('video1')
        // videoPopup
        //     .fadeIn();
    });

    $('.js-video-close').on('click', function () {
        if (videoVimeoTargetOriginUrl.indexOf('vimeo') > -1) {
            videoVimeoContentWindow.postMessage({
                'method': 'pause'
            }, videoVimeoTargetOriginUrl);
            var legVimeo = videoFrame.attr('src');
            videoFrame
                .attr('src', legVimeo);
        } else if (videoYoutubeTargetOriginUrl.indexOf('youtube') > -1) {
            videoFrame.attr('src', videoYoutubeTargetOriginUrl.replace('&autoplay=1', '&autoplay=0'));
        }
        smartModal.close('video1')
    });

}