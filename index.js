/**
 * Created by gail on 5/23/16.
 */

exports.parse = function(url) {
    const regex = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*(:\d{2,4})?\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;
        
        // /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;

    var retval = null;

    var matches = url.match(regex);
    if(matches) {
        retval = getObj(matches);
    }

    return retval;
}

function getObj(matches) {
    var file, path, index, filepath = matches[7];

    index = matches[7].lastIndexOf('/');

    if(index > -1) {
        path = matches[7].substring(0, index);
        file = matches[7].substring(index+1)
    } else {
        file = matches[7];
        path = '/';
    }

    return {
        url: matches[0],
        host: matches[3],
        port: matches[6] || '',
        file: file,
        path: path
    };
}