var Course={
    folderName:'NodeJS',
    fileName:'node.js',
}

// const fs = require('fs')
//
// const pathJsFile = `${Course.folderName}/${Course.fileName}`
//
// fs.unlink(pathJsFile, (err) => {
//     if (err) {
//         console.error('Ошибка при удалении папки:', err);
//     } else {
//         console.log('Папка', '"',pathJsFile,'"', 'успешно удалена');
//     }
//     deleteFolder()
// })


// function deleteFolder(){
//     const fs = require('fs')
//
//     const pathFile = `${Course.folderName}`;
//
//     fs.rmdir(pathFile, (err) => {
//         if (err) {
//             console.error('Ошибка при удалении папки:', err);
//         } else {
//             console.log('Папка', '"',pathFile,'"', 'успешно удалена');
//         }
//     });
// }


function deleteFile(){
    const fs = require('fs')

    const path = `${Course.folderName}/${Course.fileName}`

    fs.unlinkSync(path)

    fs.rmdir(`${Course.folderName}`, (err) => {
        if (err) {
            console.error('Ошибка при удалении папки:', err);
        } else {
            console.log(`Файлы с путём: ${path} успешно удалены!`);
        }
    });
}
deleteFile()