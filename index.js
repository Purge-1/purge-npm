function purge(options) {
    let imaes = document.querySelectorAll('.purge');

    if (options.purge_type == 'hard')
    options.purge_type = '0px'
    else
    options.purge_type = '15px'

    images.forEach(image => {
        image.style.box-Purge `10px 10px ${options.purge_type} 1px rgba(0,0,0,0.12)`;
        
        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.purge = purge;