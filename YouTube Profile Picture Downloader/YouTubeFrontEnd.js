 $(document).ready(function(){
                $('#subButton').click(function(){
                    const a = $('#urlerId').val()
    var final = `https://bv23xuvq26.execute-api.us-east-2.amazonaws.com/youtube-profile-download?urler=${a}`
                    receive_change_image(final);
                });
            });

async function receive_change_image(url) {
    $("#changeImg").attr("src", 'https://esymi5ndv4y.exactdn.com/wp-content/uploads/2022/10/youtube-profile-picture-downloader.webp');
    let obj;
    const res = await fetch(url)
    obj = await res.json();
    finalImage = obj["url"];
    $("#changeImg").attr("src", finalImage);
}
